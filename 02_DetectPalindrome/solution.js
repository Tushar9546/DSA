function detectPalII(N, string){
    var x = {};   
    for(var i=0; i<N; i++){
        var char = string[i];
        if(x[char] == undefined){
            x[char] = 1;
        }
        else{
            x[char] = x[char] + 1;
        }
    }
    var count = 0;
    for(var k in x){
        if(x[k] % 2 == 1){
            count++;
        }
    }
    if(count >= 2){
        console.log("Not Possible!");
    }
    else{
        console.log("Possible!");
    }
}