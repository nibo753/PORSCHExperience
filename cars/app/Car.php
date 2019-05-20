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

    public function scopeFindByCategoryName($query, $categoryName)
	{
		return $query->whereHas('category', function ($query) use ($categoryName) {
			$query->where('name', $categoryName);
		});
	}
}
