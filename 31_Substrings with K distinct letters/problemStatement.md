Description

Given string str of lowercase alphabets of length n and an integer K, the task is to count all substrings of length K which have exactly K distinct characters.


Input
Input Format

First line contains n and k separated by space

Second line contains strings of length n.

Constraints

1<=n<=10^6

1<=k<=10^6


Output
Print count of substrings of length k with k distinct letters


Sample Input 1 

4 2
abcc
Sample Output 1

2
Hint

Sample 1 Explanation

Possible substrings of length K = 2 are

ab : 2 distinct characters

bc : 2 distinct characters

cc : 1 distinct character

Only two valid substrings exist {“ab”, “bc”}.