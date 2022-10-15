function party(a,arr1,b,arr2){       
    
    var obj1 = {};
    for(var i=0; i<arr1.length; i++) {
        var x = arr1[i];
        obj1[x] = 1;
    }
    //console.log(obj1)
    var bag1 = "";
    for(var key in obj1){
        bag1+=key+" "
    }
    // console.log(bag1)
    var obj2 = {};
    for(var i=0; i<arr2.length; i++) {
        var x = arr2[i];
        obj2[x] = 1;
    }
    //console.log(obj2)
    var bag2 = "";
    for(var key in obj2){
        bag2+=key+" "
    }
    if(bag1 == bag2){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}
