(function() {
  'use strict';

  angular.module('d3-desktop')
    .controller('CompareController', CompareController);

  CompareController.$inject = ['$log', 'BattleNetService', 'classNames'];

  function CompareController($log, BattleNetService, classNames) {
    var vm = this;

    // Load class lookup from constants
    vm.classNames = classNames;

    vm.loadLeftAccount = loadLeftAccount;
    vm.loadLeftHero = loadLeftHero;
    vm.loadRightAccount = loadRightAccount;
    vm.loadRightHero = loadRightHero;

    vm.leftBnetID = 'mordhel-1221';
    vm.rightBnetID = 'cfjedimaster-1136';

    vm.leftCharacterData = [];
    vm.rightCharacterData = [];

    vm.leftSelectedHero = '';
    vm.rightSelectedHero = '';
    
    function loadLeftAccount() {
      BattleNetService.getAccount(vm.leftBnetID)
        .then(function(data) {
          vm.leftCharacterData = data.heroes;
        })
    }

    function loadLeftHero() {
      $log.info('Left hero select changed to: ' + vm.leftSelectedHero);
      BattleNetService.getHero(vm.leftBnetID, vm.leftSelectedHero)
        .then(function(data) {
          $log.info('We have successfully retrieved the data');
          console.dir(data);
        });
    }

    function loadRightAccount() {
      BattleNetService.getAccount(vm.rightBnetID)
        .then(function(data) {
          vm.rightCharacterData = data.heroes;
        })
    }

    function loadRightHero() {
      $log.info('Right hero select changed to: ' + vm.rightSelectedHero);
      BattleNetService.getHero(vm.rightBnetID, vm.rightSelectedHero)
        .then(function(data) {
          $log.info('We have successfully retrieved the data');
          console.dir(data);
        });
    }
  }

})();
