// Insertion Sort Implementation 
// Author : @incogGod
    
function insertionSort(){
    let arr = array;
    let len = arr.length;
    
    
    for (let i=0 ; i<len ; i++){
        if (arr[i] < arr[0]){
           let val = arr.splice(i,1);
           arr.unshift(val[0]);

        }else{
            
            for(let j = 0; j<i; j++){
                if (arr[i]>arr[j-1] && arr[i]<arr[j]){
                    let val = arr.splice(i,1);
                    arr.splice(j,0,val[0]);
                }
            }
        }
    }
    return arr;
}

let array = [9,7,5,4,3,8,2,1];
console.log(insertionSort(array));