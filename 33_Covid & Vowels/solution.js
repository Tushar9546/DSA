function subString(input){
    var count=0;
   
    for(var i=0; i<input.length; i++){
        var bag="";
        for(var j=i; j<input.length; j++){
            bag = bag + input[j]
            if(check(bag)){
                count++;
            }
        }
    }
    console.log(count);
}

function check(str){
    if(str.includes("a") && str.includes("i") && str.includes("o") && str.includes("u")){
        return true;
    }
    return false;
}