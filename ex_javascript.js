function message(){
    alert("Are you sure you want to reset all the fields?");
  }

function findLargestNumber(numbers) {
    let largestNumber = numbers[0]; // Assuming the first number is the largest
    for (var i = 1; i < numbers.length; i++) {
      if (numbers[i] > largestNumber) {
        largestNumber = numbers[i]; // finally updates the largest number
      }
    }
    return largestNumber;
  }