<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::middleware([])->group(function () {
    Route::prefix("v1")-> group(function () {
        include base_path("routes/apis/note.php");
    });
});
