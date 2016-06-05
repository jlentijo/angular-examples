'use strict';

(function(angular) {

  var modalApp = {
    templateUrl: 'scripts/modalapp.template.html',
    controller: function () {
      var vm = this;
      vm.navbar = {
        modals: { active: true },
        messages: { active: false }
      };
    },
    $routeConfig: [{
      path: '/modals',
      name: 'ModalsUi',
      component: 'modalUi',
      useAsDefault: true
    }, {
      path: '/messages/...',
      name: 'MessageUi',
      component: 'messageUi'
    }]
  };

  angular.module('modalComponentApp').component('modalApp', modalApp);

})(window.angular);