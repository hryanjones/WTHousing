angular.module('app', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: './partials/home.html',
        // controller: 'Home'
    })
    .when('/our-team', {
        templateUrl: './partials/our-team.html',
        controller: 'OurTeam'
    })
    .when('/contact', {
        templateUrl: './partials/contact.html',
        controller: 'Contact'
    })
    .otherwise({
        redirectTo: '/home'
    });
}])
// .controller('Home', ['$scope', function($scope) {

// }])
.controller('OurTeam', ['$scope', function($scope) {

    var lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
        'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
        'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    $scope.peeps = [
        {
            name: 'Ryan',
            title: 'Web Development Engineer',
            employer: 'Amazon',
            description: lorem
        },
        {
            name: 'Michelle',
            title: 'Title',
            employer: 'Seattle Shakespeare Company',
            description: lorem
        },
        {
            name: 'Brian',
            title: 'Consultant of awesome',
            employer: 'Awesome Consultants',
            description: lorem
        },
        {
            name: 'Alicia',
            title: 'COO',
            employer: 'US Quidditch',
            description: lorem
        },
    ];


}])
.controller('Contact', ['$scope', function($scope) {

}])
