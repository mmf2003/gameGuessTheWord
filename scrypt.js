let secret = 'HaHaHa';
secret = secret.toLowerCase();
console.log(secret);
let check = secret.split('').fill('_'); 
let alph = 'abcdefghijklmnopqrstuvwxyz';
console.log(check);

while (check.join('') != secret) {
    alert(`Game status is ${check.join(' ')}`);
    let attempt = prompt('Please enter your letter, or cancel to end', 'a');
    if (attempt === null) {
        alert('You cancelled this game!');
        break;
    }
    else if (attempt.length != 1 || !(alph.includes(attempt))) {
        alert('Incorrect enter, please enter a letter!')
    }
    else {
        if (secret.toLowerCase().includes(attempt)) alert('This is a good letter!');
        else alert('This is a bad letter!');
        for (let i = 0; i < check.length; i++) {
            if (attempt == secret[i]) check[i] = attempt;
        }
    }
}
alert(`You won!!! My word was ${check.join('')}`);



