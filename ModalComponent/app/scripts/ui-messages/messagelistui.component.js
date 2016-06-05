'use strict';

(function(angular) {

  var messageListUi = {
    templateUrl: 'scripts/ui-messages/messagelistui.template.html',
    controller: 'MessageListUiController',
    controllerAs: 'messageList',
    $routeConfig: [{
      path: '/',
      name: 'MessageEmptyUi',
      component: 'messageEmptyUi',
      useAsDefault: true
    }, {
      path: '/send',
      name: 'MessageSendUi',
      component: 'messageSendUi'
    }],
    bindings: {
      $router: '<'
    }
  };

  angular.module('modalComponentApp').component('messageListUi', messageListUi);
  angular.module('modalComponentApp').component('messageEmptyUi', {});

})(window.angular);