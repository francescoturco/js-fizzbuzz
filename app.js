console.log ('FizzBuzz Exercise')


for (let i = 0; i < 100; i++)  {
    const n = i + 1

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
    
}

