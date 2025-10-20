<?php

use App\Http\Controllers\Api;
use App\Http\Controllers\Api\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name("home");

Route::inertia('/about', 'About', ['user' => 'Mike'])->name("about");

Route::inertia('/tasks', 'Task')->name("tasks");

Route::inertia('/login', 'Login')->name("login");

