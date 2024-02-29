(
  function(){
      var app = angular.module('menuApp', ['ui.router'])
      .constant('baseUrl', 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json')
      .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
          $stateProvider
            .state('home', {
              url: '/',
              templateUrl: 'directives/home.directive.html',
              controller: 'HomeController as homeCtrl'
            })
            .state('categories', {
              url: '/categories',
              templateUrl: 'directives/category.directive.html',
              controller: 'CategoryController as catCtrl',
              resolve: {
                resData: ['DataService', function(DataService) {
                  return DataService.getData();
                }]
              }
            })
            .state('categories.items', {
              // url: '/items/{id}',
              templateUrl: 'directives/item.directive.html',
              controller: 'ItemController as itemCtrl',
              params: {
                id: null
              }
            });
      
          $urlRouterProvider.otherwise('/');
        })
        .run(function ($rootScope, $transitions) {
          // Initialize spinner
          $rootScope.showSpinner = false;
      
          // Show spinner during state transition start
          $transitions.onStart({}, function () {
            $rootScope.showSpinner = true;
          });
      
          // Hide spinner after state transition success or error
          $transitions.onSuccess({}, function () {
            $rootScope.showSpinner = false;
          });
      
          $transitions.onError({}, function () {
            $rootScope.showSpinner = false;
          });
        })

  }
)()