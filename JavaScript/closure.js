var a = 'A';
function outer() {
    console.log(a);
    function inner() {
        console.log(a);
        a = 'C';
    }
    inner();
    console.log(a);
}
outer();
console.log(a);
