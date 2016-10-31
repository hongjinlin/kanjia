<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class HuayeController extends Controller
{

    //桦爷简历
    public function index(){
        return view('huaye/index');
    }

    public function autumn(){
        return view('huaye/autumn');
    }

    public function cloud(){
        return view('huaye/cloud');
    }

    public function fashion(){
        return view('huaye/fashion');
    }

    public function jinyin(){
        return view('huaye/jinyin');
    }

    public function mofan(){
        return view('huaye/mofan');
    }

    public function school(){
        return view('huaye/school');
    }

    public function shop(){
        return view('huaye/shop');
    }

    public function smart(){
        return view('huaye/smart');
    }


}
