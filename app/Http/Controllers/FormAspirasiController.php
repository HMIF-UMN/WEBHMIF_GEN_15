<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Mail\FormSubmissionSuccess;
use Illuminate\Support\Facades\Mail;

class FormAspirasiController extends Controller
{
    public function submit(Request $request)
    {
        $client = new Client();

        // Add timestamp to the request data
        $formData = $request->all();
        $formData['timestamp'] = now()->toISOString();

            $response = $client->request('POST', 'https://script.google.com/macros/s/AKfycbxYk8Q_SAFd83lG4k4XU792zEakpGHf42bT_Pk50PCLsT3BcnhApDXbvtF036gtycWG/exec', [
                'form_params' => $formData,
                'headers' => [
                    'Content-Type' => 'application/x-www-form-urlencoded',
                ],
            ]);

            // Send email notification
            Mail::to($formData['email'])->send(new FormSubmissionSuccess($formData));

            // return Inertia::render('FormAspirasi', [
            //     'message' => 'Form submitted successfully',
            //     'result' => json_decode((string) $response->getBody(), true)
            // ]);

    }
}
