(function() {
  'use strict';

  angular.module('d3-desktop', [
    'ui.router',
    'ngMaterial'
  ])
  .constant('classNames', {
    'barbarian': 'Barbarian',
    'crusader': 'Crusader',
    'demon-hunter': 'Demon Hunter',
    'monk': 'Monk',
    'witch-doctor': 'Witch Doctor',
    'wizard': 'Wizard'
  })
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
