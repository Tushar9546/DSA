function bonAppetit(n,k,arr,bill){     
    
    var sum = 0;
    for(var i=0; i<n; i++){
        sum += arr[i];
    }
    sum -= arr[k];
    var ans = Math.floor(sum/2);
    var ans = bill-ans;
    if(ans <= 0)  
    {
        console.log("Bon Appetit");
    }
    else
    {
        console.log(ans);
    }
}


function runProgram(input) {
    input = input.trim().split('\n')
    var tc = +input[0]
    var line=1;
    
    for(var i=0; i<tc; i++)
    {
        var [n,k]=input[line].trim().split(" ").map(Number)
        line++;
        var arr = input[line].trim().split(" ").map(Number)
        line++
        var bill = +input[line]
        line++
        bonAppetit(n,k,arr,bill);
    }

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