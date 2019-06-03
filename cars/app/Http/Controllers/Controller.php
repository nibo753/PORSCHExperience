<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use App\Car;
use App\Category;
use File;

class Controller extends BaseController
{
	use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

	public function __construct()
	{
		
	}


	// ROUTE: url/
	public function index() {
		$categories = Category::all();

		//add data of cheapest car to category
		foreach ($categories as $category) {
			$data = Car::findByCategoryName($category->name)->orderBy('price')->select('price', 'topspeed', 'acceleration','acceleration_sport')->first();

			$category->price 	= $data['price'];
			$category->topspeed = $data['topspeed'];

			($data['acceleration_sport'] != 0) ? $category->acceleration_sport = $data['acceleration_sport'] : $category->acceleration_sport = $data['acceleration'];
		}

		$categories = $this->formatNumbers($categories);

		return view('index', ["categories" => $categories]);
	}

	// ROUTE: url/models/$name
	public function models(Request $request, $name) {
		$categories = Category::all();
		$cars = Car::findByCategoryName($name)->get();
		$cars = $this->formatNumbers($cars);

		//count images for image sequence
		$path = public_path('/img/'.$name.'/sequence/');
		$imgCount = 0;

		if (File::exists($path)) { $images = File::files($path); }
		if (isset($images)) { $imgCount = count($images); }

		return view('models', ["categories" => $categories, "cars" => $cars, "imgCount" => $imgCount]);
	}



	/*
	 * HELPER FUNCTIONS
	 */

	function formatNumbers($data)
	{
		foreach ($data as $arr) {
			(isset($arr['price'])) ? $arr['price']=number_format((float)$arr['price'], 2, ',', '.') : '';
			(isset($arr['acceleration'])) ? $arr['acceleration']=number_format((float)$arr['acceleration'], 1, ',', '.') : '';
			(isset($arr['acceleration_sport'])) ? $arr['acceleration_sport']=number_format((float)$arr['acceleration_sport'], 1, ',', '.') : '';
			(isset($arr['fuel_consumption'])) ? $arr['fuel_consumption']=number_format((float)$arr['fuel_consumption'], 1, ',', '.') : '';
			(isset($arr['power_consumption'])) ? $arr['power_consumption']=number_format((float)$arr['power_consumption'], 1, ',', '.') : '';
			(isset($arr['emission'])) ? $arr['emission']=number_format((float)$arr['emission'], 1, ',', '.') : '';
		}
		return $data;
	}

}
