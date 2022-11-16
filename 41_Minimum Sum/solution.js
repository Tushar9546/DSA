function runProgram(input) {
    input = input.trim().split("\n")
    var tc = +input[0]
    var line = 1;
    for(var i=0; i<tc; i++){
        var [size,k] = input[line++].trim().split(" ").map(Number)
        var arr = input[line++].trim().split(" ").map(Number)
        takoutMaximum(size,k,arr)
    }
    }
    
    function takoutMaximum(size,k,arr){
      var sum=0;
      for(var i=0; i<k; i++){
          sum = sum + arr[i];
      }
  
      var max_sum = sum;
      var start =0;
      
      for(var j=k; j<size; j++){
          sum = sum +arr[j] - arr[start++];
          if(sum < max_sum)
          {
              max_sum = sum;
          }
      }
      console.log(max_sum)
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