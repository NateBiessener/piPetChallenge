myApp.controller('viewController', ['$scope', '$http', '$filter', function($scope, $http, $filter){
  console.log('view');
  $scope.pets = [];
  var filtered = false;

  $scope.alphaFilter = 'Sort Pets Alphabetically';

  var getPets = function(){
    $http({
      method:'GET',
      url:'pets/pet'
    }).then(function(results){
      console.log('got pets:', results.data);
      $scope.pets = results.data;
      if (filtered){
        $scope.pets = $filter('orderBy')($scope.pets, 'name');
      }
    });//end http.then
  };//end getPets
  getPets();

  $scope.filterPets = function(){
    if (filtered) {
      getPets();
      filtered = false;
      $scope.alphaFilter = 'Sort Pets Alphabetically';
    }
    else {
      $scope.pets = $filter('orderBy')($scope.pets, 'name');
      $scope.alphaFilter = 'Unsort'
      filtered = true;
    }
  }

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
