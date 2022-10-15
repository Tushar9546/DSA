function longQueue(n,arr){

    var count = 1;

    for(var i=0; i<n; i++)
    {
        if(arr[i-1] > arr[i])
        {
            count++;
        }
    }
    console.log(count);
}