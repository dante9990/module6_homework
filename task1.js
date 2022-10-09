function getCountNumbers() {
    const arr = [0, null, NaN, 0, 1, 2, 4, "str"]

    let even = 0,
        odd = 0,
        zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                zero++;
            } else if (arr[i] % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
    }

    console.log(`счетчик нулей: ${zero} \n счетчик четных: ${even} \n счетчик нечетных: ${odd}`);
}

getCountNumbers();