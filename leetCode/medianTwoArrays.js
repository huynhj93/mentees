//https://leetcode.com/problems/median-of-two-sorted-arrays/description/

var findMedianSortedArrays = function(nums1, nums2) {
  var combined = nums1.concat(nums2).sort((a,b) => a-b);
  var len = combined.length;
  var median;
  if (len % 2 === 0) {
      median = (combined[len/2] + combined[(len/2)-1])/2;
  } else {
      median = combined[(len/2)-0.5];
  }
  return median;
};

//console.log(findMedianSortedArrays([1],[2,3,4,5,6,7,8,9,10]));
