<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Api\BaseApiController;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class HomeController extends BaseApiController
{
    public function index()
    {
        // $city = 'Hanoi';
        // $apiKey = '98de9e1db2328ab419fab8fd88baf342';
        // $response = Http::get("https://api.openweathermap.org/data/2.5/weather", [
        //     'q' => $city,
        //     'appid' => $apiKey,
        //     'units' => 'metric'
        // ]);
        // $weather = $response->json();

        return Inertia::render('Home', [
            // 'weather' => $weather
        ]);
    }
}