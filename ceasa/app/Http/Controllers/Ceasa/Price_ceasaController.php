<?php

namespace App\Http\Controllers\Ceasa;

use App\Http\Controllers\Controller;
use App\Models\Price_ceasa_bh;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Arr;

class Price_ceasaController extends Controller
{
    
    public function consult(): Response
    {
        return Inertia::render('Ceasa/Ceasa',[
            ]);
    }

    public function research(Request $request)
    {

       $pesquisa = $request;

        $termos = $request->only('product', 'date_inicial', 'date_final' );
        $prepareQuery = "";
        $query = "";
        foreach ($termos as $nome => $valor) {

            if($valor){
              //  $query = $query . "where("."'".$nome."'".","."'"."="."'".","."'". $valor. "')->";
                if ($nome == "product")
                    $prepareQuery = $prepareQuery . $nome. ' LIKE "'. '%'.$valor.'%'. '" AND ';                  
                if ($nome == "date_inicial") 
                        $prepareQuery = $prepareQuery . 'date'. '>="'. $valor. '" AND ';
                if ($nome == "date_final")
                        $prepareQuery = $prepareQuery . 'date'. '<="'. $valor. '" AND ';
            }
         }
   
         $query = substr($prepareQuery, 0 , -5);

      // dd($query);

        if ($query == False){
            $cotacoes = Price_ceasa_bh::get();
      
           return Inertia::render('Ceasa/Research',[
            'priceCeasa' =>  $cotacoes
                ]);   
        }

        $cotacoes = Price_ceasa_bh::whereRaw($query)->orderBy('date')->get();
        
       return Inertia::render('Ceasa/Research',[
            'priceCeasa' =>  $cotacoes
                ]);
    }

    public function barChart()

    {
       $query = 'product LIKE "%pimentao amarelo%"';

       $products = Price_ceasa_bh::whereRaw($query)->orderBy('date')->get();
      // $cotacoes_json =  $cotacoes->toJson();

        //   dd($cotacoes,$cotacoes_json);
       
      
           return  $products;
            

    }
}
