function binaryMatrix(N,M, matrix) {
    for(var i=0; i<N; i++){
        var x="";
        for(var j=0; j<M; j++){
            if(matrix[i][j]==0)
            {
                matrix[i][j]=1;
            }
            else
            {
                matrix[i][j]=0;
            }
            x=x+matrix[i][j]+" "; 
        }
         console.log(x);
    }   
   }