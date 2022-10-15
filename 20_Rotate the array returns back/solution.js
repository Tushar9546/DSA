function rotateArray(n,k,arr) {
    var bag =""
 
  var k = k % n;
   
  for (var i = 0; i < n; i++) {
     
      if (i < k) {
          // console.log(arr[n + i - k] + " ");
          bag = bag+(arr[n + i - k] + " ");
      }
      else {
           //console.log((arr[i - k]) + " ");
           bag = bag+((arr[i - k]) + " ")
      }
       
  }
 console.log(bag)
}