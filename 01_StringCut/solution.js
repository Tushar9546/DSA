function StringCut(str){
    var n = str.length;
    var m = Math.floor(n/2);
    var b = "";
  //   step -1
    if(n%2 == 1){
        for(var i=m-1; i>=0; i--){
            b +=str[i];
        }
        for(var i=m; i>=m; i--){
            b += str[i];
        }
        for(var i=n-1; i>=m+1; i--){
            b += str[i]
        }
    }
  //  step 2
    else{
        for(var i=m-1; i>=0; i--){
            b += str[i];
        }
        for(var i=n-1; i>=m; i--){
            b += str[i];
        }
    }
    console.log(b);
}