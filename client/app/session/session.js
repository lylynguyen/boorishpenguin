/**
 * Created by hridhya on 1/12/16.
 */
angular.module('boorish.session', [])

    .controller('SessionController', function($scope, Auth, $location, $window, Sessions){

        $scope.session = {};

        if (!Auth.isAuth()) {
            $location.path('/signin');
        } else {

            $scope.createEvent = function () {
                //console.log($scope.Url);
                //console.log($scope.Url.slice($scope.Url.length-10, -1));
                $scope.session.userId = $window.localStorage.getItem('com.boorish');  // pulls userId from localStorage
                console.log($scope.Url.slice(-11), 'youtubeId');
                $scope.session.url = $scope.Url.slice(-11);// pulls url
                $scope.session.course = $scope.Course; // pulls course
                $scope.session.time = $scope.Time;  // pulls selected time
                Sessions.addSession($scope.session)
                    .then(function () { // adds new Question with addQuestion factory method
                    $location.path('/questions'); // redirects to all questions
                });
            }
        }
    });