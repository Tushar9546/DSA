function commonIndex(n,m,arr1,arr2){
    var left =0;
    var right = 0;
    var count =0; 
    var bag = "";
    while (left<arr1.length && right<arr2.length){
        if(arr1[left] == arr2[right]){
            count++;
            bag = bag +arr1[left] + " ";
            left++;
            right++;
        }
        else if(arr1[left] > arr2[right]){
            right++;
        }
        else{
            left++;
        }
    }

      if(count==0){
          console.log("-1");
      }
      else{
          console.log(bag);
      }
}