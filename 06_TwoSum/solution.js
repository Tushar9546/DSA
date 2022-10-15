function twoSum(N,B,arr){
    var count=0;
    var maximum=-Infinity;
    var minimum=Infinity;
    
    for(var i=0; i<N; i++)
    {
        for(j=i+1; j<N; j++)
        {
            if(arr[i]+arr[j]==B)
            {
                if(i<minimum)
                {
                    minimum=i;
                    maximum=j;
                }
            }
            else
            {
                count++;
            }
        }
    }
    if(count==(N*(N-1)/2))
    {
        console.log(-1,-1)
    }
    else
    {
       console.log(minimum,maximum); 
    }
}