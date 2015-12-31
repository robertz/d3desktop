(function() {
  'use strict';

  angular.module('d3-desktop')
    .controller('ShellController', ShellController);

  ShellController.$inject = [];

  function ShellController() {
    var vm = this;

    vm.message = 'Shell successfully loaded';
  }

})();
