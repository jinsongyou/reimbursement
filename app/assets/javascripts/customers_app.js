var app = angular.module('customers',[]);

app.controller("CustomerSearchController",[
  "$scope",
  function($scope){
    $scope.search = function(searchTerm){
      $scope.searchedFor = searchTerm;
      $scope.customers = [];
      $scope.customers = [
        {
          "first_name":"Schuyler",
          "last_name":"Cremin",
          "email":"gidild@dihkhhh.com",
          "created_at":"2018-01-08",
        },
        {
          "first_name":"Your Han",
          "last_name":"Crymon",
          "email":"ge@dc.com",
          "created_at":"2018-02-08",
        },
        {
          "first_name":"Hope",
          "last_name":"srymon",
          "email":"ge5@dc.com",
          "created_at":"2018-02-09",
        }
      ]
    }
  }
]);
