var app = angular.module("MainApp", ["ngRoute", "ngAnimate"]);

app.controller("MainController", ["$scope",'$location', 'WeatherService', function($scope,$location, WeatherService, ngRoute){
    $scope.test = "BikeSite";
    $scope.measurements =["C", "F"],
    $scope.weatherProvo;
    $scope.weatherSaltLake;
    $scope.weatherLehi;
    $scope.provolocation = "40.238759,-111.659135";
    $scope.slclocation = "40.768931,-111.896569";
    $scope.lehilocation = "40.430858,-111.853388";
    
    $scope.getWeather = function(){
        WeatherService.getWeather($scope.provolocation).then(function(response){
        console.log(response);
        $scope.weatherProvo = response;
        });
        WeatherService.getWeather($scope.slclocation).then(function(response){
        console.log(response);
        $scope.weatherSaltLake = response;
        });
        WeatherService.getWeather($scope.lehilocation).then(function(response){
        console.log(response);
        $scope.weatherLehi = response;
        });
    };
    

}]);//close controller

app.config (function($routeProvider){
    $routeProvider.when('/about', {
        templateUrl: "./templates/about.html"
    }).when('/gallary', {
        templateUrl: "./templates/gallary.html"
    }).when('/weather', {
        templateUrl: "./templates/weather.html"
    })
    
})//close config
//
////allows for smooth scrolling
//$(function() {
//	$('a[href*=#]').on('click', function(e) {
//		e.preventDefault();
//		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 200, 'linear');
//	});
//});