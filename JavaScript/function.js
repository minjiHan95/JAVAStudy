
//ex
// alert("자바스크립트!");

//ex
// let admin;
// let name = "John";

// admin = name;
// alert(admin);

//ex
// alert(`역 따옴표로 변수와 표현식을 감쌀 수 있다. ex) 2+3 = ${2+3}`);
// alert(`ex) name = ${name}`);

//ex
// alert("[alert 함수] : 메시지를 보여주는 창입니다.")
// let value = prompt("[prompt 함수] : 값을 입력받는 함수입니다. \n 값을 입력해주세요", "1000");
// alert(`입력한 값은 ${value} 입니다.`);
// let isTrue = confirm("확인 혹은 거절을 선택하라");
// alert(`선택한 값은 ${isTrue} 입니다.`);

//ex
// let name = prompt("당신의 이름은 무엇인가요?", "한민지");
// alert(`당신의 이름은 ${name} 입니다.`);

//ex
// let a = prompt("첫번째 숫자: ", " ");
// let b = prompt("첫번째 숫자: ", " ");

//ex
// console.log(null); //null
// console.log(undefined); //undefined
// console.log(typeof null); //object
// console.log(typeof undefined); //undefined
// console.log(+null); //0
// console.log(+undefined); //NaN

// console.log(null == undefined);
// console.log(null === undefined);
// console.log(null == "0");
// console.log(null == +"0");
// console.log(+null == "0");
// console.log(+null === "0");

//ex
// let val = prompt("숫자를 입력하시오", " ");
// if(val>0) {
//     alert(1);
// } else if(val<0) {
//     alert(-1);
// } else{
//     alert(0);
// }

//ex
// let a = 1; b = 2;
// let result = (a + b < 4) ? '미만' : '이상';
// console.log(result);

//ex

// function showMsg(text) {
//     console.log(text || '빈 문자열');
//     alert(text ?? "빈 문자열");
// }
// showMsg();

//ex. Call back
// ask("call back EX: '동의하시나요?' ", showOK, showCancel);
// function showOK() {
//     alert("OK")
// }
// function showCancel() {
//     alert("NO")
// }

// function ask(msg, yes, no) {
//     if (confirm(msg)) yes();
//     else no();
// }

//let fun;
// console.log(0);
// fun();
// console.log("2");
// function fun(){
//     console.log("1");
// }

// let sum = function (a, b) {
//     return a + b;
// }

// let sum = (a, b) => a + b;

// let double = n => n * 2; //() 생략 가능

//화살표 함수
// let age = prompt("나이를 입력하세요", "26");
// let fun = (age > 15) ?
//     () => alert("16세 이상의 사람입니다.") :
//     () => alert("15세 이하의 사람입니다.");
// fun();

// let fruits = ["A", "B", "C", "D"];

// console.log(fruits.pop()); //D 빠져나옴
// console.log(fruits); //A, B, C
// fruits.push("11"); //A, B, C, 11
// console.log(fruits.shift()); //A 빠져나옴
// fruits.unshift("22"); 
// console.log(fruits); //22, B, C, 11
// fruits.push("33"); ///22, B, C, 11, D

// //push와 unshift는 요소 여러 개를 한 번에 더해줄 수 있다.
// /*
// 배열의 내부 동작 원리
// 배열은 특별한 종류의 객체이다. 배열 어레이의 요소를 대괄호를 사용해 접근하는 방식은 객체 문법에서 왔다. 다만 배열은 키가 숫자라는 점에서 다르다.
// 이렇게 배열은 자바스크립트 일곱가지 원시 자료형에 해당하지 않고 원시 자료형이 아닌 객ㅊ형에 속하기 때문에 객체처럼 동작한다.
// 예를 하나 살펴보자면, 배열은 객체와 마찬가지로 참조를 통해 복사된다.
// */

// //배열에 적용할 수 있는 순회 문법 1.
// //for ..of
// let minji = ["a", "b", "c", "d"];
// for(let m of minji) {
//     console.log(m);
// }
// //for..in (**주의)
// //for..in반복문은 모든 프로퍼티를 대상으로 순회한다. 따하서 키가 숫자가 아닌 프로퍼티도 순회 대상에 포함된다.
// //=>필요없는 프로프터들이 문제를 일으킬 가능성이 샌긴다.
// //for..in반복문이 배열이 아니라 객체와 함께 사용할 때 최적화 된어 있어서 배열에 사용하면 객체에 사용하는 것 대비 느리다.
// //====>배열에 되도록이면 for..in반복문은 사용하지 않는 것으로 한다.!!!
// let alpha = ["A", "B", "C", "D", "E"];
// for(let key in alpha) {
//     console.log(alpha[key]); //index 값에 접근
// }

// //배열과 관련된 연산()과제
// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// let middle = Math.floor(styles.length / 2);
// styles[middle] = "Classics";
// console.log(styles.shift());
// styles.unshift("Rap", "Reggae");
// console.log(styles);

// function sumInput() {
//     let arr = [];
//     let sum = 0;
//     while (true) {
//         let value = prompt("값을 입력하세요", 0);
//         if (value == null || value == "" || !isFinite(value)) {
//             break;
//         }
//         arr.push(value);
//         sum += value;
//     }
//     return sum;
// }
// let result = sumInput();
// alert(`값은 ${result}입니다.`);

// let arr = ["I", "study", "Java", "right", "now"];
// arr.splice(1, 3);
// arr.splice(0, 3, "Lets", "dance");
// let removed = arr.splice(0, 2);
// let arr = ["I", "study", "Java"];
// arr.splice(2, 0, "haha", "happy");
// console.log(arr);


//음수 인덱스
//마이너스 부호 앞의 숫자는 배열 끝에서부터 센 요서 위치를 나타낸다. 

// forEach 로 반복작업을 할 수 있다.
// 주어진 함수를 배열 요소 각각에 대해 실행할 수 있게 해준다.
// 아래의 코드는 요소 모두를 얼럿창을 통해 출력해주는 코드이다
// +인덱스 정보까지 더해서 출력해주는 정교한 코드이다.
// ["I", "study", "Java", "right", "now"].forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`);
// });

//배열 탐색하기
/*
배열 내에서 무언가를 찾고 싶을 때 쓰는 메서드에 대하여 알아보자.
*/

//배열 과제 1
// function camelize(str) {
//     let arr = str.split("-").map(
//         (word, index) =>
//             index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     ).join("");
//     return arr;
// }
// console.log(camelize("mama-koko-jiji"));

// function filterRage(arr, a, b) {
//     let result = arr.filter(item =>
//         (item >= a && item <= b)
//     );
//     console.log(result);

// }

// filterRangeInPlace([5, 3, 8, 1], 1, 4);

// //배열 arr의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수
// function filterRangeInPlace(arr, a, b) {
//     for (let index in arr) {
//         if ((arr[index] < a || arr[index] > b)) {
//             console.log(arr[index]);
//             arr.splice(index, 1);
//         }
//     }
//     console.log(arr);
// }


// //내림차순으로 정렬하기
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b)=>b-a);
// console.log(arr);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// console.log(users);

// let name = users.map(item => item.name);
// console.log(name);

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map(item =>
//     //중괄호 {를 만나면 자바스크립트는 이를 객체의 시작이라 인식하지 않고 함수 본문이 시작되는 것이라 인식합니다. 소괄호를 사용하면 이를 피할 수 있습니다.
//     ({
//         fullName: item.name + " " + item.surname,
//         id: item.id
//     }));
// console.log(usersMapped);

// 나이를 기준으로 객체 정렬하기
// 중요도: 5
// 프로퍼티 age가 있는 객체가 담긴 배열이 있습니다. 이 배열을 age를 기준으로 정렬해주는 함수 sortByAge(users)를 만들어보세요.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age);
}
console.log(sortByAge(arr));
