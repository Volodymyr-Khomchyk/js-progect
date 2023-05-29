// function addFiveToNumber(number){
//     let result = number + 5;
//     console.log(result);
// }

// addFiveToNumber(15);

//--------------------------------

// const greet = function(name){
//     console.log('Привіт, ' + name);
// }

// greet('John');


//--------------------------------

// const greetArrow = (name) => {
//     console.log('Привіт, ' + name);
// }

// greetArrow('Mike');

let num1 = Number(prompt('Введіть перше число'));
let num2 = Number(prompt('Введіть перше число'));

function addTwoNumbers(arg1, arg2){
    const result = arg1 + arg2;
    return result;
}

let result = addTwoNumbers(num1, num2);
console.log(result);