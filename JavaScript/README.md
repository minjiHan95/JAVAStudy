## JavaScript
[자바스크립트 비기너: 튼튼한 기본 만들기](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88)


### **alert, prompt, confirm을 이용한 상호작용**

브라우저는 사용자와 상호작용할 수 있는 세 가지 함수를 제공한다.

`alert`
: 메시지를 보여준다.

`prompt`
: 사용자에게 텍스트를 입력하라는 메시지를 띄워줌과 동시에, 입력 필드를 함께 제공한다. 확인을 누르면 `prompt` 함수는 사용자가 입력한 문자열을 반환하고, 취소 또는 `key:Esc`를 누르면 `null`을 반환한다.  

`confirm`
: 사용자가 확인 또는 취소 버튼을 누를 때까지 메시지가 창에 보여진다. 사용자가 확인 버튼을 누르면 `true`를, 취소 버튼이나 `key:Esc`를 누르면 `false`를 반환한다. 

위 함수들은 모두 모달 창을 띄워주는데, 모달 창이 떠 있는 동안은 스크립트의 실행이 일시 중단된다. 사용자가 창을 닫기 전까진 나머지 페이지와 상호 작용이 불가능하다.

### **null이나 undefined와 비교하기**

`null`이나 `undefined`를 다른 값과 비교할 땐 예상치 않은 일들이 발생합니다. 일단 몇 가지 규칙을 먼저 살펴본 후, 어떤 예상치 않은 일들이 일어나는지 구체적인 예시를 통해 아래에서 살펴보도록 하겠습니다.

일치 연산자 `===`를 사용하여 `null`과 `undefined`를 비교
: 두 값의 자료형이 다르기 때문에 일치 비교 시 거짓이 반환됩니다.

    ```js run
    alert( null === undefined ); // false
    ```

동등 연산자 `==`를 사용하여 `null`과 `undefined`를 비교
: 동등 연산자를 사용해 `null`과 `undefined`를 비교하면 특별한 규칙이 적용돼 `true`가 반환됩니다. 동등 연산자는 `null`과 `undefined`를 '각별한 커플'처럼 취급합니다. 두 값은 자기들끼리는 잘 어울리지만 다른 값들과는 잘 어울리지 못하죠.

    ```js run
    alert( null == undefined ); // true
    ```

산술 연산자나 기타 비교 연산자 `< > <= >=`를 사용하여 `null`과 `undefined`를 비교
: `null`과 `undefined`는 숫자형으로 변환됩니다. `null`은 `0`, `undefined`는 `NaN`으로 변합니다. 


