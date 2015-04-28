courseRoster.controller('CoursesCtrl', function CoursesCtrl($scope, CoursesFactory) {
  $scope.courses = CoursesFactory.courses;
  $scope.CoursesFactory = CoursesFactory;


  $scope.message = "Hello";
});

courseRoster.controller('ChoreCtrl', function() {
    var choreCtrl = this;
    choreCtrl.logChore = function(chore) {
        alert(chore + " is done!");
    };
});

courseRoster.directive("kid", function() {
    return {
        restrict: "E",
        scope: {
            done: "&"
        },
        template: '<input type="text" ng-model="chore">' +
        ' {{chore}}' +
        ' <div class="btn btn-primary" ng-click="done({ chore:chore })">I\'m done!</div>'
    };
});
