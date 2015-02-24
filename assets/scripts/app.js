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
    $scope.defaultImageSource = 'http://www.thefunnyblog.org/wp-content/uploads/2012/10/funny-animal-face-dog-friday-face.jpg';
    $scope.peeps = [
        {
            name: 'Ryan',
            title: 'Web Development Engineer',
            employer: 'Amazon',
            description: 'A self-taught programmer, Ryan currently enjoys building internal websites for Amazon using NodeJS and Angular. Additionally he\'s interested in Linux, hiking, what the future of programming might look like, as well as board games, and puzzling.',
            photoUrl: './assets/images/people/ryan.jpg'
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
