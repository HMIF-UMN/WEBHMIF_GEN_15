<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CSSGroup;

class CSSGroupController extends Controller
{
    public function show($id)
    {
        $group = CSSGroup::find($id);

        if($group){
            return response()->json([
                'message' => 'Group found',
                'data' => $group,
            ]);
        }else{
            return response()->json([
                'message' => 'Group not found',
                'data' => null,
            ]);
        }
    }
}
