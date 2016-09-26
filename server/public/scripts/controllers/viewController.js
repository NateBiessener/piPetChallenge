myApp.controller('viewController', ['$scope', '$http', function($scope, $http){
  console.log('view');
  $scope.pets = [];
  var getPets = function(){
    $http({
      method:'GET',
      url:'pets/pet'
    }).then(function(results){
      console.log('got pets:', results.data);
      $scope.pets = results.data;
    });//end http.then
  };//end getPets
  getPets();

  $scope.removePet = function(id){
    console.log('in removePet with', id);
    $http({
      method:'DELETE',
      url:'pets/pet?id=' + id,
    }).then(function(results){
      console.log('deleted');
    }).then(getPets);
  };//end removePet
  // dummyFunc();
}]);
