//문자열 접근
'dog'.charAt(1); // charAt(index)  "o" 반환

//지정된 인덱스 사이의 문자들 반환
'YouTube'.substring(1,2); // 'o'
'YouTube'.substring(3,7); // 'tube'
'YouTube'.substring(1); //'outube'

//문자열 비교
var a = 'a';
var b = 'b';
console.log(a<b) // true

//비교하려는 문자열 길이가 다를 경우 짧은 것 기준으로 비교
var a1 = 'add';
var b1 = 'b';
console.log(a1<b1) // true

var a2 = 'add';
var b2 = 'ab';
console.log(a2<b2); // false

//문자열 검색 
'Red Dragon'.indexOf('Red'); //0
// 일치하는 문자열의 위치 반환, 발견하지 못한 경우 -1이고 대소문자 구분함
'Red Dragon'.indexOf('RedScale'); // -1
'Red Dragon'.indexOf('Dragon',0) //4
'Red Dragon'.indexOf('Dragon',4) //4
'Red Dragon'.indexOf('',9) //9

function existsInString(stringValue,search){
    return stringValue.indexOf(search) !== -1;
}

console.log(existsInString('red','r')) // true
console.log(existsInString('red','b')) // false

//--------------------------------------------------//
var str = "He's my king from this day untill his last day";
var count = 0;
var pos = str.indexOf('a');
while(pos !== -1){
    count++;
    pos = str.indexOf('a',pos+1);
}
console.log(count) // '3'

//문자열 시작/끝 체크
'Red Dragon'.startsWith('Red'); // true
'Red Dragon'.endsWith('Dragon'); // true
'Red Dragon'.startsWith('Dragon'); // false
'Red Dragon'.endsWith('Red'); // false

//문자열 분해 .split(sepeartor)
var test1 = 'chicken,noodle,soup,broth';
test1.split(","); // ['chicken','noodle','soup','broth']

var test2 = 'chicken';
test1.split(""); // ['c','h','i','c','k','e','n']

//문자열 바꾸기
"Wizard of Oz".replace('Wizard','Witch') // Witch of Oz



//정규 표현식
var str = 'Javascript DataStructures';
var n = str.search(/DataStructures/); //인덱스반환
console.log(n); //11

//숫자를 포함하는 문자
var reg = /\d+/;
reg.test('123'); // true
reg.test('33asd'); // true
reg.test('5asdasd'); // true
reg.test('asdasd'); // false

//숫자만 포함하는 문자
var reg2 = /^\d+$/
reg2.test("123") // true
reg2.test("123a") // false
reg2.test("a") // false

//부동소수점
var reg3 = /^[0-9]*.[0-9]*[1-9]+$/;
reg.test("12"); // flase
reg.test("12.2"); // true

//숫자와 알파벳만 포함하는 문자

var reg4 = /[a-zA-Z0-9]/;
reg4.test('somethingELSE'); // true
reg.test('hello'); // true
reg.test('112a'); // true
reg.test('112'); // true
reg.test('^'); // false

//질의 문자열
var uri = 'http://your.domain/product.aspx?categoy=4&product_id=2140&query=lcd+tv';
var queryString = {};
uri.replace(new RegExp("([^?=&]+)(=([^&]*))?","g"),
function($0,$1,$2,$3){
    queryString[$1] = $3
})
console.log('ID: '+ queryString['product_id']) // ID: 2140
console.log('Name: '+queryString['product_name']) // Name: undefined
console.log('Category: '+queryString['category']); // Category: 4



//---------------------------------------//
//문자열 단축

var DICTIONARY ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split('');

function encodeId(num){
    var base = DICTIONARY.length;
    var encoded = '';
    
    if(num === 0){
        return DICTIONARY[0 ];
    }

    while(num > 0){
        encoded += DICTIONARY[(num % base)];
        num = Math.floor(num/base);
    }

    return reverseWord(encoded)
}

function reverseWord(str){
    var reversed = '';
    for(var i=str.length-1;i>=0;i--){
        reversed += str.charAt(i);
    }
    return reversed;
}

function decodeId(id){
    var base = DICTIONARY.length;
    var decoded = 0;

    for(var index=0;index<id.split('' ).length; index++){
    decoded = decoded * base + DICTIONARY.indexOf(id.charAt(index))        
    }
    return decoded;
}

console.log(encodeId(11231230 ));
console.log(encodeId('VhU2' ));



