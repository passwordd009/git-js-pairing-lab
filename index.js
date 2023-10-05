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

const untilNum = (num) =>{
    for(let i = 0; i <= num; i++) {
        console.log(i);
    }
};
console.log(untilNum(7));


const  multiply = (num1, num2) => {
    return num1 * num2
};

console.log(multiply(2,4));
