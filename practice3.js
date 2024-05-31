// Sorting
// BubbleSort

// let arr = [6,5,4,3,2,1,-1];

// function bubbleSort(arr){

//     for(let i=0;i<arr.length-1;i++){
//         for(let j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [[arr[j]],[arr[j+1]]]=[[arr[j+1]],[arr[j]]]
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort(arr));

// the Average and worst case complexity O(n^2);
// the best case complexity with already sorted array O(n)

// selection sort

// let arr = [2,23,42,12,31,313,343,234,1,3131,334,131,31233323,43323,3,123,-9];

// function selectionSort(arr){

//     for(let i=0;i<arr.length-1;i++){
//         let min = i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[min]>arr[j]){
//                 min=j
//             }
//         }
//         let temp = arr[min];
//         arr[min]=arr[i];
//         arr[i]=temp;
//     }
//     return arr
// }

// console.log(selectionSort(arr));

// // the time complexity of selectionSort O(n^2) best worst Avarage

// mergeSort

// let arr = [9,8,7,6,5,5,4,3,2,1];

// function mergeSort(arr){

//     if(arr.length<2){
//         return arr
//     }

//     let mid = Math.floor(arr.length/2);

//     let leftArr = arr.slice(0,mid);
//     let rightArr = arr.slice(mid);

//     return mergedArr(mergeSort(leftArr),mergeSort(rightArr))
// }

// function mergedArr(leftarr,rigtharr){

//     let sortedArr = [];

//     while(leftarr.length && rigtharr.length){

//         if(leftarr[0]<=rigtharr[0]){
//             sortedArr.push(leftarr.shift())
//         }
//         else{
//             sortedArr.push(rigtharr.shift())
//         }
//     }

//     return [...sortedArr,...leftarr,...rigtharr]
// }

// console.log(mergeSort(arr));

// best worst avarage O(nlogn)

// QuickSort

// let arr = [32,123,45,34546,657,-1,7,68,4234,5345,645,64452,432,34,5435];

// function quickSort (arr){

//     if(arr.length<2){
//         return arr
//     }

//     let pivot = arr[arr.length-1];

//     let leftArr = [];
//     let rightArr = [];

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] <  pivot){
//             leftArr.push(arr[i]);
//         }
//         else{
//             rightArr.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]

// }

// console.log(quickSort (arr));

// // best avarage O(n log n)
// //  worst case O(n^2)

// Binary Search Algorithm

// let arr = [1,2,3,4];
// let target =2;


// function binarySearch(arr,target){

//    let left = 0;
//    let right =arr.length-1;
//    while(left<=right){
//     let mid = Math.floor((left+right)/2);
//     if(arr[mid]==target){
//         return mid
//     }
//     else if (target<arr[mid]){
//         right=mid-1;
//     }
//     else{
//         left=mid+1   
//     }

//    }
// return -1
// }

// console.log(binarySearch(arr,target));

// // time O(n log n)

// let arr = [10,5,7,4,6];

// function replaceMax(arr){
 
//     for(let i=0;i<=arr.length-1;i++){
//        let temp = -1;
//         for(let j=i+1;j<arr.length;j++){
//          temp = Math.max(arr[j],temp)
//         }

//         arr[i]=temp;

       
//     }
//     return arr
// }

// console.log(replaceMax(arr));


let list1 = [1,2,4];
let list2 = [1,3,4];

function newSorted(list1,list2){

    let sorted = [...list1,...list2];

    return sorted.sort((a,b)=>a-b);
}

console.log(newSorted(list1,list2));