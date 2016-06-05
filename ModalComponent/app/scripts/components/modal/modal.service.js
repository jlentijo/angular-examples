'use strict';

(function(angular) {

  function ModalService($document) {
    var modal = {};
    modal.config = {};

    modal.showModal = function(config, callback) {
      angular.extend(modal.config, config);
      modal.config.callback = callback;
      modal.element = $document.find('#' + modal.config.idModal + ' > div');
      modal.element.modal('show');
    };

    modal.closeModal = function() {
      modal.element.modal('hide');
    };

    return modal;
  }

  angular.module('modalComponentApp').service('ModalService', [
    '$document',
    ModalService
  ]);

})(window.angular);