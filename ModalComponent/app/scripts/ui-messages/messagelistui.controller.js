'use strict';

(function(angular) {

  function MessageListUiController(ModalService) {
    var vm = this;
    vm.$routerOnActivate = function () {
      vm.modalAppController.navbar.modals.active = false;  
      vm.modalAppController.navbar.messages.active = true;
    };
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
      vm.message = {};
      ModalService.showModal({
        idModal: 'saveMessageModal'
      });
    };

    vm.saveMessage = function(message) {
      message.status = 'Pending';
      message.id = vm.messages.length + 1;
      vm.messages.push(message);
      ModalService.closeModal();
      ModalService.showModal({
        idModal: 'infoModal',
        header: 'Save message',
        body: 'Message was sent...'
      });
    };
  }

  angular.module('modalComponentApp').controller('MessageListUiController', [
    'ModalService',
    MessageListUiController
  ]);

})(window.angular);