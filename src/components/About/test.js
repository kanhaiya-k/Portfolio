function wiredSum(arr1, arr2, curr, sumArr) {
  if (arr2.length > 0) {
    var sum = 0;
    for (var j = 0; j < arr2.length; j++) {
      sum += arr2[j];
    }
    sumArr.push(sum);
  }
  if (curr > arr1.length) {
    return;
  }
  for (var i = curr; i < arr1.length; i++) {
    arr2.push(arr1[i]);

    wiredSum(arr1, arr2, i + 1, sumArr);

    arr2.pop();
  }
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var testCases = +input[0];
  var line = 1;

  for (var i = 0; i < testCases; i++) {
    var N = +input[line];
    line++;
    var arr = input[line]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => {
        return a - b;
      });
    line++;

    var sumArr = [];
    var arr2 = [];
    var curr = 0;
    var K = arr.pop();
    var arr1 = arr;
    var count = 0;

    wiredSum(arr1, arr2, curr, sumArr);

    for (var k = 0; k < sumArr.length; k++) {
      if (sumArr[k] == K) {
        count++;
      }
    }

    if (count > 0) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
