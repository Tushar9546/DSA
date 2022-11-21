function masaiPalSubString(S){
    //write code here
     var longest_length=0;
     var n=S.length;
     for(var i=0; i<n; i++)
     {
         for(var j=i; j<n; j++)
         {
             var bag="";
             for(var k=i; k<=j; k++)
             {
                 bag=bag+S[k];
             }
             var reverse_bag="";
             for(var k=j; k>=i; k--)
             {
                 reverse_bag=reverse_bag+S[k];
             }
             if(bag==reverse_bag)
             {
                 if(bag.length>longest_length)
                 {
                     longest_length=bag.length;
                 }
             }
         }
     }
     console.log(longest_length);
}
