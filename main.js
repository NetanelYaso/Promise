function printPromise() {
    return new Promise((resolve, reject) => {
        const nowDate = new Date();
        if (nowDate > 11) {
            resolve("good morning");
        }
        reject("good afternoon");
    })
}
function pressPromise() {
    printPromise()
        .then((data) => { my_h1.innerHTML = data })
        .catch((error) => { my_h1.innerHTML = error });
}

function calculteNumbers(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 % num2 == 0) {
            resolve("yes");
        }
        reject("no");
    })
}

function showTrueOrFalse() {
    calculteNumbers(4, 2)
        .then((data) => { my_p.innerHTML = data })
        .catch((error) => { my_p.innerHTML = error });
}

function isNumberInArray(number, myArray) {
    return new Promise((resolve, reject) => {
        for (let item of myArray) {
            if (item == number) {
                resolve("yes")
            }
        }
        reject("no")

    })
}

function pressBtn() {
    isNumberInArray(4, [2, 5, 4, 9, 8, 72])
        .then((data) => { my_h3.innerHTML = data })
        .catch((error) => { my_h3.innerHTML = error });
}

// function fetchFunc(){

// }



