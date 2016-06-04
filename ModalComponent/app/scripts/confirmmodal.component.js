'use strict';

(function(angular) {

  var confirmModal = {
    templateUrl: 'views/confirmmodal.template.html',
    controller: 'ModalController'
  };

  angular.module('modalComponentApp').component('confirmModal', confirmModal);

})(window.angular);