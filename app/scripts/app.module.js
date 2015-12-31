(function() {
  'use strict';

  angular.module('d3-desktop', [
    'ui.router',
    'ngMaterial'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/compare');

    $stateProvider
      .state('home', {
        url: '/compare',
        templateUrl: './scripts/compare/compare.html',
        controller: 'CompareController',
        controllerAs: 'cc'
      });
      
  })
  .run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  });

})();
