function spiralTraversalV(N, matrix){
  var top=0;
  var left=0;
  var bottom=N-1;
  var right=N-1;
  var count=0;
  var bag="";
  while(count<N*N)
  {
      for(var i=top; i<=bottom; i++)
      {
          bag=bag+matrix[i][left]+" ";
          count++;
      }
      left++;
      for(var i=left; i<=right; i++)
      {
          bag=bag+matrix[bottom][i]+" ";
          count++;
      }
      bottom--;
      for(var i=bottom; i>=top; i--)
      {
          bag=bag+matrix[i][right]+" ";
          count++;
      }
      right--;
      for(var i=right; i>=left; i--)
      {
          bag=bag+matrix[top][i]+" ";
          count++;
      }
      top++;
  }
  console.log(bag);
}