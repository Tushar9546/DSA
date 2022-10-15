function  matrixSum(row,col,matrix){
    var sum=0;
    for(var i=0; i<row; i++){
        for(var j=0; j<col; j++){
            if(i==0 || i==row-1 || j==0 || j==col-1){
                continue;
            }
            else {
                sum=sum+matrix[i][j];
            }
        }
    }
    console.log(sum);
}