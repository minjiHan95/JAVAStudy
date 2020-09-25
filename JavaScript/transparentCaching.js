/*
lexical environment : 사전적인 환경

클로저는 함수와, 함수가 선언된 어취적 환경의 조합이다.

lexical: 선언 당시의 환경에 대한 정보를 담는 객체(구성 환경)

클로저란,
함수 내부에서 생성한 "데이터"와 그 "유효범위"로 인해 발생하는 특수한 "현상/상태"를 의미한다.

외부에 정보를 노출할 수 있는 수단은 "return"을 이용하는 것이다.

최초 선언시의 정보를 유지한다 -> 클로저의 핵심
*/

// //접근권한 제어
// function a() {
//     var _x = 1;
//     return {
//         get x() {
//             return _x;
//         },
//         set x(v) {
//             _x = v;
//         }
//     }
// }

function Person(name, age) {
    this.name = name;
    this.age = age;
}
let minji = new Person('minji', 26);

let minjiClone1 = new minji.__proto__.constructor("minji clone1", 10);
