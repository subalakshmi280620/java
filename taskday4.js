//using for loop
for (let i = 1; i <= 10; i++) {
    console.log("Number:", i);
}

for (let i = 2; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log("Even number:", i);
    }
}
//using while loop
let number=10;
while(number>0){
    console.log("numbers:",number );
    number--;
}
//using do-while loop
let i=0;
do{
    console.log("Hello World!");
    i++;
}while(i<5);

//using for...of loop
let vegetable=["tomato","potato","carrot"];
for(let veg of vegetable){
    console.log(veg);
}
//using for loop
let sum=0;
for(let i=1; i<=10; i++){
    sum +=i;
    console.log("The sum of numbers from 1 to 10:", sum);
}
//using break
let Number=[40,55,72,85,90];
for(let num of Number){
    if(num>50){
        console.log("first number greater 50:", num);
        break;
    }
}
//using continue
let nums=[2,3,5,6,8,9];
for(let num of nums){
    if(num%3!=0){
        console.log("Get not divisible by 3:", num);
        continue;
    }
}
//using for loop
const multiple=5;
for(let i=0; i<=5; i++){
    result =multiple*i;
  console.log("multiple values:",result);
}
//using for...of loop
let largenum=[50,70,80,90,200];
for(let num of largenum){
   if(num>largenum[3]){
      console.log("Largest number:", num);
   } 
}

