// twoSum
// let nums=[1,2,3,4,5,6];
// let target = 3;
// function twoSum (nums,target){
//    for (let i=0;i<nums.length;i++){
//     for (let j=i+1;j<nums.length;j++){
//         if(nums[i]+nums[j]==target){
//             return [i,j]
//         }
//     }
//    }


// }
// console.log(twoSum(nums,target))

// // binary search

// let arr = [2,4,6,8,10,15,18,20,22,24,26];
// let target = 8;


// function binarySearch (arr,target){

//     let leftIndex =0;
//     let rightIndex =arr.length-1;

//     while (leftIndex<=rightIndex) {
//         let middleIndex = Math.floor((leftIndex+rightIndex)/2);
//         if (arr[middleIndex]==target) {
//             return middleIndex;
            
//         }
//         if (target<arr[middleIndex]){
//             rightIndex=middleIndex-1;
//         }
//         else{
//             leftIndex=middleIndex+1
//         }
//     }
//     return-1

// }

// console.log(binarySearch(arr,target))

// // Linear Search

// let arr = [37,8,2,3,1,12,43,77,5,4,-2];
// let target =77;

// function linearSearch (arr,target) {

//     for (let i=0;i<arr.length;i++){
//         if(target==arr[i]){
//             return i
//         }
//     }
// return -1
// }
// console.log(linearSearch(arr,target))


// // bubble sort

// let arr  = [21993,123,123,4,4,43543,534,2,344,425,25,535,-2];

// function bubbleSort (arr){
         
//     for (let i=0;i<arr.length-1;i++){
//         for (let j=0;j<arr.length-1-i;j++){
//             if (arr[j]>arr[j+1]){
                
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                
//             }
//             }
//         }
    
//     return arr
// }

// console.log(bubbleSort(arr))

// // selection sort


// let arr =  [8,56,352,678786,86,6465,424,455,656,57,86,8];
// let n =arr.length;

// function selectionSort (arr,n){
    
//     for (let i=0;i<n-1;i++){

//         let min =i;
//         for (let j=i+1;j<n;j++){
//             if(arr[min]>arr[j]){
//                 min=j;
//             }
//         }
//         let temp = arr[i];
//         arr[i]=arr[min];
//         arr[min]=temp;
//     }

//     return arr

// }

// console.log(selectionSort(arr,n))


// // duplicate number delete

// let arr = [1,2,3,4,5,1,2,3,6,7,8,3,2,1];
// let b=[];
// for(let i=0;i<arr.length;i++){
//     if(b.indexOf(arr[i])==-1){
//         b.push(arr[i])
//     }
// }

// console.log(b)

// // find element and insertion

// let arr = [1,2,33,422,565];
// let target =333;

// function binarySearch (arr,target){

//     let left = 0;
//     let right = arr.length-1;

//     while (left<=right){
//         let middle = Math.floor((left+right)/2);
//         if(arr[middle]==target){
//             return middle
//         }
//         else if(target<arr[middle]){
//             right=middle-1
//         }
//         else{
//             left=middle+1
//         }
//     }
//   return left
// }
// console.log(binarySearch(arr,target))

// // array methods

// let arr = [2,3,42,1,3,23,3245,4646,23,12];

// console.log(arr.pop(3))
// console.log(arr);


// let arr = [2,3,42,1,3,23,3245,4646,23,12];
// console.log(arr);

// console.log(arr.splice(2,3,3,1,42))

// console.log(arr.splice(2,0,4))


// console.log(arr.slice(4,8))

// arr.reverse()
// console.log(arr);

// let str=arr.join();
// console.log(str)

// let arr2= str.split('number')
// console.log(arr2)




// arr.reverse()

// console.log(arr);

// arr.reverse()

// console.log(arr);

// let str1 = 'nithish';
// let str2 = 'kumer';
// let str3 = str1+str2;
// console.log(str3);

// console.log(str3.slice(-5,-2));
// str2.replace('kumar','king');
// console.log(str2);
// str1.toUpperCase();
// console.log(str1.toUpperCase());

// // map

// let arr = [2,4,6,8];
// let four = arr.map(val=> val/2);



// console.log(four);

// // filter

// let number =[1,2,3,4,5,6,7,8,9,10];

// let findTwodive = number.filter(x=>x>7);

// console.log(findTwodive);

// // Reduce

// let arr =[1,2,3,4,5,6,7,8,9,10,-5];
// let total = arr.reduce((tot,el)=>tot+el);
// console.log(total);

// // ForEach

// let name1 =['nithish','kumar','naan','thaan'];
// name1.forEach(print);

// function print(val){
//     console.log(val.toUpperCase());
// }

// /* javascript program to implement basic stack
// operations 
// */

// // var t = -1;
// // 	var MAX = 5;
// // 	var a = Array(MAX).fill(0); // Maximum size of Stack

// // 	function isEmpty() {
// // 		return (t < 0);
		
// // 	}

// // 	function push(x) {
// // 		if (t >= (MAX - 1)) {
// // 			document.write("Stack Overflow");
// // 			return false;
// // 		} else {
// // 		t+=1;
// // 			a[t] = x;
			
// // 			document.write(x + " pushed into stack<br/>");
// // 			return true;
// // 		}
// // 	}

// // 	function pop() {
// // 		if (t < 0) {
// // 			document.write("Stack Underflow");
// // 			return 0;
// // 		} else {
// // 			var x = a[t];
// // 			t-=1;
// // 			return x;
// // 		}
// // 	}

// // 	function peek() {
// // 		if (t < 0) {
// // 			document.write("Stack Underflow");
// // 			return 0;
// // 		} else {
// // 			var x = a[t];
// // 			return x;
// // 		}
// // 	}

// // 	function print() {
// // 		for (i = t; i > -1; i--) {
// // 			document.write(" " + a[i]);
// // 		}
// // 	}

// // 		push(10);
// // 		push(20);
// // 		push(30);
// //         push(10);
// // 		push(20);
// // 		push(30);
// //         push(10);
// // 		push(20);
// // 		push(30);
// //         push(100);
// // 		isEmpty()
// // 		document.write(pop() + " Popped from stack");
// // 		document.write("<br/>Top element is :" + peek());
// // 		document.write("<br/>Elements present in stack : ");
// // 		print();

// // This code is contributed by Rajput-Ji 

// // stack operation
// let t =-1 ;
// let MAX = 10;
// let a = Array(MAX).fill(0);

// function isEmpty (){
// 	return (t<0)
// }

// function push (x){

// 	if (t>=(MAX-1)){
// 		console.log('stack overflow')
// 	}
// 	else {
// 		t+=1;
// 		a[t]=x;
// 		console.log(x)
// 		return x
// 	}


// }

// function pop(){
// 	if (t<0){
// 		console.log('stack underflow')
// 	}
// 	else {
// 		var x = a[t];
// 		t-=1;
// 		return x
// 	}
// }

// function peek (){
// 	if (t<0){
// 		console.log('stack underflow')
// 	}
// 	else{
// 		var x = a[t];
// 		return x
// 	}
// }

// function print(){
// 	for (let i=t;i>-1;i--){
// 		console.log(a[i])
// 	}
// }

// push(100)
// push(200)
// push(100)
// push(200)
// push(100)
// push(200)
// push(100)
// push(200)
// push(100)
// push(200)
// push(100)
// push(200)
// pop()
// push(555)
// print()



// // Queue class
// // class Queue
// // {
// // 	// Array is used to implement a Queue
// // 	constructor()
// // 	{
// // 		this.items = [];
// // 	}
// // 	isEmpty()
// // 	{
// // 		// return true if the queue is empty.
// // 		return this.items.length == 0;
// // 	}
// // 	enqueue(element)
// // 	{ 
// // 		// adding element to the queue
// // 		this.items.push(element);
// // 		document.write(element + " enqueued to queue<br>");
// // 	}
// // 	dequeue()
// // 	{
// // 		// removing element from the queue
// // 		// returns underflow when called 
// // 		// on empty queue
// // 		if(this.isEmpty())
// // 			return "Underflow<br>";
// // 		return this.items.shift();
// // 	}
// // 	front()
// // 	{
// // 		// returns the Front element of 
// // 		// the queue without removing it.
// // 		if(this.isEmpty())
// // 			return "No elements in Queue<br>";
// // 		return this.items[0];
// // 	}
// // 	rear()
// // 	{
// // 		// returns the Rear element of 
// // 		// the queue without removing it.
// // 		if(this.isEmpty())
// // 			return "No elements in Queue<br>";
// // 		return this.items[this.items.length-1];
// // 	}
// // }

// // // creating object for queue class
// // var queue = new Queue();

// // // Adding elements to the queue
// // queue.enqueue(10);
// // queue.enqueue(20);
// // queue.enqueue(30);
// // queue.enqueue(40);

// // // queue contains [10, 20, 30, 40]
// // // removes 10
// // document.write(queue.dequeue() + " dequeued from queue<br>");

// // // queue contains [20, 30, 40]
// // // Front is now 20
// // document.write("Front item is " + queue.front() + "<br>");

// // // printing the rear element
// // // Rear is 40
// // document.write("Rear item is " + queue.rear() + "<br>");

// // // This code is contributed by Susobhan Akhuli

// // Queue


// class queue {


//     constructor (){
//         this.items=[]
//     }

//     isEmpty(){
        
//         return this.items.length==0;

//     }

//     enqueue(element){
//         this.items.push(element);
//         console.log(element);
        
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             console.log('queue is underflow');
//         }
//         else{
//             this.items.shift();
            
//         }
//     }

//     front(){
//         if(this.isEmpty()){
//             console.log('queue is underflow');
//         }
//         else{
//             return this.items[0];
//         }
//     }

//     rear(){
//         if (this.isEmpty()){
//             console.log('queue is underflow')
//         }
//         else{
//             return this.items[this.items.length-1];
//         }
//     }
//     print(){
//         for(let i=0;i<this.items.length;i++){
//             console.log(this.items[i])
//         }
//     }


// }
// var Queue = new queue();

// Queue.enqueue(100);
// Queue.enqueue(200);
// Queue.enqueue(340);
// Queue.enqueue(400);
// Queue.enqueue(500);

// // Queue.print();
// Queue.dequeue();
// Queue.print();

// // Linked list

// // Construct Single Node
// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// // Create/Get/Remove Nodes From Linked List
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   // Insert first node
//   insertFirst(data) {
//     this.head = new Node(data, this.head);
//     this.size++;
//   }

//   // Insert last node
//   insertLast(data) {
//     let node = new Node(data);
//     let current;

//     // If empty, make head
//     if (!this.head) {
//       this.head = node;
//     } else {
//       current = this.head;

//       while (current.next) {
//         current = current.next;
//       }

//       current.next = node;
//     }

//     this.size++;
//   }

 

//   // Clear list
//   clearList() {
//     this.head = null;
//     this.size = 0;
//   }

//   // Print list data
//   printListData() {
//     let current = this.head;

//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// const ll = new LinkedList();

// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
// ll.insertLast(400);

// // ll.clearList();


// ll.printListData();

// function maxChocolates(money) {
//     let chocolates = money; // Number of chocolates you can buy initially with the money
//     let wrappers = chocolates; // Number of wrappers initially equals the number of chocolates bought
//     while (wrappers >= 3) { // Keep exchanging wrappers for chocolates until you don't have enough wrappers
//         let exchangedChocolates = Math.floor(wrappers / 3); // Number of chocolates you can get by exchanging wrappers
//         chocolates += exchangedChocolates; // Add exchanged chocolates to the total count
//         wrappers = exchangedChocolates + (wrappers % 3); // Remaining wrappers after exchange
//     }
//     return chocolates;
// }

// // Example usage:
// const money = 15; // Amount of money you have
// const maxChocs = maxChocolates(money);
// console.log("Maximum chocolates you can eat:", maxChocs);
    
// function totalChoclate(money){
//     let chocolates=money;
//     let wrappers=money;
//     while(wrappers>=3){
//         let extraChoclate = Math.floor(wrappers/3);
//         chocolates+=extraChoclate;
//         wrappers=extraChoclate+(wrappers%3);
//     }
//     return chocolates
// }

// let maxChocs = totalChoclate(15);
// console.log(maxChocs);

// function maxSubarray (nums){

//   if (nums.length===0) return 0 ;

//   let max = nums[0];
//   let min = nums[0];
//   let result = nums[0];

//   for (let i=1;i<nums.length;i++){

//     let tempmax = Math.max(nums[i],max*nums[i]);
//     let tempmin =Math.min(nums[i],min*nums[i]);

//     max=tempmax;
//     min=tempmin;

//     result=Math.max(result,max)

//   }

//    return result
// }


// console.log(maxSubarray ([-2,0,-1]))
// let str = 'hello world';
// function reverseStr (str){
//     return str.split('').reverse().join('')
// }
// console.log(reverseStr(str));

// function reveseLoop(str) {
    
//     let reverse="";

//     for (let c of str){
//         reverse=c+reverse;
//     }


//     return reverse;
// }
// console.log(reveseLoop(str));;

// function reverseWords(str) {
//     // Split the string into an array of words
//         let wordsArray = str.split(" ");
        
//         // Reverse the array
//         wordsArray = wordsArray.reverse();
        
//         // Join the words back into a string
//         let reversedString = wordsArray.join(" ");
        
//         return reversedString;
// }
// console.log(reverseWords(str));

// function reverseWord(str2){

//     let reversed = str2.split('.');
//     reversed=reversed.reverse();
//     let change = reversed.join('.');
    
    
//  return change;

// }
// let str2  = "Nithish.kumar.very.inteligent"
// // console.log(reverseWord(str2));

// let s = " the sky is blue ";

// var reverseWords = function(s) {
//     let str = s.split(" ");
//      let output = "";
//      for (let i = str.length - 1; i >= 0; i--)
//          if (str[i]) output += (output ? " " : "") + str[i];
//      return output;
     
     
//  };
//  console.log(reverseWords(s));  
