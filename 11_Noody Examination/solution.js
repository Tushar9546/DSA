function  Examination(n,k,arr){
    var count=0;
    var present=0;
    
    for(var i=0; i<n; i++)
    {
        if(arr[i]<=k)
        {
            count++;
        }
        else
        {
            present++;
        }
        if(present>1)
        {
            break;
        }
    }
    console.log(count);
}