(function() {
  'use strict';

  angular.module('d3-desktop')
    .factory('BattleNetService', BattleNetService);

  BattleNetService.$inject = ['$http', '$log'];

  function BattleNetService($http, $log) {
    return {
      getAccount: getAccount
    }

    function getAccount(bnetid) {

    }

  }

})();
