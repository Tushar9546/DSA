function runProgram(input) {
    input=input.trim().split('\n')
    var n=+input[0];
    var line=1;
    var arr = [];
    for(var i=0; i<n; i++){
        var obj={};
        var [name,marks]=input[line].split(" ")
        obj.name=name;
        obj.marks=marks;
        arr.push(obj)
        line++;
    }
    leaderboard(n,arr)

  }
  
function leaderboard(n,arr){
    for(var i=0; i<n-1; i++){
           for(var j=0; j<n-1-i; j++){
                if(arr[j].marks < arr[j+1].marks){
                    var temp = arr[j];
                    arr[j]= arr[j+1];
                    arr[j+1] = temp
                }
                if(arr[j].marks == arr[j+1].marks){
                    if(arr[j].name > arr[j+1].name){
                       var temp = arr[j];
                       arr [j] = arr[j+1];
                       arr[j+1]=temp;
                    }
                }
            }
    }
    var rank = 1;
    for(var i=0; i<arr.length; i++)
      {
          if(i===0)
           {
              console.log(rank,arr[i].name);
           }
          else if(arr[i].marks == arr[i-1].marks)
           {
              console.log(rank, arr[i].name);
           }
          else
           {
              rank = 1+i;
              console.log(rank, arr[i].name);
           }
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