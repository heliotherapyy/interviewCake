/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (!nums.length) return [];
    var result = [];
    var duplicates = {};
    nums.sort(function(a,b) {
        if (a < b) return -1;
        else return 1;
    });

    var mid;
    for (var i = 0; i < nums.length; i++) {
        mid = i + 1;
        while (mid < nums.length - 1) {
            for (var last = mid + 1; last < nums.length; last++) {
                var list = [nums[i], nums[mid], nums[last]];
                if (sum(list) === 0) {
                    if (!duplicates[list]) {
                        duplicates[list] = true;
                        result.push(list);
                    }
                }
            }
            mid++;
        }
    }

    return result;
};

function sum(list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum;
}


var array = [1,-2,-5,-13,-10,-11,0,-12,-11,13,-4,9,8,10,-7,3,-9,-12,-7,8,-2,-12,1,-10,-15,-8,5,14,-7,-8,-8,9,-3,-6,3,-5,-1,-11,-10,3,-13,1,-10,3,-12,-10,-9,-13,-7,-1,10,6,-6,-12,12,-13,-13,-6,-14,-13,-7,-7,4,6,-6,-8,8,8,-4,13,-11,-1,-8,-14,9,-5,-9,7,-3,-1,14,14,13,-7,9,2,-5,12,11,-12,14,-11,-12,3,2,-2,3,-5,-9,14,-14,-13,-10,-7,-12,14,3,-6,-1,8,1,-2,-1,-1,6,-6];

var answer = threeSum(array);
console.log(answer);