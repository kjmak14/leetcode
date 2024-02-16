/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   if (n === 0) return;
   let length1 = nums1.length;
   let last1 = length1 - 1;

   while (n > 0 && m > 0) {
       if (nums2[n-1] >= nums1[m-1]) {
           nums1[last1] = nums2[n-1];
           n--
       } else {
           nums1[last1] = nums1[m-1];
           m--;
       }
       last1--;
   }

   while (n > 0) {
       nums1[last1] = nums2[n-1];
       n--;
       last1--;
   }

};