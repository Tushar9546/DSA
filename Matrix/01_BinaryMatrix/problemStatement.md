Description

You are given a binary matrix of size N x M. A binary matrix is one which consists of only 1's and 0's. You have to flip the matrix. Flipping the matrix means converting all 1's to 0's and all 0's to 1's.

Note : This is a function complete problem
You just have to complete the function and print the required output

Input
The first line of the input contains N and M, the dimensions of the matrix.

The next N lines contain M space separated integers denoting the values of the matrix.

Constraints

1 <= N , M <= 100

0 <= A[i][j] <= 1


Output
Print the matrix after flipping it, as shown in the sample test case.


Sample Input 1 

3 2
1 0
0 1
1 1
Sample Output 1

0 1 
1 0 
0 0 
Hint

In the sample test case, we are given a 3 x 2 matrix. In the first row, the row is -> {1,0}. Flipping the 0's to 1's and 1's to 0's, the row becomes {0,1}. Similarly, the second row after flipping becomes

{1,0}, and the third row after flipping becomes {0,0}.