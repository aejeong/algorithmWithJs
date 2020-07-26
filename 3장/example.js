//숫자
//자바스크립트에서 부동 소수점 체계가 반올림 오류를 일으킬수있다.
//console.log(0.1+0.2 === 0.3); //false

//Math.floor 가장 가까운 정수로 내림함
//Math.round 가장 가까운 반올림
//Math.ceil 가장 가까운 정수로 올림

console.log(Math.floor(0.9)); //0
console.log(Math.floor(1.1)) // 1
console.log(Math.round(0.49))//0
console.log(Math.round(0.5))//1
console.log(Math.round(2.9))//3
console.log(Math.ceil(0.1))//1
console.log(Math.ceil(0.9))//1
console.log(Math.ceil(21))//21
console.log(Math.ceil(21.01))//22

// Number.EPSILON
function numberEquals(x,y) {
    return Math.abs(x-y)<Number.EPSILON;
}

numberEquals(0.1+0.2,0.3) // true
//두 수의 차이가 Number.EPSILON 보다 작은지 검사

//Number.MAX_SAFE_INTEGER 가장 큰 정수 반환------------------//
console.log(Number.MAX_SAFE_INTEGER +1 === Number.MAX_SAFE_INTEGER+2) 
// 수를 더해도 두 수는 MAX_SAFE_INTEGER의 값보다 더 커질 수 없기때문에 MAX_SAFE_INTEGER 자체로true 반환
console.log(Number.MAX_SAFE_INTEGER +1.111 === Number.MAX_SAFE_INTEGER+2.022)  //false
// 소수점을 더해서 비교할 경우 부동 소수점 값이 달라지기때문에 false가 된다


//Number.MAX_VALUE 가장 큰 부동 소수점 반환
console.log(Number.MAX_VALUE +1 === Number.MAX_VALUE+2)
console.log(Number.MAX_VALUE +1.111 === Number.MAX_VALUE+2.022)
//MAX_VALUE의 부동 소수점을 비교하기 때문에 true값


//Number.MIN_SAFE_INTEGER 가장 작은 정수 반환
console.log(Number.MIN_SAFE_INTEGER -1 === Number.MIN_SAFE_INTEGER -2) 
//두 수가 더 이상 작아질수없기때문에 true
console.log(Number.MIN_SAFE_INTEGER -1.111 === Number.MIN_SAFE_INTEGER -2.022)
//부동 소수점이달라짐으로 false

//Number.MIN_VALUE 가장 작은 부동 소수점  0에 가장 가까운 부동 소수점
console.log(Number.MIN_VALUE -1 == -1) // 0 - 1 == -1 과 비슷하기때문에 true

//Infinity

console.log(Infinity > Number.MAX_SAFE_INTEGER) // true
console.log(-Infinity < -Number.MAX_SAFE_INTEGER) // true
console.log(-Infinity -32323323 < -Infinity -1) // true
// -Infinity보다 작아질수있는 것은 없다.

// -Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_SAFE_INTEGER < Number.MAX_VALUE < Infinity
//왼쪽부터 오른쪽까지 가장 작은 것과 가장 큰 순으로 나열했을 경우


// 숫자가 소수인지 알아보는 방법 n을 2부터 n-1까지의 수로 나누어 0인지 확인
// function isPrime(n) { // 시간 복잡도 O(n)  0부터 n까지의 모든 수를 확인
//     if(n<=1){
//         return false;
//     }

//     //2부터 n-1까지의 수로 나뉜다.
//     for(var i=2;i<n;i++){
//         if(n%i ==0){
//             return false;
//         }
//     }

//     return true;
// }


function isPrime(n) {
    if(n<=1) return false;
    if(n<=3) return true;

    //입력된 수가 2 또는 3인 경우 아래 반복문에서
    //다섯 개의 숫자를 건너띌 수 있다.
    if(n%2 == 0 || n%3 == 0) return false;

    for(var i=5;i*i<=n; i=i+6){ //n의 제곱근이 소수인지 확인하면 시간 복잡도를 상당히 줄임
        if(n%i ==0|| n%(i+2) ==0) return false;
    }
    return true;
}

//소인수분해

function primeFactors(n) {
    //n이 2로 나눠진다면 나눠질 수 있는 수만큼 2가 출력된다.
    while(n%2 == 0){
        console.log(2);
        n=n/2;
    }

    //이 지점에서 n은 홀수임이 확실하다. 따라서 수를 두 개씩 증가시킬 수 있다(주목: i=i+2);
    for(var i=3;i*i<=n; i=i+2){
        //i가 n을 나눌 수 있는 한 계속해서 i가 출력되고 n을 i로 나눈다.
        while(n%i ==0){
            console.log(i);
            n=n/i;
        } 
    }
    //다음 조건문은 n이 2보다 큰 소수인 경우를 처리하기 위한 것이다.
    if(n>2){
        console.log(n);
    }
}
primeFactors(10); // '5'와 '2'를 출력하다.

//무작위 수 생성기 Math.random() 0과1 사이의 부동소수점 반환
console.log(Math.random()*100) // 0부터 100까지의 부동소수점
console.log(Math.random()*25+5) // 5부터 30까지의 부동소수점
console.log(Math.random()*10-100) // -100부터 -90까지의 부동소수점

//무작위 정수
console.log(Math.floor(Math.random()*100)) // 0부터 99까지의 정수
console.log(Math.round(Math.random()*25)+5) // 5부터 30까지의정수
console.log(Math.ceil(Math.random()*10)-100) // -100부터 -90까지의 정수


//---------------------------//

// function modularExponentiation(base,exponent,modulus) { // 시간 복잡도 O(n)
//     if(modulus ==1 )return 0;

//     var value =1;

//     for(var i=0;i<exponent;i++){
//         value = (value*base) % modulus;
//     }
//     return value;
// }

//---------------------------//
function allPrimeLessThanN(n) {
    for(var i=0;i<n;i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
}

allPrimeLessThanN(15); // 2,3,5,7,11,13

//소인수 집합 확인하기----------------//

function maxDivide(number,divisor){
    while(number%divisor ==0){
        number /= divisor;
    }
    return number;
}

function isUgly(number){
    number = maxDivide(number,2);
    number = maxDivide(number,3);
    number = maxDivide(number,5);
    return number === 1;
}

function arrayUglyNumbers(n){
    var counter = 0; currentNumber = 1, uglyNumbers = [];

    while(counter != n){
        if(isUgly(currentNumber)){
            counter++;
            uglyNumbers.push(currentNumber);
        }

        currentNumber++;
    }
    return uglyNumbers;
}