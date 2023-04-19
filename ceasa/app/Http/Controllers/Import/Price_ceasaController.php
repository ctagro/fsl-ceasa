<?php

namespace App\Http\Controllers\Import;

use App\Http\Controllers\Controller;
use App\Models\Price_ceasa_bh;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class Price_ceasaController extends Controller
{
    
    public function show(): Response
    {

       $price_ceasa_bhs = Price_ceasa_bh::find(2);
       // return $price_ceasa_bhs;

        dd($price_ceasa_bhs);

        return Inertia::render('Ceasa/Ceasa', [ 'price_ceasa_bhs' => Price_ceasa_bh::find(1)]);

        
    }
}
