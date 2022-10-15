function stringUniqueness(input) {
    var N = input.length;
    
    diary = {};
    
    for(var i=0; i<N; i++)
    {
        var char = input[i];
        if(diary[char] == undefined)
        {
            diary[char] = 1;
        }
        else
        {
            diary[char] = diary[char] + 1;
        }
    }
    var count = 0;
    for(var k in diary)
    {
        if(diary[k] == 1)
        {
            count++;
        }
    }
    if(count == N)
    {
        console.log("Unique");
    }
    else
    {
        console.log("No");
    }
}