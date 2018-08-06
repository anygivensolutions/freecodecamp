var newArray = [];
var reversedArray = [];

function makeArray(myStr) {
  for (var i = 0; i < myStr.length; i++ ) {
    newArray.push(myStr[i]);
  }
return newArray
} makeArray('gym');

function reverse(arr) {
  for(var i = arr.length - 1; i >=0; i--) {
    reversedArray.push(arr[i]);
  }
return reversedArray;
} reverse(newArray);

var str = newArray.toString();
return str;
// put back into a string and return it
