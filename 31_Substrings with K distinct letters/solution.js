function Substrings(str, N, K){
    var N = str.length;
    var answer = 0;
 
    // Store the count of distinct characters in every window
    var map = new Map(); 
 
    // Store the frequency of the first K length substring
    for (var i = 0; i < K; i++) {
 
        // Increase frequency of i-th character
        if(map.has(str[i])){
            map.set(str[i], map.get(str[i])+1)
        }
        else{
            map.set(str[i], 1) 
        }
    }
 
    // If K distinct characters exist
    if (map.size == K){
        answer++; 
    }
       
    // Traverse the rest of the substring
    for (var i = K; i < N; i++) {
 
        // Increase the frequency of the last character of the current substring
        if(map.has(str[i])){
             map.set(str[i], map.get(str[i])+1)
        }
        else{
              map.set(str[i], 1)
        }
          
        // Decrease the frequency of the first character of the previous substring
        if(map.has(str[i-K])){
             map.set(str[i-K], map.get(str[i-K])-1)
        }
           
        // If the character is not present in the current substring
        if (map.has(str[i - K]) && map.get(str[i-K])==0) {
            map.delete(str[i - K]);
        }
 
        // If the count of distinct characters is 0
        if (map.size == K) {
            answer++;
        }
    }
 
    // Return the count
    return answer;
  }