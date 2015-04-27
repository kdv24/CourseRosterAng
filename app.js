var courseRoster = angular.module('courseRoster', ['ui.router']);

courseRoster.directive("welcomeText", function () {
    return {
        restrict: "EA",

        link: function(scope, element, attrs) {
            element.text(scope.message + " " + attrs.message);
            alert("I'm working");
        }
    };
});

courseRoster.directive("welcomeTexts", function() {
    return function(scope, element, attrs) {
        element.text(scope.message + " " + attrs.message);
    };
});

courseRoster.directive("enter", function() {
    return function (scope, element, attrs) {
        element.bind("mouseenter", function () {
            element.addClass(attrs.enter);
        });
    };
});

courseRoster.directive("leave", function() {
    return function(scope, element, attrs) {
        element.bind("mouseleave", function(){
        element.removeClass(attrs.enter)
        });
    };
});

// courseRoster.directive("addClass", function() {
//     return function(scope, element) {
//         element.bind("", function(){
//         element.text(btn btn-default);
//         });
//     };)

courseRoster.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('courses', {
    url: "/courses",
    templateUrl: "partials/courses.html",
    controller: 'CoursesCtrl'
  });

  $stateProvider.state('courses.students', {
    url: "/:courseId",
    templateUrl: "partials/courses.students.html",
    controller: 'StudentsCtrl'
  });
});
