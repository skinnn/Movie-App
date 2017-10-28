var myApp = angular.module("myApp");

myApp.controller("MoviesController", ["$scope", "$http", "$location", "$routeParams", function($scope, $http, $location, $routeParams){
    console.log("MoviesController loaded...");
    $scope.getMovies = function(){
        $http.get("/api/movies").success(function(response){
            $scope.movies = response;
        });
    }
    $scope.getMovie = function(){
        var id = $routeParams.id;
        $http.get("/api/movies/"+id).success(function(response){
            $scope.movie = response;
        });
    }
    $scope.addMovie = function(){
        console.log($scope.movie+"Loaded");
        $http.post("/api/movies/", $scope.movie).success(function(response){
            window.location.href="#/movies";
        });
    }
    $scope.updateMovie = function(){
        var id = $routeParams.id;
        $http.put("/api/movies/"+id, $scope.movie).success(function(response){
            window.location.href="#/movies";
        });
    }
    $scope.removeMovie = function(id){
        $http.delete("/api/movies/"+id).success(function(response){
            window.location.href="#/movies";
        });
    }

}]);
