<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class GameController extends Controller
{
    
    //中秋博饼展示页
    public function autumn(){
        return view('game/autumn');
    }
}
