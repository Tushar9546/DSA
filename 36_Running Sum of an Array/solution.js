function runningSum(n,arr){
    var sum = 0;
    var ans="";

    for(var i=0; i<n; i++){ 
        if(arr[i]>arr[i]-1)
        {
            sum=sum+arr[i];
            ans=[ans+sum]+" ";
        }
    }
    console.log(ans); 
}