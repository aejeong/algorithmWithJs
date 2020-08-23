// var foo = {
//     bar1: memory(), //예를 들어 5kb 가정했을때
//     bar2 :memory() //5kb
// }

// function clickEvent(){
//     alert(foo.bar1[0]); // bar1 속성에 접근하기 위해서는 food 객체 전체를 로딩해야되기때문에 10kb 메모리를 사용함
// }


// DOM 메모리 누수
/*
예를 들어서 
<div id="one">One</div>
<div id="two">Two</div> 
*/

var one = document.getElementById("one");
var two = document.getElementById("two");
one.addEventListener('click', function(){
    two.remove();
    console.log(two); //삭제 후<div id="two">Two</div> 
})

//one에 addEventlistener를 이용해서 two를 제거하는 콜백을 작성했지만
// 여전히 two는 참조 되고 있기때문에 누수가 생긴다

// 1)
var one = document.getElementById("one");
one.addEventListener('click',function(){
    var two = document.getElementById('two');
    two.remove();
})
// 2)
var one = document.getElementById("one");
one.addEventListener('click',function(){
    var two = document.getElementById('two');
    two.remove();
})

one.removeEventListener('click');

//객체가 window 전역 객체에 포함된다는 것은 메모리에 존재한다는 것

var a = 'apples' //var 키워드를 통해 전역 변수 선언
b = 'oranges' // 전연변수선언

console.log(window.a); // 'apples'
console.log(window.b); // 'oranges'

//전역변수 사용은 메모리 절약을 위해 지양하는 것이 좋다. 


//객체 참조 제한하기

// (X)
var test = {
    prop1 : 'test'
}

function printProp1(test){
    console.log(test.prop1);
}

printProp1(test); //'test'

// (O)
var test = {
    prop1 : 'test'
}

function printProp1(prop1){
    console.log(prop1);
}

printProp1(test.prop1); //'test'


// delete 연산자
var test = {
    prop1 : 'test'
}
console.log(test.prop1); // 'test'

delete test.prop1;
console.log(test.prop1); // undefined


//-------------------//
//최적화 하기 before
/*
function someLargeArray(){
    return new Array(1000000);
}

var exampleObject = {
    'prop1': someLargeArray(),
    'prop2': someLargeArray()
}

function printProperty(obj){
    console.log(obj['prop1']);
}

printProperty(exampleObject);
*/
// after

function someLargeArray(){
    return new Array(1000000);
}

var exampleObject = {
    'prop1': someLargeArray(),
    'prop2': someLargeArray()
}

function printProperty(prop){
    console.log(prop);
}

printProperty(exampleObject['prop1']);

//-------------------//
//before
var RED = 0,
    GREEN = 1,
    BLUE = 2;

    function redGreenBlue(arr){
        var counter = new Array(3).fill(0)
        for(var i=0; i<arr.length; i++){
            var curr = arr[i];
            if(curr == RED){
                counter[RED]++;
            }else if(curr == GREEN){
                counter[GREEN]++;
            }else if(curr == BLUE){
                counter[BLUE]++;
            }
        }
        return counter;
    }

    redGreenBlueCount([0,1,1,1,2,2,2]);
//after
function redGreenBlue(arr){
    var RED = 0,
    GREEN = 1,
    BLUE = 2,
    counter = new Array(3).fill(0)
    for(var i=0; i<arr.length; i++){
        var curr = arr[i];
        if(curr == RED){
            counter[RED]++;
        }else if(curr == GREEN){
            counter[GREEN]++;
        }else if(curr == BLUE){
            counter[BLUE]++;
        }
    }
    return counter;
}
redGreenBlueCount([0,1,1,1,2,2,2]); //[1,3,3]


//before
/*
<button id="one">Button 1</button>
<button id="two">Button 2</button>
*/

var one = document.querySelector('#one');
var two = document.querySelector('#two');

function callBackExample(){
    one.removeEventListener('',callBackExample);
}

one.addEventListener('hover',function(){
    two.remove();
    console.log(two); // 여전히 출력됨
})

two.addEventListener('hover',function(){
    one.remove()
    console.log(one) // 여전히 출력됨
})


//after
var one = document.querySelector('#one');
var two = document.querySelector('#two');
function callbackOne(){
    var two = document.querySelector('#two');
    if(!two){
        return;
    }
    two.remove();
    one.removeEventListener('hover',callbackOne);
}

function callbackTwo(){
    var one = document.querySelector('#one');
    if(!one){
        return;
    }
    one.remove();
    two.removeEventListener('hover',callbackTwo);
}

one.addEventListener('click',callbackOne);
two.addEventListener('click',callbackTwo);