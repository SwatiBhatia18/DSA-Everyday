function searchElement(arr, element) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === element)
            return i;
    }
    return -1;

}

let arr = [4, 2, 0, 10, 8, 30]

// console.log(searchElement(arr, 49))

let nums = [1, 3, 5, 6, 3, 2, 5, 9]

function countNagatives() {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            count++;
        }
    }
    return count;
}

// console.log(countNagatives(nums))


let numbers = [10, 20, 30, 100, 40, 70, 80, 80]

function findLargest() {
    let largest = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i]
        }
    }
    return largest;
}

function findSmallest() {
    let smallest = Infinity
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i]
        }
    }
    return smallest;
}


// console.log(findLargest(numbers))
// console.log(findSmallest(numbers))


function secondLargest(nums) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i]
        }
        else if (nums[i] > secondLargest && nums[i] != largest) {
            secondLargest = nums[i]
        }
    }
    return secondLargest;
}

function thirdLargest(nums) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            thirdLargest = secondLargest;
            secondLargest = largest;
            largest = nums[i]
        }
        else if (nums[i] > secondLargest && nums[i] != largest) {

            thirdLargest = secondLargest
            secondLargest = nums[i]
        }
        else if (nums[i] > thirdLargest && nums[i] != secondLargest && nums[i] != largest) {
            thirdLargest = nums[i]
        }
    }
    return thirdLargest
}

// console logs
// console.log(thirdLargest([5, 5, 4, 3]));     // 3
// console.log(thirdLargest([5, 4, 4, 3]));     // 3
// console.log(thirdLargest([1, 2, 3, 4]));     // 2
console.log(thirdLargest([10, 10, 10]));     // -Infinity (no 3rd unique)
// console.log(thirdLargest([-1, -2, -3]));     // -3

