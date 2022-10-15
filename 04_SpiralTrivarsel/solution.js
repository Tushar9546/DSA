function spiralTraversal(N, M, arr){
    //write code here
  var top=0;
  var left=0;
  var right=M-1;
  var bottom=N-1;
  var x=N*M;
  var bag="";
  var count=0;
  while(count<x)
  {
      for(var i=top; i<=bottom && count<x; i++)
      {
          bag=bag+arr[i][left]+" ";
          count++;
      }
      left++;
      for(var i=left; i<=right && count<x; i++)
      {
          bag=bag+arr[bottom][i]+" ";
          count++;
      }
      bottom--;
      for(var i=bottom; i>=top && count<x; i--)
      {
          bag=bag+arr[i][right]+" ";
          count++;
      }
      right--;
      for(var i=right; i>=left && count<x; i--)
      {
          bag=bag+arr[top][i]+" ";
          count++;
      }
      top++;
      
  }
  
 console.log(bag); 
}