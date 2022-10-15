function runProgram(input) {
    input = input.trim().split('\n')
    var tc = +input[0];
    var line = 1;
    for(var i=0; i<tc; i++){
         var [n,k] = input[line].trim().split(" ").map(Number)
         line++;
         var arr = input[line].trim().split(" ").map(Number)
         line++;
        console.log(differenceOfK(n,k,arr))
    }
}
  
function differenceOfK(n,k,arr){
      let left = 0;
      let right = 1;
 
           while (left < n && right < n) {
               if (left != right && arr[right] - arr[left] == k) {
                return "Yes";
               }
               else if (arr[right] - arr[left] < k){
                   right++;
               }  
               else{
                   left++
               }      
           }

    return "No";
}

if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }