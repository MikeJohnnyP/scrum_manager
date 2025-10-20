<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Api\BaseApiController;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class HomeController extends BaseApiController
{
    public function index()
    {
        return Inertia::render('Home');
    }
}