function isPrimeNumber(num) {
    if (num <= 1) {
        return console.log('Число должно быть больше 1');
    } else if (num > 1000) {
        return console.log('Данные не верны');
    } else {
        for (let i = 2; i < num; i++) { 
            if(num % i === 0) {
                return console.log('Не простое число');
            }
        }
        return console.log('Простое число');
    }
}

isPrimeNumber(1);