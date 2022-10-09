function sumArg(numArg) {
    return function (num) {
        num = numArg;
        let sum = num + num;
        console.log(`Сумма чисел: ${sum}`)
    }
}

const resultFunc = sumArg(5);

resultFunc();