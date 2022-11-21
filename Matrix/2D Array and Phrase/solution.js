function twoArrayAndPhrase(n, m, matrix){
    var count=0;
    for(var i=0; i<n; i++)
    {
        for(var j=0; j<m; j++)
    {
        if(matrix[i][j]=="s")
        {
             if(j+3<m)
             {
                 if(matrix[i][j]=="s" && matrix[i][j+1]=="a" && matrix[i][j+2]=="b" && matrix[i][j+3]=="a")
                 {
                      count++;
                 }
                 if(i+3<n)
                 {
                     if(matrix[i][j]=="s" && matrix[i+1][j+1]=="a" && matrix[i+2][j+2]=="b" && matrix[i+3][j+3]=="a")
                     {
                          count++;
                     }
                 }
             }
             if(i+3<n)
             {
                  if(matrix[i][j]=="s" && matrix[i+1][j]=="a" && matrix[i+2][j]=="b" && matrix[i+3][j]=="a")
                  {
                      count++;
                  }
             }
              if((i-3)>=0 && (j+3)<m)
              {
                  
                 if(matrix[i][j]=="s" && matrix[i-1][j+1]=="a" && matrix[i-2][j+2]=="b" && matrix[i-3][j+3]=="a")
                 {
                     count++;
                 }
              }
        }
    }
    }
    console.log(count);
}