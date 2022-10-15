function runProgram(input) {
    input= input.trim().split('\n')
   var tc= +input[0]
   var line= 1
   
   for(var i=0; i<tc; i++){
       var matrix=[]
       var [row,col,Q]= input[line].trim().split(" ").map(Number)
       line++
       
       for(var j=0; j<row; j++){
           matrix.push(input[line].trim().split(" ").map(Number))
           line++
          
       }
        matrixTraversal (row,col,Q,matrix)
       //  console.log(row,col,matrix,Q)
   }
 }


function matrixTraversal (row,col,Q,matrix){
   if(Q==1)
   {
       var bag="";
       for (var i=0;i<row;i++)
       {
          if (i%2===1)
             {
                for (var j=col-1; j>=0; j--) 
                 {
                   bag=bag+matrix[i][j]+" ";
                 }
             }
           else
           {
                for (var j=0; j<col; j++) 
                 {
                    bag=bag+matrix[i][j]+" ";
                 }
           }
       }
  console.log(bag);
}
  if(Q===2)
   {
       var bag1="";
       for (var i=0;i<row;i++)
       {
          if (i % 2 == 0)
             {
                 for (var j=col-1; j>=0; j--) 
                 {
                   bag1=bag1+matrix[i][j]+" ";
                 }
             }
           else
           {
                for (var j=0; j<col; j++) 
                 {
                    bag1=bag1+matrix[i][j]+" ";
                 }
           }
       }
  console.log(bag1);
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