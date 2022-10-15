function takoutMaximum(size,k,arr){
    var sum=0;
    for(var i=0; i<k; i++){
        sum = sum + arr[i];
    }

    var max_sum = sum;
    var start =0;
    
    for(var j=k; j<size; j++){
        sum = sum +arr[j] - arr[start++];
        if(sum > max_sum)
        {
            max_sum = sum;
        }
    }
    console.log(max_sum)
  }