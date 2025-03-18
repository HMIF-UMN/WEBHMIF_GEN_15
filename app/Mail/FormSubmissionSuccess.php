<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class FormSubmissionSuccess extends Mailable
{
    use Queueable, SerializesModels;

    public $formData;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($formData)
    {
        $this->formData = $formData;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Form Submission Successful')
                    ->view('emails.form_submission_success')
                    ->text('emails.form_submission_success_plain');
    }
}
