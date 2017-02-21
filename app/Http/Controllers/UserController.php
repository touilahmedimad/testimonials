<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;

class UserController extends Controller
{
    public function SignIn(Request $request)
    {
        $this->validate($request, [
            'email' => 'required',
            'password' => 'required'
        ]);
        $credentials = $request->all();
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'error' => 'Invalid Credentials!'
                ], 401);
            }
        } catch (JWTException $e) {
            return response()->json([
                'error' => 'Oops! Something went wrong'
            ],500);
        }
        return response()->json([
            'token' => $token
        ],200);
    }
}
