<?php

use App\Http\Controllers\Api\NoteController;
use Illuminate\Support\Facades\Route;

Route::prefix(("note"))->group(function() {
    Route::get("get-list", [NoteController::class, 'index']);
});