/**
 * @param {number[]} prices
  * @return {number}
   */

   function recurse(arr, start, memoize) {
        if (start >= arr.length - 1) return 0;
            
                if (!memoize) memoize = {};
                    if (memoize[start]) return memoize[start];
                        
                            var max = 0;
                                for (var i = arr.length - 1; i >= start; i--) {
                                            if (arr[i] < arr[start]) continue;
                                                    
                                                            if (i === start) max = Math.max(max, recurse(arr, i + 1, memoize));
                                                                    else max = Math.max(max, arr[i] - arr[start] + recurse(arr, i + 2, memoize));
                                                                        }
                                                                            memoize[start] = max;
                                                                                return max;
   }


   function maxProfit(prices) {
        return recurse(prices, 0);
   }
