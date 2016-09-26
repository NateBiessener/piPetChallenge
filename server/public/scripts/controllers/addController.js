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
    if (newPet.name && newPet.animal && newPet.age) {
      $http({
        method: 'POST',
        url: 'pets/pet',
        data: newPet
      }).then(function(results){
        console.log(results.data);
      });
    }//end if
    else {
      alert('Please enter both the pet\'s name, species and age')
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
