function   matrixRows(matrix,row,col){
      
    for(var i=0; i<row; i++){
        var x= "";
        if(i%2!=0)
        {
            for(var j=0; j<col; j++){
              x=x+(matrix[i][j]+" ");
           }
            console.log(x);
        }
       
    }
    
}