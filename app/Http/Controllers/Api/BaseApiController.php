<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Traits\ApiResponser;

class BaseApiController extends Controller
{
    use ApiResponser;
    protected $_service;

    public function get()
    {
        $dataPost = request()->all();
        $data = $this->_service->get($dataPost);
        return $this->successResponse($data);
    }

    public function all()
    {
        $result = $this->_service->getAll();
        if ($result)
            return $this->successResponse($result);
        return $this->errorResponse("Empty");
    }
}
