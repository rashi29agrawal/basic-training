// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?

function secondLargest(array) {
    var max = Math.max.apply(null, array); // get the max of the array
    array.splice(array.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, array); 
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)

function calculateFrequency(string) {
     let object = {};
 for(let str of string){
   if(str>='a' && str<='z'){
     let key = str;
     object[key]=0;
   }
 }
 for(let str of string){
   if(str>='a' && str<='z'){
     let key = str;
   object[key]+=1;
   }
 }
 return object;
};

//OR Alternate Solution

function calculateFrequency(string) {
     let object = {};
    for(let i=0;i<string.length;i++)
    {
    if(string[i]>='a' && string[i]<='z')
     {
       if(object[string[i]]==undefined)
      {
        object[string[i]]=1;
      }
      else
      {
        object[string[i]]+=1;
      } 
     }
    }
      return object;
};


// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
 let result = {};

   // loop through the object "ob"
   for (const i in unflatObject) {

       // Check the type of the i using typeof() function and recursively call the function again
       if ((typeof unflatObject[i]) === 'object' ) {
           const temp = flatten(unflatObject[i]);
           for (const j in temp) {
               // Store temp in result
               result[i + '.' + j] = temp[j];
           }
       }
       // Else store unflatObject[i] in result directly
       else {
           result[i] = unflatObject[i];
       }
   }
   return result;
};


// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  let result = {},
     temp, substrings, property, i;
   for (property in flatObject) {
     substrings = property.split(".");
     temp = result;
     for (i = 0; i < substrings.length - 1; i++) {
       if (!(substrings[i] in temp)) {
         if (isFinite(substrings[i + 1])) {
           temp[substrings[i]] = [];
         } else {
           temp[substrings[i]] = {};
         }
       }
       temp = temp[substrings[i]];
     }
     temp[substrings[substrings.length - 1]] = flatObject[property];
   }
  return result;
 };
