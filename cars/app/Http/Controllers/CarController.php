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

		//add data of cheapest car to category
		foreach ($categories as $category) {
			$data = Car::findByCategoryName($category->name)->orderBy('price')->select('price', 'pk', 'kw', 'topspeed', 'acceleration_sport')->first();

		}

		return view('index', ["categories" => $categories]);
	}

	public function carByCategory(Request $request, $name) {
		$categories = Car::findByCategoryName($name)->get();

		return view('index', ["categories" => $categories]);
	}
}