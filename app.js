const output = document.querySelector('.output');

const button0 = document.querySelector('.button-0');
const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');
const button3 = document.querySelector('.button-3');
const button4 = document.querySelector('.button-4');
const button5 = document.querySelector('.button-5');
const button6 = document.querySelector('.button-6');
const button7 = document.querySelector('.button-7');
const button8 = document.querySelector('.button-8');
const button9 = document.querySelector('.button-9');

const buttonPlus = document.querySelector('.button-plus');
const buttonMinus = document.querySelector('.button-minus');
const buttonMultiply = document.querySelector('.button-multiply');
const buttonShare = document.querySelector('.button-share');
const buttonEqually = document.querySelector('.button-equally');
const buttonС = document.querySelector('.button-C');
const backspace = document.querySelector('.button-backspace');


button0.addEventListener('click', () => {
    output.innerHTML += '0'
})

button1.addEventListener('click', () => {
    output.innerHTML += '1'
})

button2.addEventListener('click', () => {
    output.innerHTML += '2'
})

button3.addEventListener('click', () => {
    output.innerHTML += '3'
})

button4.addEventListener('click', () => {
    output.innerHTML += '4'
})

button5.addEventListener('click', () => {
    output.innerHTML += '5'
})

button6.addEventListener('click', () => {
    output.innerHTML += '6'
})

button7.addEventListener('click', () => {
    output.innerHTML += '7'
})

button8.addEventListener('click', () => {
    output.innerHTML += '8'
})

button9.addEventListener('click', () => {
    output.innerHTML += '9'
})

buttonPlus.addEventListener('click', () => {
    output.innerHTML += '+'
})

buttonMinus.addEventListener('click', () => {
    output.innerHTML += '-'
})

buttonMultiply.addEventListener('click', () => {
    output.innerHTML += '*'
})

buttonShare.addEventListener('click', () => {
    output.innerHTML += '/'
})

buttonEqually.addEventListener('click', () => {
    let buferArr = output.innerHTML.match(/[+-\/*]+|[0-9]+/g)
    console.log(buferArr)

    let buferArr1 = []
    let result;
    for (let i = 0; i < buferArr.length; i++) {
        if (buferArr[i] === '*') {
            buferArr1.push(buferArr[i - 1] * buferArr[i + 1]);
            buferArr1.splice(buferArr1.length - 2, 1)
            i++
        } else if (buferArr[i] === '/') {
            buferArr1.push(buferArr[i - 1] / buferArr[i + 1]);
            buferArr1.splice(buferArr1.length - 2, 1)
            i++
        } else {
            buferArr1.push(buferArr[i])
        }
    }
    console.log(buferArr1)

    if (buferArr1.length === 1 && buferArr1[0] !== Infinity) {
        output.innerHTML = buferArr1[0].toFixed(4)
    } else if (buferArr1[0] === Infinity) {
        output.innerHTML = 'Делить на ноль нельзя1'
        output.style.fontSize = '38px'
    } else {
        if (buferArr1[1] === '+') {
            result = +buferArr1[0] + +buferArr1[2]
            buferArr1.splice(0, 3)
        } else if (buferArr1[1] === '-') {
            result = +buferArr1[0] - +buferArr1[2]
            buferArr1.splice(0, 3)
        }

        for (let i = 0; i < buferArr1.length; i++) {
            if (buferArr1[i] === '+') {
                result += +buferArr1[i + 1]
            } else if (buferArr1[i] === '-') {
                result -= +buferArr1[i + 1]
            }
            i + 2
        }

        console.log(result)
        console.log(buferArr1)
        if (result === -Infinity || result === Infinity) {
            output.innerHTML = 'Делить на ноль нельзя';
            output.style.fontSize = '38px'
        } else {
            output.innerHTML = result.toFixed(4)
        }


    }
})

buttonС.addEventListener('click', () => {
    output.innerHTML = '';
    output.style.fontSize = '54px'
})

backspace.addEventListener('click', () => {
    output.innerHTML = output.innerHTML.slice(0, -1);
})