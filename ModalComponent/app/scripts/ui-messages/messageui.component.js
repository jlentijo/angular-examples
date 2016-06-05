'use strict';

(function(angular) {

  var messageUi = {
    template: '<ng-outlet></ng-outlet>',
    controller: function () {
      var vm = this;
      vm.$routerOnActivate = function () {
        vm.modalAppController.navbar.modals.active = false;  
        vm.modalAppController.navbar.messages.active = true;
      };
    },
    $routeConfig: [{
      path: '/list/...',
      name: 'MessageListUi',
      component: 'messageListUi',
      useAsDefault: true
    }],
    require: {
      modalAppController: '^modalApp'
    }
  };

  angular.module('modalComponentApp').component('messageUi', messageUi);

})(window.angular);