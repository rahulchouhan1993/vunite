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
            $mail->Host       = env('MAIL_HOST','sh00073.cd.ds.network');
            $mail->SMTPAuth   = true;
            $mail->Username   = env('MAIL_USERNAME','info@vunitesupportservices.com.au');
            $mail->Password   = env('MAIL_PASSWORD','n!0D-$f%_sbO');
            $mail->SMTPSecure = env('MAIL_ENCRYPTION','tls'); // tls or ssl
            $mail->Port       = env('MAIL_PORT','587');

            // Sender
            $mail->setFrom(env('MAIL_FROM_ADDRESS','info@vunitesupportservices.com.au'), env('MAIL_FROM_NAME','Vunitesupportservices'));

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

        //Thank you email to user
        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host       = env('MAIL_HOST','sh00073.cd.ds.network');
            $mail->SMTPAuth   = true;
            $mail->Username   = env('MAIL_USERNAME','info@vunitesupportservices.com.au');
            $mail->Password   = env('MAIL_PASSWORD','n!0D-$f%_sbO');
            $mail->SMTPSecure = env('MAIL_ENCRYPTION','tls'); // tls or ssl
            $mail->Port       = env('MAIL_PORT','587');

            // Sender
            $mail->setFrom(env('MAIL_FROM_ADDRESS','info@vunitesupportservices.com.au'), env('MAIL_FROM_NAME','Vunitesupportservices'));

            // Recipient
            $mail->addAddress($request->email);

            // Content
            $mail->isHTML(true);
            $mail->Subject = 'Thank You for Contacting Us';
            $mail->Body    = '<!DOCTYPE html>
                    <html>
                    <head>
                    <meta charset="UTF-8">
                    <title>Thank You for Contacting Us</title>
                    </head>
                    <body style="margin:0; padding:0; font-family: Arial, Helvetica, sans-serif; background-color:#f4f6f9;">

                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f9; padding:20px 0;">
                    <tr>
                        <td align="center">
                        
                        <!-- Email Container -->
                        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.05);">

                            <!-- Logo Section -->
                            <tr>
                            <td align="center" style="padding:30px 20px 10px 20px;">
                                <img src="/unitelogo.png" alt="Company Logo" style="max-width:180px;">
                            </td>
                            </tr>

                            <!-- Header -->
                            <tr>
                            <td align="center" style="padding:10px 30px;">
                                <h2 style="margin:0; color:#2b4eff;">Thank You for Contacting Us</h2>
                            </td>
                            </tr>

                            <!-- Body Content -->
                            <tr>
                            <td style="padding:20px 40px; color:'.$request->first_name.' '.$request->last_name.'</strong>,</p>

                                <p>We’ve received your message and truly appreciate you reaching out to us.</p>

                                <p>Our team is reviewing your enquiry, and we will get back to you as soon as possible, usually within <strong>24 business hours</strong>.</p>

                                <p>If your request is urgent, feel free to reply to this email or call us directly on +61 449 799 946</p>

                                <p>We look forward to assisting you and providing the support you need.</p>

                                <p style="margin-top:30px;">Warm regards,<br>
                                <strong>Vunite Support Services</strong></p>
                            </td>
                            </tr>

                            <!-- Divider -->
                            <tr>
                            <td style="padding:0 40px;">
                                <hr style="border:none; border-top:1px solid #eeeeee;">
                            </td>
                            </tr>

                            <!-- Footer Section -->
                            <tr>
                            <td style="padding:20px 40px; font-size:13px; color:#777777;">
                                <p style="margin:0;"><strong>Founder:</strong> Yuvraj Dhingra</p>
                                <p style="margin:5px 0;">📧 Email: <a href="mailto:info@vunitesupportservices.com.au" style="color:#2b4eff; text-decoration:none;">info@vunitesupportservices.com.au</a></p>
                                <p style="margin:5px 0;">📞 Phone: +61 449 799 946</p>
                                <p style="margin-top:15px; font-size:12px; color:#aaaaaa;">
                                © 2026 Vunite Support Services. All rights reserved.
                                </p>
                            </td>
                            </tr>

                        </table>
                        <!-- End Container -->

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
            $mail->Host       = env('MAIL_HOST','sh00073.cd.ds.network');
            $mail->SMTPAuth   = true;
            $mail->Username   = env('MAIL_USERNAME','info@vunitesupportservices.com.au');
            $mail->Password   = env('MAIL_PASSWORD','n!0D-$f%_sbO');
            $mail->SMTPSecure = env('MAIL_ENCRYPTION','tls'); // tls or ssl
            $mail->Port       = env('MAIL_PORT','587');

            // Sender
            $mail->setFrom(env('MAIL_FROM_ADDRESS','info@vunitesupportservices.com.au'), env('MAIL_FROM_NAME','Vunitesupportservices'));

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

        //Thank you email to user
        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host       = env('MAIL_HOST','sh00073.cd.ds.network');
            $mail->SMTPAuth   = true;
            $mail->Username   = env('MAIL_USERNAME','info@vunitesupportservices.com.au');
            $mail->Password   = env('MAIL_PASSWORD','n!0D-$f%_sbO');
            $mail->SMTPSecure = env('MAIL_ENCRYPTION','tls'); // tls or ssl
            $mail->Port       = env('MAIL_PORT','587');

            // Sender
            $mail->setFrom(env('MAIL_FROM_ADDRESS','info@vunitesupportservices.com.au'), env('MAIL_FROM_NAME','Vunitesupportservices'));

            // Recipient
            $mail->addAddress($request->email);

            // Content
            $mail->isHTML(true);
            $mail->Subject = 'Thank You for Contacting Us';
            $mail->Body    = '<!DOCTYPE html>
                    <html>
                    <head>
                    <meta charset="UTF-8">
                    <title>Thank You for Contacting Us</title>
                    </head>
                    <body style="margin:0; padding:0; font-family: Arial, Helvetica, sans-serif; background-color:#f4f6f9;">

                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f9; padding:20px 0;">
                    <tr>
                        <td align="center">
                        
                        <!-- Email Container -->
                        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.05);">

                            <!-- Logo Section -->
                            <tr>
                            <td align="center" style="padding:30px 20px 10px 20px;">
                                <img src="/unitelogo.png" alt="Company Logo" style="max-width:180px;">
                            </td>
                            </tr>

                            <!-- Header -->
                            <tr>
                            <td align="center" style="padding:10px 30px;">
                                <h2 style="margin:0; color:#2b4eff;">Thank You for Contacting Us</h2>
                            </td>
                            </tr>

                            <!-- Body Content -->
                            <tr>
                            <td style="padding:20px 40px; color:'.$request->name.'</strong>,</p>

                                <p>We’ve received your message and truly appreciate you reaching out to us.</p>

                                <p>Our team is reviewing your enquiry, and we will get back to you as soon as possible, usually within <strong>24 business hours</strong>.</p>

                                <p>If your request is urgent, feel free to reply to this email or call us directly on +61 449 799 946</p>

                                <p>We look forward to assisting you and providing the support you need.</p>

                                <p style="margin-top:30px;">Warm regards,<br>
                                <strong>Vunite Support Services</strong></p>
                            </td>
                            </tr>

                            <!-- Divider -->
                            <tr>
                            <td style="padding:0 40px;">
                                <hr style="border:none; border-top:1px solid #eeeeee;">
                            </td>
                            </tr>

                            <!-- Footer Section -->
                            <tr>
                            <td style="padding:20px 40px; font-size:13px; color:#777777;">
                                <p style="margin:0;"><strong>Founder:</strong> Yuvraj Dhingra</p>
                                <p style="margin:5px 0;">📧 Email: <a href="mailto:info@vunitesupportservices.com.au" style="color:#2b4eff; text-decoration:none;">info@vunitesupportservices.com.au</a></p>
                                <p style="margin:5px 0;">📞 Phone: +61 449 799 946</p>
                                <p style="margin-top:15px; font-size:12px; color:#aaaaaa;">
                                © 2026 Vunite Support Services. All rights reserved.
                                </p>
                            </td>
                            </tr>

                        </table>
                        <!-- End Container -->

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
