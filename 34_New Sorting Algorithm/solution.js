function  sortingArray(n,k,arr){

    for (i = 0;i<n;i++){
        for (j = 0;j<n-i-1;j++){
            if ((arr[j] % k) > (arr[j + 1] % k))
            {
             var temp = arr[j];
             arr[j] = arr[j+1];
             arr[j+1] = temp;
            }
        }
    }
    
    var bag ="";
    for(var l=0; l<n; l++){
        bag=bag+arr[l]+" ";
    }
    console.log(bag);
}
