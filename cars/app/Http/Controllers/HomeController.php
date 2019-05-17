<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Car;
use App\Category;

class HomeController extends Controller
{
	public function __construct()
	{
		
	}

	public function index(){
		$categories = Category::all();
		return view('index', ["categories" => $categories]);
	}
}