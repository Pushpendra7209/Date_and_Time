//   //1.  way to print in javascript

//   console.log("hello world");
//   alert("hello world");
//   document.write("this is document write")

//   // 2. javascript console API
//   console.warn("this is warning");
//   console.error("this is error");

//   // 3. javascript variable
//   //what are variables ? -containers to store data values

//   var number1 = 34; 
//   var number2 = 56;
//   console.log(number1 + number2);

//  4. number
var num1 = 34;
var num2 = 35;

// 5. string 
var str1 = "this is a string";
var str2 = " this is also a string";

// 6. boolean
var a=true;
var b = false;

// 7. undefined
var und = undefined;

//  8. null
var n  = null;


//  9. reference Array
var arr= [1,2,3,4,5,6,7];

//  10. object 
var marks= {
    rahul: 34,
    ravish:90,
    amit:74
}


// 11. Aritmetic operatr
var a = 100;
var b = 10; 

// 12. assignment
// 13. comparison
// 14. logical
// console.log(true && true)
// console.log(true && false)
// console.log(false && false)
// console.log(false && true)


// console.log(true || true)
// console.log(true || false)
// console.log(false || false)
// console.log(false || true)

// 15. function
function avg(a,b){
    return a+b;
}

// 16. if else

var age =30;
// if(age > 18){
//     console.log("you are eligible for vote");
// }
// else {
//     console.log("you are not eligible for vote");
// }

// 17. for loop
var arr1 = [1,2,3,4,5,6]
// arr1.forEach(function(i){
//     console.log(i)
// })

arr1.unshift("hello");
arr1.pop()
arr1.push(100)
arr.sort()
// console.log(arr1);

// 18.   string method in javascript
 var str = "my name is pushpendra my kumar";
// console.log(str.length)
// console.log(str.indexOf("pushpendra"));
// console.log(str.lastIndexOf("my"));
// console.log(str.slice(1,20));
// console.log(str.replace("pushpendra","ravish"));


//DOM manipulation
// let ele = document.getElementById('click');
// console.log(ele);

// let eleClass = document.getElementsByClassName('container');
// console.log(eleClass)
// eleClass[0].style.background="yellow";
//eleClass[0].classList.add("bg-primary");

tn=document.getElementsByTagName("button");
// console.log(tn)

// createdElement = document.createElement('p');
// createdElement.innerText = "this is paragraph";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// createdElement2.innerText=" this is bold text";
// tn[0].replaceChild(createdElement2, createdElement);

// let sel = document.querySelectorAll(".container");
// console.log(sel)

// function clicked(){
//     console.log("clicked me")
// }





      // event in javascript

      
// firstcontainer.addEventListener('click', function(){
//     console.log("clicked on container")
// })

// firstcontainer.addEventListener('mouseover', function(){
//     console.log("mouse on container")
// })

// firstcontainer.addEventListener('mouseout', function(){
//     console.log("mouse out container")
// })

// firstcontainer.addEventListener('mousedown',function(){
//     console.log("mouse down on container");
// })



// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstcontainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("mouse up on container")
// })

// firstcontainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML = " <b> this is bold </b>"
//     console.log("mouse down");
// })







//   Arrow function


// function summ(a,b){
//     return a+b;
// }

// summ = (a,b)=>{
//    console.log("i am your log")
// }

// setTimeout(summ,5000);
// clr = setInterval(summ,3000);



//localStorage
// localStorage.setItem('name','Pushpendra')
// localStorage.getItem('name')


//json

obj ={name: "Pushpendra", length : 1}
jso = JSON.stringify(obj)
