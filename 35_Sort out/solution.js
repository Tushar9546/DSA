function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number)
    let index = []
    for(let i=0; i<n; i++){
        index.push(i);
    }
    sortout(n,arr,index)
}
  
function sortout(n,arr,index){
        for (var i=0; i<n-1; i++){
            for (var j=0; j<n-i-1; j++){
                if (arr[j] > arr[j+1]){
                    // swap(arr,j,j+1,index);
                     var temp = arr[j];
                      arr[j] = arr[j+1];
                      arr[j+1] = temp;
                      temp = index[j]
                      index[j] = index[j+1]
                      index[j+1] = temp;
      
        }

      }
   }
    console.log(index.join(" "));
    
    // function swap(arr,i,j,index){
    //     temp = arr[i];
    //     arr[i] = arr[j];
    //     arr[j] = temp;
    //     temp = index[i];
    //     index[i] = index[j];
    //     index[j] = temp;
    // }
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