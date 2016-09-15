var app = angular.module("MainApp");

app.service("WeatherService", ["$http", function($http) {
    var apiKey = "b3800af0676fc902d589a384498472cd/"
    
    
    this.weather = {};
    
    this.getWeather = function(location){
        console.log("fetching weather");
        return $http.jsonp("https://api.forecast.io/forecast/"+apiKey+location+"?callback=JSON_CALLBACK").then(function(response){
            this.weather=response.data;
            return this.weather;
        });
    }

}])