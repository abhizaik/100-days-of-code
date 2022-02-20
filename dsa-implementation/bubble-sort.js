// Buuble Sort Implementation 
// Author : @incogGod

function bubbleSort(array){
    let arr = [];
    arr = arr.concat(array);
    let n = arr.length;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let arr = [1,3,5,7,9,2,4,6,8];
let result = bubbleSort(arr);
console.log("Array :" + arr);
console.log("Sorted Array :" + result);