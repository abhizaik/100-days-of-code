// Selection Sort Implementation 
// Author : @incogGod

function selectionSort(array){
    let arr,i,j;
    arr = [].concat(array);
    
    for (i = 0; i < arr.length-1; i++){
        let min_index = i;
        for (j = i+1; j < arr.length; j++){
            if (arr[j] < arr[min_index]){
                min_index = j;
            }
        }
        [arr[i],arr[min_index]] = [arr[min_index],arr[i]];
    }
    return arr;
}

let arr = [1,3,5,7,9,2,4,6,8];
let result = selectionSort(arr);
console.log("Array :" + arr);
console.log("Sorted Array :" + result);