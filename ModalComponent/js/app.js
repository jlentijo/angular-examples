(function(angular) {

  var app = angular.module('app', []);

  app.controller('MainController', ['ModalService', function(ModalService) {
    var vm = this;
    vm.save = function() {
      ModalService.showModal({
        idModal: 'userInfoModal',
        header: 'Info modal',
        body: 'User saved...'
      });
    };
    vm.remove = function() {
      ModalService.showModal({
        idModal: 'userConfirmModal',
        header: 'Confirm modal',
        body: 'Do you want remove it?'
      }, function() {
        ModalService.showModal({
          idModal: 'userInfoModal',
          header: 'Info modal',
          body: 'User removed...'
        });
      });
    };
  }]);

  app.controller('ModalController', ['ModalService', function(ModalService) {
    var vm = this;
    vm.config = ModalService.config;
    vm.confirmAction = function() {
      ModalService.closeModal();
      vm.config.callback();
    };
  }]);

  app.component('infoModal', {
    templateUrl: 'views/infomodal.template.html',
    controller: 'ModalController'
  });

  app.component('confirmModal', {
    templateUrl: 'views/confirmmodal.template.html',
    controller: 'ModalController'
  });

  app.service('ModalService', ['$document', function($document) {
    var modal = {};
    modal.config = {};

    modal.showModal = function(config, callback) {
      angular.extend(modal.config, config);
      modal.config.callback = callback;
      modal.element = $document.find('#' + modal.config.idModal + ' > div');
      modal.element.modal('show');
    };
    
    modal.closeModal = function () {
      modal.element.modal('hide');
    };

    return modal;
  }]);

})(window.angular);
