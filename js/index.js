for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

const Kyrs = 27;
for (let dollars = 10; dollars <= 100; dollars += 10) {
    const uah = dollars * Kyrs;
    console.log(`${dollars} доларів = ${uah} гривень`);
}

const N = 100; 
for (let i = 1; i <= 100; i++) {
const square = i * i;
    if (square <= N) {
        console.log(i);
    }
}

const number = 15; 
let dz = true;
if (number <= 1) {
    dz = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        dz = false;
        break;
        }
    }
}
console.log(dz ? `${number} - просте число` : `${number} - не просте число`);

const numberlast = 29; 
let ouch = true;
while (numberlast > 1) {
    if (numberlast % 3 !== 0) {
        ouch = false;
    break;
    }
    numberlast %= 3;
}
console.log(ouch ? `${numberlast} можна отримати через зведення числа 3 у деякий ступінь` : `${numberlast} не можна отримати через зведення числа 3 у деякий ступінь`);