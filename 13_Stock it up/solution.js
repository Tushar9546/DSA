function stockItUp(N,elements){
    var price=[110,120,42,53,40,32,126];
    var scale=[5,2,2,3,2,5,2];
    var sum=0;
    for(var i=0; i<elements.length; i++)
    {
        if(elements[i]==1)
        {
           sum=sum+price[i]*scale[i];
        }
    }
  console.log(sum*N);
}
