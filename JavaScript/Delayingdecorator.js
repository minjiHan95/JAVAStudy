// Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.

// function f(x) {
//     alert(x);
// }

// // create wrappers
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // shows "test" after 1000ms
// f1500("test"); // shows "test" after 1500ms


function delay(f, ms) {

    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };

}

let f1000 = delay(alert, 1000);

f1000("test"); // shows "test" after 1000ms