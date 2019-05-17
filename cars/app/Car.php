<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $table = 'cars';

    public function category()
    {
    	return $this->belongsTo('App\Category');
    }
}
