'use strict';

(function(angular) {

  var messageListUi = {
    templateUrl: 'scripts/ui-messages/messagelistui.template.html',
    controller: 'MessageListUiController',
    controllerAs: 'messageList',
    require: {
      modalAppController: '^modalApp'
    }
  };

  angular.module('modalComponentApp').component('messageListUi', messageListUi);

})(window.angular);