<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use App\Car;
use App\Category;
use File;

class RouteController extends Controller
{
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

		$categories = $this->addAllCarsToAllCategories($categories);
		$categories = $this->formatNumbers($categories);

		return view('index', ["categories" => $categories]);
	}

	// ROUTE: url/models/$name
	public function models(Request $request, $name) {
		$categories = Category::all();
		$categories = $this->addAllCarsToAllCategories($categories);

		$cars = Car::findByCategoryName($name)->get();
		$cars = $this->formatNumbers($cars);

		//count images for image sequence
		$path = public_path('/img/'.strtolower($name).'/sequence/');
		$imgCount = 0;

		if (File::exists($path)) { $images = File::files($path); }
		if (isset($images)) { $imgCount = count($images); }

		return view('models', ["categories" => $categories, "cars" => $cars, "imgCount" => $imgCount]);
	}

	// ROUTE: /gallery
	public function gallery(Request $request){
		$categories = Category::all();
		$categories = $this->addAllCarsToAllCategories($categories);

		// get media
		$medias = '';
		$paginatedItems = '';

		try {
			$medias = $this->getNewInstagramMedia(200);
		} catch (Exception $e) {
			// most likely hit request limit
		}
		
		if ($medias != ''){
			// paginate media
			$perPage = 24; //divides by 2 and 3
			$currentPage = LengthAwarePaginator::resolveCurrentPage();
			$mediaCollection = collect($medias);
			//show only slice of items in current page
			$currentPageItems = $mediaCollection->slice(($currentPage * $perPage) - $perPage, $perPage)->all(); 
			$paginatedItems = new LengthAwarePaginator($currentPageItems , count($mediaCollection), $perPage);
			// set url path for generted links
			$paginatedItems->setPath($request->url());
		}

		return view('gallery', ["categories" => $categories, "medias" => $paginatedItems]);
	}


	/*
	 * HELPER FUNCTIONS
	 */

	public static function getNewInstagramMedia($amount){
		$instagram 	= new \InstagramScraper\Instagram();
		$account 	= (new \InstagramScraper\Instagram())->getAccountById('5598638463');

		$rtn = $instagram->getMedias($account->getUsername(), $amount);

		return $rtn;
	}

	function formatNumbers($data)
	{
		foreach ($data as $arr) {
			(isset($arr['price'])) ? $arr['price']=number_format((float)$arr['price'], 2, ',', '.') : '';
			(isset($arr['acceleration'])) ? $arr['acceleration']=number_format((float)$arr['acceleration'], 1, ',', '.') : '';
			(isset($arr['acceleration_sport'])) ? $arr['acceleration_sport']=number_format((float)$arr['acceleration_sport'], 1, ',', '.') : '';
			(isset($arr['fuel_consumption'])) ? $arr['fuel_consumption']=number_format((float)$arr['fuel_consumption'], 1, ',', '.') : '';
			(isset($arr['power_consumption'])) ? $arr['power_consumption']=number_format((float)$arr['power_consumption'], 1, ',', '.') : '';
			(isset($arr['emission'])) ? $arr['emission']=number_format((float)$arr['emission'], 1, ',', '.') : '';
			(isset($arr['width'])) ? $arr['width']=number_format((float)$arr['width'], 0, ',', '.') : '';
			(isset($arr['height'])) ? $arr['height']=number_format((float)$arr['height'], 0, ',', '.') : '';
			(isset($arr['length'])) ? $arr['length']=number_format((float)$arr['length'], 0, ',', '.') : '';
			(isset($arr['weight'])) ? $arr['weight']=number_format((float)$arr['weight'], 0, ',', '.') : '';
		}
		return $data;
	}

	function addAllCarsToAllCategories($categories)
	{
		foreach ($categories as $category) {
			$allCarNames 	= Car::findByCategoryName($category->name)->select('name')->get();
			$carNameArray 	= array();

			foreach ($allCarNames as $car) {
				array_push($carNameArray, $car->name);
			}
			$category->cars = $carNameArray;
		}
		return $categories;
	}
}