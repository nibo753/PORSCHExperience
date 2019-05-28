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
			$data = Car::findByCategoryName($category->name)->orderBy('price')->select('price', 'pk', 'topspeed', 'acceleration_sport')->first();

			$category->price = number_format($data['price'], 2, ',', '.');
			$category->pk = number_format($data['pk'], 0, ',', '.');
			$category->topspeed = number_format($data['topspeed'], 0, ',', '.');
			$category->acceleration_sport = number_format($data['acceleration_sport'], 1, ',', '.');
		}

		return view('index', ["categories" => $categories]);
	}

	public function models(Request $request, $name) {
		$cars = Car::findByCategoryName($name)->get();
		echo $cars;

		return view('models', ["cars" => $cars]);
	}
}