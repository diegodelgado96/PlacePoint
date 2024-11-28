<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ApiKeyMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $apiKey = $request->header('api-key');  

        if (!$apiKey) {
            return response()->json(['error' => 'API Key es requerida'], 401);
        }

        if ($apiKey !== env('APP_KEY')) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $next($request);
    }
}