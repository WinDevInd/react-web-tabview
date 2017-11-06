'use-strict';

var smoothScroll = {
   interpolate: function(start, end, point) {
      if (point <= start) {
         return 0;
      }
      if (point >= end) {
         return 1;
      }
      var x = (point - start) / (end - start);
      return x * x * (3 - 2 * x);
   },

   polyfillWindowPerformance: function() {
      // standard polyfill by Paul Irish:: https://gist.github.com/paulirish/5438650
      if ("performance" in window === false) {
         window.performance = {};
      }
      // thanks IE8
      Date.now = (Date.now || function () {
         return new Date().getTime();
      });
      if ("now" in window.performance === false) {
         var nowOffset = Date.now();
         if (window.performance.timing && window.performance.timing.navigationStart) {
            nowOffset = window.performance.timing.navigationStart;
         }
         window.performance.now = function now() {
            return Date.now() - nowOffset;
         };
      }
   },

   scroll: function(element, position, _duration, onScrollEndCallback) {
      // now we are sure to have window.performance.now()
      var duration = _duration || 1,
         scrollContainer = element,
         startLeft = element.scrollLeft,
         startTime = window.performance.now(),
         endTime = startTime + duration,
         destY = position;

      if (Math.abs(startLeft - destY) <= 1) {
         onScrollEndCallback && onScrollEndCallback();
         return;
      }
      var callback = (timestamp) => {
         if (timestamp < endTime) {
            requestAnimationFrame(callback);
         }

         var point = this.interpolate(startTime, endTime, timestamp),
            scrollLeft = Math.round(startLeft + (destY * point));
         if (destY <= startLeft) {
            if (destY === 0) {
               destY = element.scrollLeft;
            }
            scrollLeft = Math.abs(Math.round((destY * point) - startLeft));
         }
         if (scrollLeft > scrollContainer.scrollWidth - scrollContainer.offsetWidth) {
            scrollLeft = scrollContainer.scrollWidth - scrollContainer.offsetWidth;
         }
         scrollContainer.scrollLeft = scrollLeft;
         if (point === 1 && onScrollEndCallback) {
            onScrollEndCallback();
         }
      };
      callback(startTime);
   }
};
module.exports = smoothScroll;
