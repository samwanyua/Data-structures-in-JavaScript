// Binary search
let start = 1;
let arr = []

for(let i =1; i < 2000; i++){
    arr.push(i)
}

let end = arr.length - 1;
let target = 893;
function binarySearch(arr, start,target, end) {
	console.log(arr.slice(start,end))
	if(start > end) return false
    let midIndex = Math.floor((start + end)/2);

    if(arr[midIndex] === target) return true

	if(arr[midIndex] > target) {return binarySearch(arr, start,midIndex-1, target);}
    else if (arr[midIndex] < target) {return binarySearch(arr, midIndex + 1,end, target);}
	
    
}

console.log(binarySearch(arr,start,end,target))


// // Binary search
// let start = 1;
// let arr = [];

// for (let i = 1; i < 2000; i++) {
//     arr.push(i);
// }

// let end = arr.length - 1;
// let target = 893;

// function binarySearch(arr, start, end, target) {
//     if (start > end) return false;
//     let midIndex = Math.floor((start + end) / 2);

//     if (arr[midIndex] === target) return true;

//     if (arr[midIndex] > target) {
//         return binarySearch(arr, start, midIndex - 1, target);
//     } else {
//         return binarySearch(arr, midIndex + 1, end, target);
//     }
// }

// console.log(binarySearch(arr, start, end, target));
