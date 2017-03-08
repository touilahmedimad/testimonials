<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Testimonial;

class TestimonialController extends Controller
{
    public function __construct(){
    $this->middleware('auth.jwt');
    }
    public function get (Request $request){
        $user = JWTAuth::parseToken()->authenticate();
        $testimonials = Testimonial::where('user_id', $user['id'])->paginate(5);
        return array('testimonials'=>$testimonials, 'user'=> $user);
    }
}
