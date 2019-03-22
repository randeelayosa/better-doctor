export function checkType(arr) {
  var sequence = [1,2,3,4,5,6,7,8,9];
  var counter = 0;
  for (var i=0; i < 9; i++) {
    if (typeof arr[i] === "number") {
      counter += 1 ;
    }
  }
  if (counter === 9) {
    arr = arr.sort();
    for (var j=0; j < 9; j++) {
      if (arr[j] === 0) {
        return "has zero";
      } else if (arr[j] > 9) {
        return "greater than nine";
      } else if (arr.join() !== sequence.join()) {
        return "repeating numbers";
      }
      return "nine numbers";
    }
  }
}





// Sequence.prototype.checkType = function() {
//   if ((typeof this.num1 === "number") && (typeof this.num2 === "number") && (typeof this.num3 === "number") && (typeof this.num4 === "number")) {
//     return "numbers";
//     if ((typeof this.num5 === "number") && (typeof this.num6 === "number") && (typeof this.num7 === "number") && (typeof this.num8 === "number") && (typeof this.num9 === "number"))
//   } else {
//     false
//   }
// }
// };

// num1, num2, num3, num4, num5, num6, num7, num8, num9
// this.num1 = num1;
// this.num2 = num2;
// this.num3 = num3;
// this.num4 = num4;
// this.num5 = num5;
// this.num6 = num6;
// this.num7 = num7;
// this.num8 = num8;
// this.num9 = num9;


// for (var i=1; i <= 9; i++) {
//   var number = num.concat(i);
//   if (typeof Sequence.number = "number") {
//     true
//   } else {
//     return false
//   }
// }
