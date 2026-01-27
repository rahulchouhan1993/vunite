<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Referral extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'referee_email',
        'referee_contact',
        'referee_position',
        'referee_purpose',
        'service',
    ];
}
