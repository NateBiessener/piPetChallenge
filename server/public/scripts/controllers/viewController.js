myApp.controller('viewController', ['$scope', '$http', function($scope, $http){
  console.log('view');

  $scope.showPets = function(){
    console.log('in showPets');
    $http({
      method: 'GET',
      url: '/pets/pet'
    }).then(function(results){
      console.log(results.data);
    });//end http.then
  };//end showPets

}]);
