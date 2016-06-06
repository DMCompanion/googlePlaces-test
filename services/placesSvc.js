angular.module('googleTest')
    .service('placesSvc', function($http) {

        this.getPlaces = function() {
            return $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.227255,-111.662043&radius=8000&key=AIzaSyC8IidN38UdoJQTcLSVcuDnNoaKa8nDBzE').then(function(response) {
                console.log(response.data.next_page_token);
                let places = response.data.results;
                return response.data;
            });
        };

        this.getMorePlaces = function() {
            this.getPlaces().then(function(response) {
                let nextPage = response.next_page_token
                if (nextPage) {
                    $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken=' + nextPage + '&key=AIzaSyC8IidN38UdoJQTcLSVcuDnNoaKa8nDBzE').then(function(response) {
                        console.log(response);

                    });
                }

            })


        }

        this.getPlaceDetails = function(id) {

            return $http.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=' + id + '&key=AIzaSyC8IidN38UdoJQTcLSVcuDnNoaKa8nDBzE').then(function(response) {
                // console.log(response);
                return response.data;
            });

        };
    });
