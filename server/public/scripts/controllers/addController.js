myApp.controller('addController', ['$scope', '$http', function($scope, $http){
  console.log('add');

  $scope.addPet = function(){
    console.log('in addPet');
    var newPet = {
      name: $scope.petName,
      animal: $scope.petType,
      age: $scope.petAge,
      image: $scope.petImage
    };
    if (newPet.name && newPet.animal) {
      $http({
        method: 'POST',
        url: 'pets/pet',
        data: newPet
      }).then(function(results){
        console.log(results.data);
      });
    }//end if
    else {
      alert('Please enter both the pet\'s name and species')
    }
    console.log(newPet);
  };
}]);

// var newPet = new Pet({
//   name: req.body.name,
//   animal: req.body.animal,
//   age: req.body.age,
//   image: req.body.image
// });
