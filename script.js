// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
   var max = Math.max.apply(null, arr); // get the max of the array
   arr.splice(arr.indexOf(max), 1); // remove max from the array
   return Math.max.apply(null, arr); // get the 2nd max
};

var arr = [20, 120, 111, 215, 54, 78]; // use int arrays
var max2 = secondLargest(arr);
console.log(max2);
  
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
    if( string.length == 0 )
  {
    console.log("Invalid string")
    return;
  }
  //loop to iterate over string
  for( let i = 0 ;i < string.length ;i++)
  {
    let count = 0;
    for( let j = 0 ;j < str.length ;j++)
    {
      if( str[i] == str[j] && i > j  )
      {
       break;
      }
      if( str[i] == str[j]  )
      {
        count++;
      }
    }
    if( count > 0)
    console.log(`${str[i]} ${count} times`);
     
  }
  let test_str = "rashisayshello";
  calculateFrequency( test_str);
  
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)

function flatten(unflatObject) {
  let result = {};
 
    // loop through the object "ob"
    for (const i in unflatObject) {
 
        // Check the type of the i using typeof() function and recursively call the function again
        if ((typeof unflatObject[i]) === 'object' && !Array.isArray(unflatObject[i])) {
            const temp = flattenObj(unflatObject[i]);
            for (const j in temp) {
                // Store temp in result
                result[i + '.' + j] = temp[j];
            }
        }
        // Else store ob[i] in result directly
        else {
            result[i] = unflatObject[i];
        }
    }
    return result;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
   const result = {};
   let temp, substrings, property, i;
   for (property in flatObject) {
      substrings = property.split('.');
   temp = result;
   for (i = 0; i < substrings.length - 1; i++) {
      if (!(substrings[i] in temp)) {
         if (isFinite(substrings[i + 1])) {
             temp[substrings[i]] = [];
         }
         else {
            temp[substrings[i]] = {};
         }
      }
      temp = temp[substrings[i]];
   }
   temp[substrings[substrings.length - 1]] = flatObject[property];
}
return result;
}; console.log(JSON.stringify(unflatten(flatObject), undefined, 4));
}
