//scheduling a call
//일정 시간이 지난 후에 원하는 함수를 예약 실행 할 수 있게 하는 것을 호출 스케줄링이라고 한다.
//호출 스케줄링을 구현하는 방법은 두 가지가 있다.
//1. setTimeout
//일정 시간이 지난 후에 함수를 실행하는 방법
//2. setInterval
//일정 시간 간격을 두고 함수를 실행하는 방법

// function sayHi() {
//     console.log('Hello~~~');
// }
// setTimeout(sayHi, 1000);

// function sayHi2(name, phrase) {
//     console.log(`${name}님 ${phrase}`);
// }
// setTimeout(sayHi2, 5000, 'minji', 'hihi');

//첫번째 인수가 문자열이면 자바스크립트는 이 문자열을 이용해 함수를 만든다.
//하지만 문자열을 사용하는 방법은 추천하지 않는다. 되도록이면 화살표 함수를 사용하도록 한다.

// setTimeout(console.log('hello'), 1000);

// //2초 간격으로 메세지를 보여준 후 5초 후에 정지
// let timerId = setInterval(()=>{
//     console.log("째깍째깍");
// }, 2000);
// setTimeout(() => {
//     clearInterval(timerId);
//     console.log("시계가 종료했습니다.");
// }, 5000);

// let timerId = setTimeout(function tick() {
//     console.log("째깍");
//     timerId = setTimeout(tick, 1000);
// }, 2000);