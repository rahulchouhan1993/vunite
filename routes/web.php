<?php

use Illuminate\Support\Facades\Route;
use App\Models\Referral;
use App\Models\ContactMessage;
use Illuminate\Http\Request;

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

Route::match(['get', 'post'], '/referral', function (Request $request) {

    if ($request->isMethod('post')) {

        $validated = $request->validate([
            'first_name'  => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'referee_email' => 'required|email|max:255',
            'referee_contact' => 'nullable|string|max:20',
            'referee_position' => 'nullable|string|max:100',
            'referee_purpose' => 'nullable|string|max:255',
            'service' => 'nullable|string|max:100',
        ]);

        Referral::create($validated);

        return back()->with('success', 'Referral submitted successfully!');
    }

    return inertia('Referral');

})->name('referral');

Route::match(['get', 'post'], '/contact-us', function (Request $request) {

    if ($request->isMethod('post')) {

        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'phone' => 'nullable',
            'message' => 'required|string',
        ]);

        ContactMessage::create($validated);

        return back()->with('success', 'Message sent successfully!');
    }

    return inertia('Contact');

})->name('contact');

Route::get('/faq', function () {
    return inertia('Faq');
});
