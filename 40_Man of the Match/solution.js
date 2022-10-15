function  manOfmatch(n,arr){
    var abR=0, vR=0, Ab=true;
    var x =0;
    for(var i=0; i<n; i++){
        for(var j=0; j<6; j++){
            if(Ab){
                abR += arr[x];
                if(arr[x]%2==1){
                    Ab  =!Ab;
                }
            }else{
                vR += arr[x];
                if(arr[x]%2==1){
                    Ab=!Ab;
                }
            }
            x++;
        }
        Ab=!Ab
    }
    if(abR >vR){
        console.log("AB de Villiers");
    }else if(abR <vR){
        console.log("Virat Kohli");
    }
    else{
         console.log("Tie");
    }
}