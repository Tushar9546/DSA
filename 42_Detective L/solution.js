function solve(arr, n, m) {
    let result = "";
    let count = 0;
    let top = 0;
    let down = n - 1;
    let left = 0;
    let right = m - 1;

    while (count < m * n) {
        for (let i = top; i <= down && count < m * n; i++) {
            result += arr[i][left] + " ";
            count++;
        }
        left++;

        for (let i = left; i <= right && count < m * n; i++) {
            result += arr[down][i] + " ";
            count++;
        }

        down--;
    }

    console.log(result);
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let [n, m] = newInput[i].trim().split(" ").map(Number);
        let arr = newInput.splice(i + 1, n);
        arr = arr.map((el) => el.trim().split(" ").map(Number));
        solve(arr, n, m);
    }
}
if (process.env.USERNAME === "") {
    runProgram();
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}