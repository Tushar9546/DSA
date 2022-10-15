function string(str1,str2){
    let obj2={}; 
    let obj1={};
    for(let i=0; i<str1.length; i++)
    {
        let key=str1[i];
        if(obj1[str1[i]]==undefined)
        {
            obj1[str1[i]]=1;
        }
        else { 
            
            obj1[str1[i]]++;
              }
     
    }

    for(let i=0; i<str2.length; i++)
    {
        let key=str2[i];
        if(obj2[str2[i]]==undefined)
        {
            obj2[str2[i]]=1;
        }
        else { 
            
               obj2[str2[i]]++;
             }
    }
    let count1=0;
    let count2=0;
    for(let key1 in obj1){
       for (let key2 in obj2){
           if(key1==key2){
               count1++;
               if(obj1[key1]==obj2[key2]){
                   count2++
               }
           }
       }
    }
    if (count1==count2){
         console.log("True");
    }
    else{
         console.log("False");
    }
   }
   