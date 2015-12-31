(function() {
  'use strict';

  angular.module('d3-desktop')
    .controller('CompareController', CompareController);

  CompareController.$inject = [];

  function CompareController() {
    var vm = this;

    vm.leftBnetID = 'mordhel-1221';
    vm.rightBnetID = 'cfjedimaster-1136';
    
  }

})();
