//Code your solutions in this file

//problem 1
const fiveToOneHundred = () => {
    for(let i = 5; i <= 100; i++){
        console.log(i);
    }
}
// console.log(fiveToOneHundred());

//problem 2
const multiplesOfThree =() => {
    for (let i = 1 ; i <=100; i++) {
        x = i*3; 
        console.log(x);
        if (x===99) {
            i=100; 
        }
    } 
}
// console.log(multiplesOfThree())

//problem 3

const multiplesOfThreeOrFive = () => {
    for(let i = 0; i <= 100; i++){
        if(i % 3 === 0 || i % 5 === 0){
            console.log(i)
        }
    }
}

// console.log(multiplesOfThreeOrFive());

//problem 4
const untilNum = (num) =>{
    for(let i = 0; i <= num; i++) {
        console.log(i);
    }
};
// console.log(untilNum(7));

// problem 5
const  multiply = (num1, num2) => {
    return num1 * num2
};

// console.log(multiply(2,4));

//problem 6
const add = (num1, num2) => {
    if (num1 !== num2) {
        return num1+num2
} else {
     x= num1+num2;
    return x*3 ;
}
}

// console.log(add(2, 4));
// console.log(add(5, 5));


// console.log(add(2, 4));
// console.log(add(5, 5));
//problem 7
const isNegative = (num) => {
    if( num < 0){
        return true
    } else {
        return false 
    }
}

// console.log(isNegative(Math.PI));

// Problem 8 
const triangleArea = (num1, num2) => {
if (num1 >=1 && num2>=1) {
    x = num1*num2;
    return x / 2; 
}
}
// console.log(triangleArea(5,7))
// console.log(triangleArea(6,8))

//Problem 9 

const betweenTwentyAndFourty = (num) => {
    if(num > 20 && num < 40){
      return true
    }else {
      return false
    }
  }
  
  console.log(betweenTwentyAndFourty(4));
  console.log(betweenTwentyAndFourty(21));
  console.log(betweenTwentyAndFourty(99));
  console.log(betweenTwentyAndFourty(101));