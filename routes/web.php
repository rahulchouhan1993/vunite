<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/referral', function () {
    return inertia('Referral');
});

Route::get('/contact-us', function () {
    return inertia('Contact');
});

Route::get('/faq', function () {
    return inertia('Faq');
});
