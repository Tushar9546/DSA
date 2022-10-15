function runProgram(input) {
    input= input.trim().split('\n')
    var price = input[0].trim().split(" ").map(Number)
    var quantity = input[1].trim().split(" ").map(Number)
    //  console.log(price, quantity)
     payforphones(price, quantity)
  }
  
  function payforphones(price, quantity){
      
      var sum=0;
      for(var i=0,j=0; i<price.length,j<quantity.length; i++,j++)
      {
         sum=sum+price[i]*quantity[j];
      }
      if(sum<=150000)
      {
          console.log("Possible");
      }
      else{
          console.log("Not Possible");
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