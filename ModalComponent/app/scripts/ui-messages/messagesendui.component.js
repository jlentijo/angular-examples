'use strict';

(function(angular) {

  var messageSendUi = {
    templateUrl: 'scripts/ui-messages/messagesendui.template.html',
    controller: 'MessageSendUiController',
    controllerAs: 'messageSend',
    require: {
      messageListController: '^messageListUi'
    },
    bindings: {
      $router: '<'
    }
  };

  angular.module('modalComponentApp').component('messageSendUi', messageSendUi);

})(window.angular);