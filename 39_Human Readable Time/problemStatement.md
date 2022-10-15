Description

Given number of minutes, convert it into human readable form.

Example:

130 becomes 2hrs 10minutes

110 becomes 1hr 50minutes

120 becomes 2hrs 00minutes

Note the exact format of output

If number of hour is 1 then output would be hr and not hrs

In case there are exact number of hours (like 120 minutes), keep minutes as 00

Keep minutes always in plural form even if it is 1 (singular)


Input
Input Format

First and only line of input contains a number which is total time in minutes that needs to be converted into human readable form.

Constraints

65<= input < 10000 minutes


Output
Output Format

Output the string in correct format as per following rules:

1. If number of hour is 1 then output would be hr and not hrs

2. In case there are exact number of hours (like 120 minutes), keep minutes as 00

3. Keep minutes always in plural form even if it is 1 (singular)

4. There is exactly one space between hours reading and minutes reading


Sample Input 1 

135
Sample Output 1

2hrs 15mins