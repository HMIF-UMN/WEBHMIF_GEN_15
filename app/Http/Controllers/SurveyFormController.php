<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia; // Make sure to include this line

class SurveyFormController extends Controller
{
    public function showForm()
    {
        return Inertia::render('surveyForm', []);
    }
}
