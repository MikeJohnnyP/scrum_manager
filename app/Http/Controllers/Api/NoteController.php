<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Note;
use Illuminate\Http\JsonResponse;

class NoteController extends BaseApiController
{
    public function index(): JsonResponse {
        return $this->successResponse(Note::all());
    }
}
