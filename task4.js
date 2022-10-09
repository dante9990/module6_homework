function printNum(start, end) {
    let current = start;
    let intervalId = setInterval(function () {
        console.log(current);
        if (current === end) {
            clearInterval(intervalId);
        } else {
            current++;
        }
    }, 1000)
}

printNum(5, 15)