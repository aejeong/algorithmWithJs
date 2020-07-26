//자바스크립트 전역 선언
// test = 'sss';
// console.log(test) // "sss" 출력이지만 var나 let같은 키워드 없이 선언하는 것은 안 좋은 사용법

//var를 사용해 선언하기 
// function scope1(){
//     var top = "top";
//     bottom = "bottom";
//     console.log(bottom);

//     var bottom; // 변수를 어디에서 선언하든 변수 선언이 함수의 맨 앞으로 이동하는데 이를 변수 호이스팅이라고도 함.
// }

// scope1(); // "bottom" 출력

//위와 동일하다--------------------//
// function scope1(){
//     var top = "top";
//     var bottom; 
//     bottom = "bottom";
//     console.log(bottom);
// }
// scope1(); // "bottom" 출력


//------------------//

// function scope2(print){
//     if(print){
//         var insideIf="12";
//     }
//     console.log(insideIf);
// }
// scope2(true); // 12 출력

//위와 동일한 코드------------------//

// function scope2(print){
//     var insideIf;

//     if(print){
//         insideIf="12";
//     }
//     console.log(insideIf);
// }
// scope2(true); //12 출력

//------------------------//

// var a =1;
// function four(){
//     if(true){
//         var a=4;
//     }

//     console.log(a); //a변수가 four함수 범위 내에서 재선언됬기때문에 전역변수 값인 1이 아닌 4가 출력됨 
// }

//let을 활용한 선언------------------------//
// function scope3(print){
//     if(print){
//         let insideIf = '12';
//     }
//     console.log(insideIf) // undefined 에러
// }
// scope3(true) 

//------------------------//

// var is20 = false; //boolean
// console.log(typeof is20); // boolean

// var age = 19;
// console.log(typeof age); //number

// var lastName ="Bae";
// console.log(typeof lastName) // string

// var fruits = ["Apple","Banana","Kiwi"];
// console.log(typeof fruits); // object;

// var me = {firstName:"Sammie",lastName:"Bae"};
// console.log(typeof me); // object;

// var nullVar = null;
// console.log(typeof nullVar); // object

// var function1 = function(){
//     console.log(1)
// } 
// console.log(typeof function1) // function

// var blank;
// console.log(typeof blank); // undefined;

// 참/거짓 확인
// true나 0이 아닌 다른 숫자, 비어있지않은 문자열 , 객체에 true 평가를 내린다. 외엔 false로 평가
// var printIfTrue = '';
// if(printIfTrue){
//     console.log('truthy');
// }else{
//     console.log('falsey') // falsey 출력
// }

// === 그리고 ==   ------------------------//
// ==가 값만을 해결하는 반면 ===는 형과 값 모두 확인
// console.log("5"==5) // true
// console.log("5"===5) // false

// 객체일 경우

// var o1 = {};
// var o2 = {};

// o1 == o2 // false를 반환
// o1 === o2 // false를 반환
//두 변수의 메모리 상 주소가 다르기때문에 다른 객체이므로 false가 반환됨

// 객체가 같은지 정확하게 비교하기 위해 각 속성을 비교

// function isEquivalent(a,b){
//     //속성 이름
//     var aProps = Object.getOwnPropertyNames(a);
//     var bProps = Object.getOwnPropertyNames(b);

//     //속성 길이가 다르 경우 두 객체는 다른 객체
//     if(aProps.length != bProps.length){
//         return false;
//     }

//     for(var i=0;i<aProps.length;i++){
//         var propName = aProps[i];

//         //속성 값이 다른 경우 두 객체는 같지 않다.
//         if(a[propName] !== b[propName]){
//             return false;
//         }
//     }
//     //모든 것이 일치하며 두 객체는 일치한다.
//     return true; 
// }

// console.log(isEquivalent({'hi':12},{'hi':12})); //true를 반환

//-----------------------------//
// var obj1 = {
//     'prop1':'test',
//     'prop2':function(){}
// }
// var obj2 = {
//     'prop1':'test',
//     'prop2':function(){}
// }

// console.log(isEquivalent(obj1,obj2)); // false 반환

//-----------------------------//

var function1 = function(){
    console.log(2)
}

var function2 = function(){
    console.log(2)
}

console.log(function1 == function2); // 두 함수의 메모리상 주소가 다르기때문에 등가연사자는 false 반환
// 기본 등가 확인 연산자는 ==와 ===는 비객체형에서만 사용할수있다