'use strict';

var PassiveListenerCheck = {
   checkPassiveListenerSupport: function() {
      if (this.supportsPassive !== undefined) {
         return this.supportsPassive ? { passive: true } : false;
      }
      // feature detect
      var isSupported = false;
      try {
         document.addEventListener('test', null, {
            get passive() {
               isSupported = true;
            }
         });
      } catch (e) {
         // do nothing
      }
      this.supportsPassive = isSupported;
      return this.checkPassiveListenerSupport();
   }
};

module.exports = PassiveListenerCheck;
