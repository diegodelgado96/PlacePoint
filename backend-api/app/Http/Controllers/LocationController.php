<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;

class LocationController extends Controller
{
    /*
     * Retorna una lista de sedes desde un archivo JSON.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        // Ruta al archivo JSON en el directorio 'storage/app'
        $path = storage_path('app/locations.json');

        if (! file_exists($path)) {
            return response()->json(['error' => 'Archivo no encontrado'], 404);
        }

        $data = file_get_contents($path);

        // Decodifica el JSON a un array de PHP
        $locations = json_decode($data, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            return response()->json(['error' => 'Error al procesar los datos'], 500);
        }

        // Retorna los datos como JSON
        return response()->json(['data' => $locations], 200);
    }
}
