<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class FormDataMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        return $this->from('hmif@umn.ac.id')
                    ->subject('New Form Submission')
                    ->view('emails.formData')
                    ->with('data', $this->data);
    }
}
