function forward(N,k,arr){
    var count=0;
   
   for(var i=0; i<N; i++){
      
       if(arr[i]>=arr[k-1] && arr[i] > 0)
       {
           count++;
       }
   }
   console.log(count);
     
 }