function solve(N,arr){
 
    for(var i=0; i<N; i++){
        var smallest = i;
        for(var j=i+1; j<N; j++){
            if(arr[smallest] > arr[j])
            {
                smallest = j;
            }
        }
        var temp = arr[smallest];
        arr[smallest] = arr[i];
        arr[i] = temp;
    }
  
    var bag="";
    for(var k=0; k<N; k++){
        bag += arr[k]+" ";
    }
    console.log(bag);
}