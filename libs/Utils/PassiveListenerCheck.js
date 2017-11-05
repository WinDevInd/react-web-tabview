let PassiveListenerCheck = {
   checkPassiveListenerSupport() {
      if (this.supportsPassive !== undefined) {
         return this.supportsPassive ? { passive: true } : false;
      }
      // feature detect
      let isSupported = false;
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
