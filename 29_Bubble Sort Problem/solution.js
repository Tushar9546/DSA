function solve(N,arr){

    for(var i=0; i<N; i++){
        for(var j=0; j<N-i-1; j++){
            if(arr[j] > arr[j+1])
            {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    var bag="";
    for(var k=0; k<N; k++){
        bag += arr[k]+" ";
    }
    console.log(bag);
}