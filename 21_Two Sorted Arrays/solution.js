function storedArrays(arr1,arr2){
    var left=0;
    var right= arr2.length-1;
   var count=0;
   while(left<arr1.length && right>=0)
   {
       if(arr1[left]==arr2[right])
       {
           count++;
           left++;
           right--;
       }
       else if(arr1[left]< arr2[right])
       {
           left++;
       }
       else
       {
           right--;
       }
   }
   console.log(count);
}