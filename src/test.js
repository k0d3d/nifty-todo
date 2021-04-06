function countOccurence (arr, word) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (word === arr[i]) {
      count++
    } else if(Array.isArray(arr[i])) {
      console.log('is array')
      // console.log())
      count += countOccurence(arr[i], word)
    }

    
  }
  return count
}

function numberOfItems(arr, item) {
  // Write the code that goes here
  // check if all values are strings
 
  let flattenArray = arr.flat();
  console.log(countOccurence(arr, item))



  
}

var arr = [25, "apple", [["banana", "strawberry", "apple", 25, ["banana", "strawberry", "apple", 25]], "banana", "strawberry", "apple", 25]];
console.log(numberOfItems(arr, 25));
console.log(numberOfItems(arr, "apple"));
