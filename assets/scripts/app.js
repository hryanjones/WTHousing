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

.controller('OurTeam', ['$scope', function($scope) {

    $scope.defaultImageSource = 'http://www.thefunnyblog.org/wp-content/uploads/2012/10/funny-animal-face-dog-friday-face.jpg';
    $scope.peepsBaseImgURL = './assets/images/people/'
    $scope.peeps = [
        {
            name: 'Aaron',
            title: 'Research Scientist',
            employer: 'Stratos Genomics',
            description: 'Aaron is a PhD chemist (Johns Hopkins, 2010) who specializes in the development of synthetic DNA.  His professional interests include next generation DNA sequencing and the future of biotechnology.  He also enjoys cooking, hiking, data visualization and traveling with his wife Allison.',
            photoUrl: 'aaron.jpg'
        },
        {
            name: 'Alexander',
            description: 'Alexander was born and raised in Chicago, Il. He holds an undergraduate degree from Tulane University. For the last fifteen years he has worked as an analyst for a privately held manufacturing company, as well as sitting on the boards of directors for a few small enterprises. He lives with his wife Emily and son in their home on the north side of Seattle. In his leisure time Alexander is a game enthusiast, writer, foodie, and world traveler.'

        },
        {
            name: 'Allison',
            description: 'Allison is an environmental scientist by training, with a Masters degree from WSU, and an economic modeler by day, working for a local utility. She has also taught science in a middle school and researched African streams. She enjoys the outdoors, cooking, and traveling, both to US national parks and abroad. She lives in Seattle with her husband Aaron.',
            employer: 'Puget Sound Energy',
            title: 'Load Forecasting Analyst',
            photoUrl: 'allison.jpg'
        },
        {
            name: 'Amy',
            title: 'Marine Ecologist',
            employer: 'Tulalip Tribes',
            description: 'Amy is a marine ecologist with a masters degree in marine resource management from Simon Fraser University. She works in the natural resources department of Tulalip Tribes, as well as continues to consult with First Nations throughout British Columbia. She enjoys spending time on or near the ocean, hiking, being outdoors, natural history, cooking, knitting, and traveling.',
            photoUrl: 'amy.jpg'
        },
        {
            name: 'Deirdre',
            title: 'Physician Relations Manager',
            employer: 'UW Medicine',
            description: 'Deirdre is a Physician Relations Manager for a fast growing network of primary care clinics in the Puget Sound area. She got her degree in Sociology from Antioch University, and previously spent many years as an artist manager. She and her husband, Raven, are the parents of a fast-growing toddler named Sylvan.',
            photoUrl: 'deirdre.jpg'
        },
        {
            name: 'Elise',
            title: 'Owner',
            employer: 'Koncsek Photography and Design',
            description: 'Elise is a professional photographer and public artist with a background in anthropology and ecology. She holds a degree from the University of Washington and certification from the National Sustainable Building Advisor Program. Her interests include education, low-impact living, and environmental restoration.',
            photoUrl: 'elise.jpg'

        },
        {
            name: 'James',
            description: 'James is the Executive Editor of a prominent game publishing company, and a co-creator of the current best-selling tabletop roleplaying game in the world. An award-winning game designer and novelist, he\'s also a musician who\'s performed extensively with various rock bands, and served for several years on the board of directors for a nonprofit devoted to youth empowerment. He lives in Seattle with his wife, Margo.',
            photoUrl: 'james.jpg'
        },
        {
            name: 'Lindsay',
            description: 'Lindsay is an administrative professional with ten years of experience in non-profits. She holds a degree in anthropology and is fascinated by cultures and pre-history. In her spare time, she volunteers as a grant writer for a literacy organization, and loves reading, exploring the coast, and traveling with her partner Andy.'
        },
        {
            name: 'Malvika',
            title: 'Software Developer',
            description: 'Malvika is a software developer in one of the world\'s largest technology companies based in Seattle. In her spare time she enjoys trying new things, exploring the outdoors, photography, and crafts.',
            photoUrl: 'malvika.jpg'
        },
        {
            name: 'Michelle',
            title: 'Education Director',
            employer: 'Seattle Shakespeare Company',
            description: 'Michelle is the Director of Education at a local Shakespeare theater company, running youth programs and teaching in-school residencies. She holds a BA from the University of Washington and a Masters in Education from Antioch University. In her free time, Michelle enjoys cooking, hiking, and spending time with her partner Jared and her dog Zefram.',
            photoUrl: 'michelle.jpg'
        },
        {
            name: 'Ryan',
            title: 'Web Development Engineer',
            employer: 'Amazon',
            description: 'A self-taught programmer, Ryan currently enjoys building internal websites for Amazon using NodeJS and Angular. Additionally he\'s interested in Linux, hiking, what the future of programming might look like, as well as board games, and puzzling.',
            photoUrl: 'ryan.jpg'
        },
    ];


}])
.controller('Contact', ['$scope', function($scope) {
    // stub
}]);
