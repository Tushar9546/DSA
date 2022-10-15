Description

Abhishek and Akash were two friends and are deciding to split the bill of the food they eat for dinner. Each of them will only pay the bill for the items they consume. Abhishek gets the check and calculates Akash's portion. You must determine if his calculation is correct.

For example, assume the bill has the following prices bill = [2,4,6]. Akash declines to eat item k = bill[2] which costs 6. If Abhishek calculates the bill correctly, Akash will pay (2+4)/2 = 3. If he includes the cost of the bill[2], he will calculate (2+4+6)/2 = 6. In the second case, he should refund to Akash.


Input
Input Format

First-line contains T, no of test cases.

The first line of each test case contains two space-separated integers n and k, the number of items ordered, and the 0-based index of the item that Akash did not eat.

The second line of each test case contains space-separated integers bill[i] where 0 <= i < n.

The third line of each test case contains an integer, b, the amount of money that Abhishek charged Akash for his share of the bill.

Constraints

1 <= T <= 10

2 <= n <= 10^5

0 <= k < n

0 <= bill[i] <= 10^4

0 <= b <= Sum of all elements of bill array.


Output
For each test case, If Abhishek did not overcharge Akash, print Bon Appetit on a new line; otherwise, print the difference (i.e., chargedAmount - actualAmount) that Abhishek must refund to Akash. This will always be an integer.


Sample Input 1 

2
4 1
3 10 2 9
12
4 1
3 10 2 9
7
Sample Output 1

5
Bon Appetit
Hint

For the first test case,

Akash didn't eat item bill[1] = 10, but he shared the rest of the items with Abhishek. The total cost of the shared items is 3+10+2+9 = 14 and, split in half, the cost per person is actualAmount = 7. Abhishek charged him chargedAmount = 12 for his portion of the bill. We print the amount Akash was overcharged, 5, on a new line.

For the second test case,

Akash didn't eat item bill[1] = 10, but he shared the rest of the items with Abhishek. The total cost of the shared items is 3+10+2+9 = 14 and, split in half, the cost per person is actualAmount = 7. Abhishek charged him chargedAmount = 7 for his portion of the bill. We print the Bon Appetit as the Abhishek does not overcharge Akash, on a new line.