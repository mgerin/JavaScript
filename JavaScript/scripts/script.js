function switchFunc() {
    let day = 2;
    switch (day) {
        case 1: console.log('Monday'); break;
        default: console.log('Error'); break;
    }
}

function symmetricNumbers(arr) {
    let n = Number(arr[0]), result = '';

    for (let i = 1; i <= n; i++)
        if (isSymmetric("" + i))
            result += i + " "
    console.log(result)

    function isSymmetric(str) {
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] != str[str.length - i - 1]) {
                return false;
            }

        }
        return true;
    }
}

function largestNumbers(arr) {
    let nums = arr.map(Number);
    let sortedNums = nums.sort((a, b) => b - a);
    let count = Math.min(3, arr.length);
    for (let i = 0; i < count; i++)
      console.log(sortedNums[i]);
}

function extractCapitalCaseWords(arr) {
    let text = arr.join(",");
    let words = text.split(/\W+/);
    let nonEmptyWords = words.filter(w => w.length > 0);

    function isUppercase(str) {
        return str == str.toUpperCase();
    }

    let upWords = nonEmptyWords.filter(isUppercase);
    console.log(upWords.join(", "))
}

function MultiplyNumberByTwo(nums) {
    let num = Number(nums[0]);
    return num * 2;
}

function multiplyNumbers(nums) {
    let firstNum = Number(nums[0]);
    let secondNum = Number(nums[1]);
    return firstNum * secondNum;
}

function multiplyOrDevideNumbers(nums) {
    let firstNum = Number(nums[0]);
    let secondNum = Number(nums[1]);
    if (firstNum > secondNum)
        return firstNum / secondNum;
    else
        return firstNum * secondNum;
}

function productOfTreeNumbers(nums) {
    let firstNum = parseInt(nums[0]);
    let secondNum = parseInt(nums[1]);
    let thirdNum = parseInt(nums[2]);
    let threeNums = [firstNum, secondNum, thirdNum];
    let negativeSign = 0;
    for (let i = 0; i < 3; i++)
        if (threeNums[i] < 0) {
            negativeSign += 1;
        }

    if (negativeSign % 2 == 0) {
        console.log("Positive")
    }
    else {
        console.log("Negative")
    }

}

function printNumberToN(nums) {
    let num = Number(nums[0]);
    for (let i = 1; i <= num; i++)
        console.log(i);
}

function printNumbersFromN(nums) {
    let num = Number(nums[0]);
    for (let i = num; i > 0; i--)
        console.log(i);
}

function readLines(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "Stop") {
            break;
        }
        console.log(arr[i]);
    }
}

function printInReversedOrder(arr) {
    let nums = arr.reverse();
    for (let num of nums)
        console.log(num);
}

function setIndex(arr) {
    let count = Number(arr[0]);
    let newArr = [];
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i].split(' - ');
        let index = temp[0];
        let value = temp[1];
        newArr[index]=value;
    }
    for (let j = 0; j < count; j++) {
        if (newArr[j] == undefined) {
            console.log(0);
        }
        else {
            console.log(newArr[j]);
        }
    }
}

function addRemoveElements(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i].split(" ");
        let cmd = value[0];
        let num = value[1];
        if (cmd == "add") {
            newArr.push(num);
        }
        if (cmd == "remove" && num >= 0 && num < newArr.length) {
            newArr.splice(num, 1);
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        console.log(newArr[i]);
    }
}

function keyValuePairs(arr) {
    let numbers = [];
    for (let i = 0; i < arr.length -1; i++) {
        let pair = arr[i].split(' ');
        let cmd = pair[0];
        let number = pair[1];
        numbers[cmd] = number;
    }
    let key = arr[arr.length - 1]
    if (numbers[key] == undefined) {
        console.log('None');
    }
    else {
        console.log(numbers[key]);
    }
}

function multipleKeyValuePairs(arr) {
    let numbers = [];
    var isFound = false;
    for (let i = 0; i < arr.length -1; i++) {
        let pair = arr[i].split(' ');
        let key = pair[0];
        let number = pair[1];
        var lastKey = arr[arr.length - 1];

        if (!isNaN(key) && !isNaN(lastKey)) {
            key = parseInt(key);
            lastKey = parseInt(lastKey);
        }
        if (key == lastKey) {
            isFound = true;
            if (key in numbers) {
                numbers[key] += '\n' + number;
            }
            else {
                numbers[key] = number;
            }
        }
    }

    if (!isFound) {
        console.log('None');
    }
    else {
        console.log(numbers[lastKey]);
    }
}