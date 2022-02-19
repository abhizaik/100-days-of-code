// Binary Search Implementation 
// Author : @incogGod

function binarySearchIteration(arr,x){
    let left = 0;
    let right = (arr.length) - 1;

    while(right>=left){
    let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] == x){
            return mid;
        }else if(arr[mid] > x){
            right = mid - 1;
        }else{
            left = mid +1;
        }
    }
    return -1;    
}

function binarySearchRecursion(arr,left,right,x){
    let mid = left + Math.floor((right - left) / 2);

    if (right >= left){
        if (arr[mid] == x){
            return mid;
        }else if(arr[mid] > x){
            return binarySearchRecursion(arr,left,mid-1,x);
        }else{
            return binarySearchRecursion(arr,mid+1,right,x);
        }
        
    }else{
        return -1;
    }

}

let arr = [1,2,3,4,5,6,7,8,9];
let x = 7;
let left = 0;
let right = (arr.length)-1;
let resultRecursion = binarySearchRecursion(arr,left,right,x);
let resultIteration = binarySearchIteration(arr,x);

console.log("Result of recursion function: " + resultRecursion);
console.log("Result of iteration function: " + resultIteration);