var trap = function(heights) {
  let maxSoFar = 0;
 const leftMax = new Array(heights.length).fill(0);
 const rightMax = leftMax.slice();

 // Find left max at each index
 for (let i = 0; i < heights.length; i++) {
     leftMax[i] = maxSoFar;
     maxSoFar = Math.max(maxSoFar, heights[i]);
 }
 // Reset maxSoFar
 maxSoFar = 0;

 // Find right max at each index
 for (let i = heights.length - 1; i >= 0; i--) {
     rightMax[i] = maxSoFar;
     maxSoFar = Math.max(maxSoFar, heights[i]);
 }
 let totalArea = 0;

 // iterate through heights and calculate total area at each index
 for (let i = 0; i < heights.length; i++) {
     let idxArea = Math.min(leftMax[i], rightMax[i]) - heights[i];
     if (idxArea > 0) totalArea += idxArea;
 }

 return totalArea;
};
