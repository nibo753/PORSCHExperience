<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Car;
use App\Category;
use File;

class CarController extends Controller
{
	public function __construct()
	{
		
	}

	public function index() {
		$categories = Category::all();

		//add data of cheapest car to category
		foreach ($categories as $category) {
			$data = Car::findByCategoryName($category->name)->orderBy('price')->select('price', 'topspeed', 'acceleration','acceleration_sport')->first();

			$category->price = number_format($data['price'], 2, ',', '.');
			$category->topspeed = number_format($data['topspeed'], 0, ',', '.');
			if ($data['acceleration_sport'] != 0) {
				$category->acceleration_sport = number_format($data['acceleration_sport'], 1, ',', '.');
			}
			else {
				$category->acceleration_sport = number_format($data['acceleration'], 1, ',', '.');
			}
		}

		return view('index', ["categories" => $categories]);
	}

	public function models(Request $request, $name) {
		$categories = Category::all();
		$cars = Car::findByCategoryName($name)->get();

		//count images for image sequence
		$path = public_path('/img/'.$name.'/sequence/');
		$imgCount = 0;

		if (File::exists($path)) { $images = File::files($path); }
        if (isset($images)) { $imgCount = count($images); }

		return view('models', ["cars" => $cars, "categories" => $categories, "imgCount" => $imgCount]);
	}
}