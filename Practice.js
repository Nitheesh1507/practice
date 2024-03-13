// twoSum
let nums=[1,2,3,4,5,6];
let target = 3;
function twoSum (nums,target){
   for (let i=0;i<nums.length;i++){
    for (let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]==target){
            return [i,j]
        }
    }
   }


}
console.log(twoSum(nums,target))

// binary search

let arr = [2,4,6,8,10,15,18,20,22,24,26];
let target = 8;


function binarySearch (arr,target){

    let leftIndex =0;
    let rightIndex =arr.length-1;

    while (leftIndex<=rightIndex) {
        let middleIndex = Math.floor((leftIndex+rightIndex)/2);
        if (arr[middleIndex]==target) {
            return middleIndex;
            
        }
        if (target<arr[middleIndex]){
            rightIndex=middleIndex-1;
        }
        else{
            leftIndex=middleIndex+1
        }
    }
    return-1

}

console.log(binarySearch(arr,target))

// Linear Search

let arr = [37,8,2,3,1,12,43,77,5,4,-2];
let target =77;

function linearSearch (arr,target) {

    for (let i=0;i<arr.length;i++){
        if(target==arr[i]){
            return i
        }
    }
return -1
}
console.log(linearSearch(arr,target))


// bubble sort

let arr  = [21993,123,123,4,4,43543,534,2,344,425,25,535,-2];

function bubbleSort (arr){
         
    for (let i=0;i<arr.length-1;i++){
        for (let j=0;j<arr.length-1-i;j++){
            if (arr[j]>arr[j+1]){
                
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                
            }
            }
        }
    
    return arr
}

console.log(bubbleSort(arr))

// selection sort


let arr =  [8,56,352,678786,86,6465,424,455,656,57,86,8];
let n =arr.length;

function selectionSort (arr,n){
    
    for (let i=0;i<n-1;i++){

        let min =i;
        for (let j=i+1;j<n;j++){
            if(arr[min]>arr[j]){
                min=j;
            }
        }
        let temp = arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
    }

    return arr

}

console.log(selectionSort(arr,n))


// duplicate number delete

let arr = [1,2,3,4,5,1,2,3,6,7,8,3,2,1];
let b=[];
for(let i=0;i<arr.length;i++){
    if(b.indexOf(arr[i])==-1){
        b.push(arr[i])
    }
}

console.log(b)

// find element and insertion

let arr = [1,2,33,422,565];
let target =333;

function binarySearch (arr,target){

    let left = 0;
    let right = arr.length-1;

    while (left<=right){
        let middle = Math.floor((left+right)/2);
        if(arr[middle]==target){
            return middle
        }
        else if(target<arr[middle]){
            right=middle-1
        }
        else{
            left=middle+1
        }
    }
  return left
}
console.log(binarySearch(arr,target))

// array methods

let arr = [2,3,42,1,3,23,3245,4646,23,12];

console.log(arr.pop(3))
console.log(arr);


let arr = [2,3,42,1,3,23,3245,4646,23,12];
console.log(arr);

console.log(arr.splice(2,3,3,1,42))

console.log(arr.splice(2,0,4))


console.log(arr.slice(4,8))

arr.reverse()
console.log(arr);

let str=arr.join();
console.log(str)

let arr2= str.split('number')
console.log(arr2)




arr.reverse()

console.log(arr);

arr.reverse()

console.log(arr);

let str1 = 'nithish';
let str2 = 'kumer';
let str3 = str1+str2;
console.log(str3);

console.log(str3.slice(-5,-2));
str2.replace('kumar','king');
console.log(str2);
str1.toUpperCase();
console.log(str1.toUpperCase());

// map

let arr = [2,4,6,8];
let four = arr.map(val=> val/2);



console.log(four);

// filter

let number =[1,2,3,4,5,6,7,8,9,10];

let findTwodive = number.filter(x=>x>7);

console.log(findTwodive);

// Reduce

let arr =[1,2,3,4,5,6,7,8,9,10,-5];
let total = arr.reduce((tot,el)=>tot+el);
console.log(total);

// ForEach

let name1 =['nithish','kumar','naan','thaan'];
name1.forEach(print);

function print(val){
    console.log(val.toUpperCase());
}

// stack operation
let t =-1 ;
let MAX = 10;
let a = Array(MAX).fill(0);

function isEmpty (){
	return (t<0)
}

function push (x){

	if (t>=(MAX-1)){
		console.log('stack overflow')
	}
	else {
		t+=1;
		a[t]=x;
		console.log(x)
		return x
	}


}

function pop(){
	if (t<0){
		console.log('stack underflow')
	}
	else {
		var x = a[t];
		t-=1;
		return x
	}
}

function peek (){
	if (t<0){
		console.log('stack underflow')
	}
	else{
		var x = a[t];
		return x
	}
}

function print(){
	for (let i=t;i>-1;i--){
		console.log(a[i])
	}
}

push(100)
push(200)
push(100)
push(200)
push(100)
push(200)
push(100)
push(200)
push(100)
push(200)
push(100)
push(200)
pop()
push(555)
print()




// Queue


class queue {


    constructor (){
        this.items=[]
    }

    isEmpty(){
        
        return this.items.length==0;

    }

    enqueue(element){
        this.items.push(element);
        console.log(element);
        
    }

    dequeue(){
        if(this.isEmpty()){
            console.log('queue is underflow');
        }
        else{
            this.items.shift();
            
        }
    }

    front(){
        if(this.isEmpty()){
            console.log('queue is underflow');
        }
        else{
            return this.items[0];
        }
    }

    rear(){
        if (this.isEmpty()){
            console.log('queue is underflow')
        }
        else{
            return this.items[this.items.length-1];
        }
    }
    print(){
        for(let i=0;i<this.items.length;i++){
            console.log(this.items[i])
        }
    }


}
var Queue = new queue();

Queue.enqueue(100);
Queue.enqueue(200);
Queue.enqueue(340);
Queue.enqueue(400);
Queue.enqueue(500);

// Queue.print();
Queue.dequeue();
Queue.print();

// Linked list

// Construct Single Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Create/Get/Remove Nodes From Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

 

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);

// ll.clearList();


ll.printListData();


  





 












