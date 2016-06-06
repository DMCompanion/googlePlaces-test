angular.module('googleTest')
    .controller('mainCtrl', function($scope, placesSvc) {

        $scope.test = 'test';

        $scope.places = [];


        placesSvc.getPlaces().then(function(response) {

            // console.log(response)
            let places = response.results

            places.forEach(function(place) {
                // console.log(place);
                let placeDetails = {
                    placeId: place.place_id
                };

                placesSvc.getPlaceDetails(placeDetails.placeId).then(function(response) {
                    // console.log(response);

                    $scope.places.push(response.result);
                    // console.log($scope.places)
                });
            });

        });


        $scope.loadMorePlaces = function() {
            placesSvc.getMorePlaces()
        }





    });
