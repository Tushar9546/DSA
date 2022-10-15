function dayOfTheWeek(day, N) {
    var obj = {
         0:"Sunday",
         1:"Monday",
         2:"Tuesday",
         3:"Wednesday",
         4:"Thursday",
         5:"Friday",
         6:"Saturday",
     };
     var remainder = N%7;
     for(var key in obj){
         if(day==obj[key]){
             add = (remainder) + (+key);
             remainder = add % 7;
             console.log(obj[remainder]);
         }
     }
 }