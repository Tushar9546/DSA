function missingInteger(arr){
    var n=arr.length;
    for(var i=1; i<n; i++){
        var found = false;
        for(var j=0; j<n; j++){
            if(arr[j]===i)
            {
                found=true;               
                break;
            }
        }
        if(found==false)
        {
            console.log(i);
        }
    }
}