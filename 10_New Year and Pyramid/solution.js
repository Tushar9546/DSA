function Pyramid(input){
    var n=input;
   level=1;
   while(n > 0)
   {
       req_stones= level*(level+1);
       req_stones= Math.floor( req_stones/2);
       if( req_stones>n)
       {
           break;
       }
       n=n-req_stones;
       level++;
   }
       console.log(level-1);
 }
