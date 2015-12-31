(function() {
  'use strict';

  angular.module('d3-desktop')
    .factory('BattleNetService', BattleNetService);

  BattleNetService.$inject = ['$http', '$log'];

  function BattleNetService($http, $log) {
    return {
      getAccount: getBNetAccount,
      getHero: getBNetHero,
      getDataByTooltip: getDataByTooltip
    };

    function getBNetAccount(account) {
      return $http.get('https://us.api.battle.net/d3/profile/' + account + '/?locale=en_US&apiKey=3q8vurf6jnh85bs54hn4q9skp3h4r2g2')
        .then(function(response) {
          return response.data;
        });
    }

    function getBNetHero(account, id) {
      return $http.get('https://us.api.battle.net/d3/profile/' + account + '/hero/' + id + '?locale=en_US&apiKey=3q8vurf6jnh85bs54hn4q9skp3h4r2g2')
        .then(function(response) {
          return response.data;
        });
    }

    function getDataByTooltip(tooltipParams) {
      return $http.get('https://us.battle.net/api/d3/' + tooltipParams)
        .then(function(response) {
          return response.data;
        });
    }

  }

})();
