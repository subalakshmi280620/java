function greet(){
    console.log("Hello,World!");
}
greet();
 //cube
function cube(number){
    return number*number*number;
    
}
let result= cube(5);
console.log("cube:",result);
//factorial number
function factorial(n){
    if(n<0){
        return "factorial is not defined for negative Numbers.";
}
if(n===0 ||n===1){
    return 1;
}
let result=1;
for(let i=2; i<=n; i++){
    result *=i;
}
return result;
}
console.log(factorial(4));
console.log(factorial(-1));

//find even or odd
function evenorodd(number){
    if(number%2==0){
       console.log("number is even")
    }else{
      console.log("number is odd")
    }
}
evenorodd(20)

//sum 2 numbers
let sum=function(a,b){
    return a+b;
};
console.log(sum(10,17));
//find lergest of three numbers
function largestofthreenumbers(a,b,c){
    if(a>=b && a>=c){
        return a;
    }else if(b>=a&&b>=c){
        return b;
    }else{
        return c;
    }
}
const largestnumber = largestofthreenumbers(8,9,4);
console.log(largestnumber);
//calculate celsius
function celsiustofahrenheit(celsius){
    const fahrenheit = (celsius*9/5)+32;
    return fahrenheit;
}
const tempcelsius=25;
const tempfahrenheit=celsiustofahrenheit(tempcelsius);
console.log(tempfahrenheit)
//calculate simpleinterest
function calculatesimpleinterest(principal,rate,time){
    const simpleinterest=(principal*rate*time)/100;
    return simpleinterest;
}

const interest=calculatesimpleinterest(1000,5,2)
console.log(interest);
//reverse array
function reversearray(arr){
    let left=0;
    let right=arr.length-1;
    while(left<right){
        let temp=arr[left];
        arr[left]=arr[right];
        arr[right]=temp;
        left++;
        right--;
    }
    return arr;
}
let colors=["red","green","blue","black","white"];
let reversedcolors=reversearray(colors);
console.log(reversedcolors);
//callback function
function processnumbers(arr,callback){
    for(let num of arr){
        callback(num);
    }
}
processnumbers([1,2,3],(num)=>{
    console.log(num*2);
})
//count vowels
function countvowels(str){
    const vowels = "aeiouAEIOU";
    let count=0;
    for(const char of str){
     if(vowels.includes(char)){
        count++;
     }
    }
    return count;
}
console.log(countvowels("hello"));
console.log(countvowels("javascript"));