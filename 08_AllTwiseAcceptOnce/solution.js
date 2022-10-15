function checkNumber(n,arr){
    var obj={};
    for(var i=0; i<arr.length; i++)
    {
        var number=arr[i];
        if(obj[number]==undefined)
        {
            obj[number]=1;
        }
        else
        {
            obj[number]=obj[number]+1;
        }
    }
    for(var key in obj)
    {
        if(obj[key]==1)
        {
            console.log(key);
        }
    }
    
 }