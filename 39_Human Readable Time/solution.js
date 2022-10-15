function  Readable(input){
    var hr = Math.floor(input/ 60);  
    var minutes = input% 60;
    if(hr ==1){
         console.log(hr+"hr"+" "+minutes+"mins");         
    }
    else{
         console.log(hr+"hrs"+" "+minutes+"mins");     
    }
}
  