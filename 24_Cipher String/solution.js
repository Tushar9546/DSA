function cipherString(n, str){
    var arr = [];
    var count = 1;

    for(var i=0; i<=n; i++){
        if(str[i] == str[i-1]){
        count++;
        }
        else if(i == 0)
        {
            continue;
        }
        else
        {
            arr.push(str[i-1]+count)
            count = 1;
        }
  }
  console.log(arr.join(""));
}