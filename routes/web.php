<?php

use Illuminate\Support\Facades\Route;
use App\Models\Referral;
use App\Models\ContactMessage;
use Illuminate\Http\Request;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
Route::get('/', function () {
    return inertia('Home');
});

Route::get('/about-us', function () {
    return inertia('About');
});

Route::get('/services', function () {
    return inertia('Services');
});

Route::get('/participant', function () {
    return inertia('Participant');
});

Route::get('/terms', function () {
    return inertia('Terms');
});

Route::get('/privacy', function () {
    return inertia('Privacy');
});

Route::redirect('/terms-condition', '/terms', 301);
Route::redirect('/privacy-policy', '/privacy', 301);

Route::match(['get', 'post'], '/referral', function (Request $request) {

    if ($request->isMethod('post')) {

        $validated = $request->validate([
            'first_name'  => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'referee_email' => 'required|email|max:255',
            'referee_contact' => 'nullable|digits_between:10,13',
            'referee_position' => 'nullable|string|max:100',
            'referee_purpose' => 'nullable|string|max:255',
            'service' => 'nullable|string|max:100',
        ]);

        Referral::create($validated);

        require base_path("vendor/autoload.php");

        $mail = new PHPMailer(true);

        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host       = env('MAIL_HOST');
            $mail->SMTPAuth   = true;
            $mail->Username   = env('MAIL_USERNAME');
            $mail->Password   = env('MAIL_PASSWORD');
            $mail->SMTPSecure = env('MAIL_ENCRYPTION'); // tls or ssl
            $mail->Port       = env('MAIL_PORT');

            // Sender
            $mail->setFrom(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'));

            // Recipient
            $mail->addAddress('sainirupal878@gmail.com');

            // Content
            $mail->isHTML(true);
            $mail->Subject = 'New Referral Submission';
            $mail->Body    = '<!DOCTYPE html>
                        <html>
                        <head>
                            <meta charset="UTF-8">
                            <title>New Referral Form Submission</title>
                        </head>
                        <body style="margin:0; padding:0; font-family: Arial, Helvetica, sans-serif; background-color:#f4f6f8;">

                            <table width="100%" cellpadding="0" cellspacing="0" style="padding: 30px 0;">
                                <tr>
                                    <td align="center">
                                        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 3px 10px rgba(0,0,0,0.08);">
                                            <tr>
                                                <td style="background:#2c3e50; padding:20px; text-align:center;">
                                                    <h2 style="color:#ffffff; margin:0;">New Referral Form Submission</h2>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding:25px;">
                                                    <p style="margin:0 0 15px 0; font-size:15px; color:#333;">
                                                        Hello Admin,<br><br>
                                                        A new referral form has been submitted. Below are the details:
                                                    </p>

                                                    <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-size:14px;">

                                                        <tr style="background:#f8f9fb;">
                                                            <td><strong>First Name</strong></td>
                                                            <td>'.$request->first_name.'</td>
                                                        </tr>

                                                        <tr>
                                                            <td><strong>Last Name</strong></td>
                                                            <td>'.$request->last_name.'</td>
                                                        </tr>

                                                        <tr style="background:#f8f9fb;">
                                                            <td><strong>Email of Referee</strong></td>
                                                            <td>'.$request->referee_email.'</td>
                                                        </tr>

                                                        <tr>
                                                            <td><strong>Contact Number of Referee</strong></td>
                                                            <td>'.$request->referee_contact.'</td>
                                                        </tr>

                                                        <tr style="background:#f8f9fb;">
                                                            <td><strong>Referee’s Profession</strong></td>
                                                            <td>'.$request->referee_position.'</td>
                                                        </tr>

                                                        <tr>
                                                            <td><strong>Purpose of Making Referral</strong></td>
                                                            <td>'.$request->referee_purpose.'</td>
                                                        </tr>

                                                        <tr style="background:#f8f9fb;">
                                                            <td><strong>Service Looking For</strong></td>
                                                            <td>'.$request->service.'</td>
                                                        </tr>

                                                        <tr>
                                                            <td><strong>Submitted Date</strong></td>
                                                            <td>'.date("d M Y H:i:s").'</td>
                                                        </tr>

                                                    </table>

                                                    <p style="margin-top:20px; font-size:14px; color:#555;">
                                                        Please follow up as soon as possible.
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="background:#f0f2f5; padding:15px; text-align:center; font-size:12px; color:#777;">
                                                    This is an automated notification email from your website.
                                                </td>
                                            </tr>

                                        </table>
                                    </td>
                                </tr>
                            </table>

                        </body>
                        </html>';

            $mail->send();

        } catch (Exception $e) {
            return "❌ Mail Error: " . $mail->ErrorInfo;
        }
        return back()->with('success', 'Referral submitted successfully!');
    }

    return inertia('Referral');

})->name('referral');

Route::match(['get', 'post'], '/contact-us', function (Request $request) {

    if ($request->isMethod('post')) {

        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'phone' => 'nullable|digits_between:10,13',
            'message' => 'required|string',
        ]);

        ContactMessage::create($validated);

        require base_path("vendor/autoload.php");

        $mail = new PHPMailer(true);

        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host       = env('MAIL_HOST');
            $mail->SMTPAuth   = true;
            $mail->Username   = env('MAIL_USERNAME');
            $mail->Password   = env('MAIL_PASSWORD');
            $mail->SMTPSecure = env('MAIL_ENCRYPTION'); // tls or ssl
            $mail->Port       = env('MAIL_PORT');

            // Sender
            $mail->setFrom(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'));

            // Recipient
            $mail->addAddress('sainirupal878@gmail.com');

            // Content
            $mail->isHTML(true);
            $mail->Subject = 'New Enquiry from Contact Us Form';
            $mail->Body    = '<!DOCTYPE html>
                        <html>
                        <head>
                            <meta charset="UTF-8">
                            <title>New Referral Form Submission</title>
                        </head>
                        <body style="margin:0; padding:0; font-family: Arial, Helvetica, sans-serif; background-color:#f4f6f8;">

                            <table width="100%" cellpadding="0" cellspacing="0" style="padding: 30px 0;">
                                <tr>
                                    <td align="center">
                                        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 3px 10px rgba(0,0,0,0.08);">
                                            <tr>
                                                <td style="background:#2c3e50; padding:20px; text-align:center;">
                                                    <h2 style="color:#ffffff; margin:0;">New Enquiry Form Submission</h2>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding:25px;">
                                                    <p style="margin:0 0 15px 0; font-size:15px; color:#333;">
                                                        Hello Admin,<br><br>
                                                        A new enquiry form has been submitted. Below are the details:
                                                    </p>

                                                    <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-size:14px;">

                                                        <tr style="background:#f8f9fb;">
                                                            <td><strong>Name</strong></td>
                                                            <td>'.$request->name.'</td>
                                                        </tr>

                                                        <tr>
                                                            <td><strong>Contact No.</strong></td>
                                                            <td>'.$request->phone.'</td>
                                                        </tr>

                                                        <tr style="background:#f8f9fb;">
                                                            <td><strong>Email</strong></td>
                                                            <td>'.$request->email.'</td>
                                                        </tr>

                                                        <tr>
                                                            <td><strong>Message</strong></td>
                                                            <td>'.$request->message.'</td>
                                                        </tr>


                                                        <tr>
                                                            <td><strong>Submitted Date</strong></td>
                                                            <td>'.date("d M Y H:i:s").'</td>
                                                        </tr>

                                                    </table>

                                                    <p style="margin-top:20px; font-size:14px; color:#555;">
                                                        Please follow up as soon as possible.
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="background:#f0f2f5; padding:15px; text-align:center; font-size:12px; color:#777;">
                                                    This is an automated notification email from your website.
                                                </td>
                                            </tr>

                                        </table>
                                    </td>
                                </tr>
                            </table>

                        </body>
                        </html>';

            $mail->send();

        } catch (Exception $e) {
            return "❌ Mail Error: " . $mail->ErrorInfo;
        }
        return back()->with('success', 'Message sent successfully!');
    }

    return inertia('Contact');

})->name('contact');

Route::get('/faq', function () {
    return inertia('Faq');
});
