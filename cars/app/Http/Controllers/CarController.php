<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Car;
use App\Category;

class CarController extends Controller
{
	public function __construct()
	{
		
	}

	public function index() {
		$categories = Category::all();

		foreach ($categories as $category) {
			$data = Car::findByCategoryName($category->name)->select('price', 'pk', 'topspeed', 'acceleration_sport')->first();

			echo $data;
		}
		//echo $categories;

		return view('index', ["categories" => $categories]);
	}

	public function carByCategory(Request $request, $name) {
		$categories = Car::findByCategoryName($name)->get();

		return view('index', ["categories" => $categories]);
	}
}