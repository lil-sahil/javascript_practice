// repeatString
function repeatString (str, repeat) {
    let answer = '';
    for (let i = 0; i <= repeat; i++) {
        answer+=str;
        // answer = answer.concat(str);
    }

    return answer;
}

// console.log(repeatString('hello', 5));

// reverseString
function reverseString (str) {
    let reveredString = '';
    for (let i = str.length - 1; i>=0;  i --){
        reveredString += str[i];
    }

    return reveredString;
}

// console.log(reverseString('racecar is the same'));

// removeFromArray
function remmoveFromArray (arr, val) {
    let answer = [];
    arr.forEach((element) => {
        if (element !== val) {
            answer.push(element);
        }
    });
    return answer;
}

// console.log(remmoveFromArray([1,2,3,4,5,3,5,6,3], 3));

// sumAll
function sumAll (int_1, int_2) {
    let answer = 0;
    if (int_1 <= int_2) {
        
        for (let i = int_1; i<= int_2; i++ ) {
            answer += i;
        }
    }

    else {
        return "int_1 must be smaller than int_2";
    }
    return answer;
}

// console.log(sumAll(12,10));

function isLeapYear (year) {

    if ( (year % 100 === 0) && (year % 400 === 0) ) {
        return true;
    } 

    else if ( (year % 4 === 0) && (year % 100 === 0) ) {
        return false;
    }

    else if ( (year % 4) === 0 ) {
        return true;
    }

    else {
        return false;
    }
}


// console.log(isLeapYear(1985));


function add(...args){
    const answer = args.reduce((tally, arg) => tally+arg);
    return answer;
}

// console.log(add(1,2,3,4));

function subtract(...args){

    // Checks to see if the user entered a array as an argunment instead of numbers
    if (Array.isArray(args[0]) === true){
        args = args[0];
    }

    const answer = args.reduce((tally, arg) => tally-arg);
    return answer;
};


// console.log(subtract([-8,8,0,7]));

function multiply(...args){
    const answer = args.reduce( (tally, arg) => tally * arg);
    return answer;
}

// console.log(multiply(8,5));

function divide(...args){

    if (args.length <= 1){
        return 'Enter atleast 2 values';
    };

    let answer = 0
    for (let i = 0; i<args.length-1; i++){
        answer = args[i]/args[i+1];
    };
    return answer;
};

// console.log(divide(1,2));


function power(base,pow){
    return base**pow;
}

// console.log(power(2,3));

function factorial(number){
    let answer = 1;
    if ( (number === 0) || (number === 1) ){
        return 1;
    };

    for(let i = 2; i<=number; i++){
        answer *= i 
    };
    return answer;
}

// console.log(factorial(10));

<<<<<<< HEAD
function isPalindrome(str){
    str = str.split(' ').join('');
    str = str.replace(/[^\w]/g,"");
    str = str.toLowerCase();

    let backwardStr = '';

    for (let i = str.length -1; i > -1; i--){
        backwardStr += str[i];
    }

    return (str === backwardStr ? true : false);

}

// console.log(isPalindrome('Animal loots foliated detail of stool lamina.'));

function fibo(){
    return false;
}

=======
function fibo(quantity){

    quanity = parseInt(quantity);

    if (quantity<0){
        return 'Enter positive number.'
    }
    
    else if ( (quantity === 1) || (quantity === 2) ){
        return 1;
    }

    else if (quantity === 0){
        return 0;
    }
    
    let previous = 1;
    let answer = 0;
    let current = 1;

    for(let i = 3; i <= quantity; i++){
        answer = current + previous;
        previous = current;
        current = answer;
    }

    return answer;
}

// console.log(fibo('25'));


const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

function getTitles(objects){
    let arr = []
    objects.filter(object => arr.push(object.title));
    return arr;
}

// console.log(getTitles(books));


const people = [
    {
      name: "Carly",
      yearOfBirth: 1942, 
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 1964,  
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1913, 
    },
  ]


// people.map(person => console.log(person.yearOfDeath=2008));
function oldest(objects){
    let date = new Date();
    let currentYear = date.getFullYear();

    objects.map(person => (person.yearOfDeath === undefined) ? person.yearOfDeath = currentYear : person.yearOfDeath);
    let arr = objects.sort((a,b) => (a.yearOfDeath-a.yearOfBirth) > (b.yearOfDeath-b.yearOfBirth) ? -1 : 1 );

    return arr[0];
}

// console.table(oldest(people));
>>>>>>> c6d29e23ceb3c3172b6c23ac59f18fa48ccfed39
