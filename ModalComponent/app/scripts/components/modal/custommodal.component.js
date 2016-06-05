'use strict';

(function(angular) {

  var customModal = {
    templateUrl: 'scripts/components/modal/custommodal.template.html',
    transclude: {
      body: 'modalBody',
      footer: 'modalFooter'
    },
    bindings: {
      header: '@'
    }
  };

  angular.module('modalComponentApp').component('customModal', customModal);

})(window.angular);