function decipherString(n,str){
    var sum="";
    for(var i=0; i<n; i=i+2){
        var x=str[i];
        for(var j=0; j<(str[i+1]); j++){
            sum = sum+str[i];
        }
        
    }
    console.log(sum);
}