'use strict';

(function(angular) {

  function MessageSendUiController(ModalService) {
    var vm = this;

    vm.openModal = function() {
      ModalService.showModal({
        idModal: 'saveMessageModal'
      });
    };

    vm.closeModal = function() {
      ModalService.closeModal(function() {
        vm.$router.navigateByUrl('/messages/list');
      });
    };

    vm.$routerOnActivate = function() {
      vm.message = {};
      vm.saveMessage = function(message) {
        message.status = 'Pending';
        message.id = vm.messageListController.messages.length + 1;
        vm.messageListController.messages.push(message);
        ModalService.closeModal(function() {
          vm.$router.navigateByUrl('/messages/list');
        });
        ModalService.showModal({
          idModal: 'infoModal',
          header: 'Save message',
          body: 'Message was sent...'
        });
      };
    };

  }

  angular.module('modalComponentApp').controller('MessageSendUiController', [
    'ModalService',
    MessageSendUiController
  ]);

})(window.angular);