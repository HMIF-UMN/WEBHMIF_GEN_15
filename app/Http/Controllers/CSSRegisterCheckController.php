<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CSSRegisterCheckController extends Controller
{
    protected $data;
    protected $maxTeamSize = [
        'Futsal' => 7,
        'Basket' => 5,
        'Mobile Legend' => 6,
        'Badminton Putra' => 2,
        'Badminton Campuran' => 2
    ];
    protected $maxTeams = [
        'Futsal' => 16,
        'Basket' => 16,
        'Mobile Legend' => 32,
        'Badminton Putra' => 16,
        'Badminton Campuran' => 16
    ];
    protected $maxFreshmenTeams = 8;

    public function __construct(array $data)
    {
        $this->data = $data;
    }

    public function isJoinTeam($competition, $referenceCode) {
        if (!isset($this->data['data'][$competition])) {
            return false;
        }

        $joinTeam = collect($this->data['data'][$competition])->where('Reference Code', $referenceCode);

        if ($joinTeam->isNotEmpty()) {
            return true;
        } else {
            return false;
        }
    }

    public function isTeamFull($competition, $referenceCode)
    {
        if (!isset($this->data['data'][$competition])) {
            return false;
        }

        $teamMembers = collect($this->data['data'][$competition])->where('Reference Code', $referenceCode);
        $teamSize = $teamMembers->count();

        return $teamSize >= ($this->maxTeamSize[$competition] ?? 0);
    }

    public function hasClass2024Registered($competition, $classChar, $referenceCode = null)
{
    if (!isset($this->data['data'][$competition])) {
        return false;
    }

    $registered = collect($this->data['data'][$competition])
        ->where('Angkatan', '2024')
        ->where('Kelas', $classChar);

    // Allow registration if the reference code matches
    if ($referenceCode) {
        $registered = $registered->where('Reference Code', '!=', $referenceCode);
    }

    return $registered->isNotEmpty();
}

    public function nonFreshmenTeamsExceedLimit($competition)
    {
        if (!isset($this->data['data'][$competition])) {
            return false;
        }

        $nonFreshmenTeams = collect($this->data['data'][$competition])
        ->where('Angkatan', '!=', '2024')
        ->groupBy('Reference Code')
        ->count();

        $maxNonFreshmenTeams = $competition === 'Mobile Legend' ? 24 : 8;
        return $nonFreshmenTeams >= $maxNonFreshmenTeams;
    }

    public function freshmenSpotsAvailable($competition)
    {
        if (!isset($this->data['data'][$competition])) {
            return true;
        }

        $freshmenTeams = collect($this->data['data'][$competition])
            ->where('Angkatan', '2024')
            ->groupBy('Reference Code')
            ->count();

        return $freshmenTeams < $this->maxFreshmenTeams;
    }

    public function isTotalTeamLimitReached($competition)
    {
        if (!isset($this->data['team'][$competition])) {
            return false;
        }

        return $this->data['team'][$competition] >= ($this->maxTeams[$competition] ?? 0);
    }

    public function canRegister($competition, $referenceCode, $angkatan, $classChar) {
        // Check if the total team limit is reached
        if ($competition == "MobileLegends") {
            $competition = "Mobile Legend";
        } else if ($competition == "BadmintonP") {
            $competition = "Badminton Putra";
        } else if ($competition == "BadmintonC") {
            $competition = "Badminton Campuran";
        }

        if ($this->isTotalTeamLimitReached($competition)) {
            return ['status' => false, 'message' => 'The maximum number of teams for this competition has been reached.'];
        }

        // Check if the team is full
        if ($this->isTeamFull($competition, $referenceCode)) {
            return ['status' => false, 'message' => 'Team is already full.'];
        }

        // Check if it's a 2024 student and if their class has already registered
        // if ($angkatan === '2024') {
        //     if ($this->hasClass2024Registered($competition, $classChar, $referenceCode)) {
        //         return ['status' => false, 'message' => 'Your class has already registered for this competition.'];
        //     }

        //     if (!$this->freshmenSpotsAvailable($competition)) {
        //         return ['status' => false, 'message' => 'No more spots available for freshmen in this competition.'];
        //     }
        // } else {
        //     // Check if non-freshmen teams exceed the limit
        //     if($this->isJoinTeam($competition, $referenceCode)) {
        //         return ['status' => true, 'message' => 'Registration allowed.'];
        //     } else {
        //         if ($this->nonFreshmenTeamsExceedLimit($competition)) {
        //             return ['status' => false, 'message' => 'Non-freshmen team limit exceeded for this competition.'];
        //         }
        //     }
        // }

        return ['status' => true, 'message' => 'Registration allowed.'];
    }
}
