const divide = (arr, n) => {
  let result = [];
  let current_subarray = [];
  let current_sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    
    // If adding this number exceeds the max sum n, start a new subarray
    if (current_sum + num > n) {
      result.push(current_subarray);  // Add the current subarray to the result
      current_subarray = [];  // Reset the current subarray
      current_sum = 0;  // Reset the sum
    }
    
    // Add the current number to the subarray
    current_subarray.push(num);
    current_sum += num;
  }

  // Add the final subarray to the result (if not empty)
  if (current_subarray.length > 0) {
    result.push(current_subarray);
  }

  return result;
};

// Example Usage
const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, Number(n))));

