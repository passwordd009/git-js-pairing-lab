//Code your solutions in this file

//problem 1
const fiveToOneHundred = () => {
    for(let i = 5; i <= 100; i++){
        console.log(i);
    }
}
console.log(fiveToOneHundred());

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
console.log(multiplesOfThree())