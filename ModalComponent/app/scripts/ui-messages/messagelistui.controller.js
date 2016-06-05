'use strict';

(function(angular) {

  function MessageListUiController() {
    var vm = this;
    vm.messages = [{
      id: 1,
      from: 'John',
      to: 'Dylan',
      text: 'Loremp isum murom opseltum...',
      status: 'Pending'
    }, {
      id: 2,
      from: 'Dylan',
      to: 'Mikel',
      text: 'Loremp isum murom opseltum...',
      status: 'Read'
    }];

    vm.sendMessage = function() {
      vm.$router.navigateByUrl('/messages/list/send');
    };
  }

  angular.module('modalComponentApp').controller('MessageListUiController', [
    MessageListUiController
  ]);

})(window.angular);