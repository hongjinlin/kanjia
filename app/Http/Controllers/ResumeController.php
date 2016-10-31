<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ResumeController extends Controller
{

    //桦爷简历
    public function huaye(){
        return view('resume/huaye');
    }
}
