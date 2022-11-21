function twoArrayAndSum(n, m, arr, s){
    //write code here
   var count = 0;

    for (var i = 0; i < n; i++)
        for (var j = 0; j < m; j++) {
            //checking all rows
            if (j + 3 <= m)
                if (arr[i][j] + arr[i][j + 1] + arr[i][j + 2] == s)
                    count++;

            //checking all columns
            if (i + 3 <= n)
                if (arr[i][j] + arr[i + 1][j] + arr[i + 2][j] == s)
                    count++;

            //checking all primary diagonals
            if (j + 3 <= m && i + 3 <= n)
                if (arr[i][j] + arr[i + 1][j + 1] + arr[i + 2][j + 2] == s)
                    count++;

            //checking all secondary diagonals
            if (i >= 2 && j + 3 <= m)
                if (arr[i][j] + arr[i - 1][j + 1] + arr[i - 2][j + 2] == s)
                    count++;

        }

   console.log(count);

}
