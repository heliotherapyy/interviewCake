/**
 * @param {number[]} height
  * @return {number}
   */
   var trap = function(height) {
           if (height.length === 0 || !height) return 0;
               var total = getTotal(height);
                   return total - getSum(height);
   };

   function getSum(height) {
           var sum = 0;
               for (var i = 0; i < height.length; i++) {
                           sum += height[i];
                               }
                                   return sum;
   }

   function getMin(height) {
           var min = height[0];
               for (var i = 1; i< height.length; i++) {
                           min = Math.min(min, height[i]);
                               }
                                   return min;
   }

   function getTotal(height) {
           var step = 1;
               var volume = 0;
                   while (step <= getMax(height)) {
                               var first = findFirst(height, step);
                                       if (first !== -1) {
                                                       var last = findLast(height, step);
                                                                   volume += (last - first + 1);
                                                                           }
                                                                                   step++;
                                                                                       }
                                                                                           return volume;
   }

   function findFirst(height, target) {
           for (var i = 0; i < height.length; i++) {
                       if (height[i] >= target) return i;
                           }
   }

   function findLast(height, target) {
           for (var i = height.length - 1; i >= 0; i--) {
                       if (height[i] >= target) return i;
                           }
   }

   function getMax(height) {
           var max = height[0];
               for (var i = 1; i < height.length; i++) {
                           max = Math.max(max, height[i]);
                               }
                                   return max;
   }

   debugger; trap([0,2,0]);
