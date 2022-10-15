function faultyDirection(n,str){
    var x=0;
    var y=0;
    for(var i=0; i<n; i++){
        if(str[i]=="R")
        {
            x= x+1;
        }
        else if(str[i]==="L")
        {
            x=x-1;
        }
        else if(str[i]==="U")
        {
            y=y+1;
        }
        else if(str[i]==="D")
        {
            y=y-1;
        }
    }
    if(x===0 && y===0)
    {
        console.log("Yes");
    }
    else
    {
        console.log("No")
    }
}
