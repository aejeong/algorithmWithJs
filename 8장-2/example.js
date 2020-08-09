//파스칼의 삼각형
function pascalTriangle(row,col){
    if(col==0){
        return 1;
    }else if(row==0){
        return 0;
    }else{
        return pascalTriangle(row-1,col)+pascalTriangle(row-1,col-1);
    }
}
pascalTriangle(5,2);


// 재귀의 빅오 분석
function getNthFibo(n){
    if(n<=1){
        return n;
    }else{
        return getNthFibo(n-1)+getNthFibo(n-2);
    }
}

getNthFibo(3);

//재귀 호출 스택 메모리
function printNRecursive(n){
    console.log(n);
    if(n>1){
        printNRecursive(n-1);
    }
}

printNRecursive(10);
// 재귀는 기저가 해결될때까지 사용되지기떄문에 추가 메모리를 필요로한다


// 객체 펼치기
// 속성에 반복적으로 접근하면서 해당 속성에 자식 속성이 있는지 재귀적으로 확인
var dictionary = {
    'Key1':'1',
    'Key2': {
        'a':'2',
        'b':'3',
        'c':{
            'd':'3',
            'e':'1'
        }
    }
}

function flatterDictionary(dictionary){
    var flattenedDictionary = {};

    function flattenedDictionaryHelper(dictionary,propNmae){
        if(typeof dictionary != 'object'){
            flattenedDictionary[propNmae] = dictionary;
            return;
        }
        for(var prop in dictionary){
            if(propName == ''){
                flattenedDictionaryHelper(dictionary[prop],propName+prop);
            }else{
                flattenedDictionaryHelper(dictionary[prop],propName+'.'+prop);
            }
        }
    }

    flattenedDictionaryHelper(dictionary,'');
    return flattenedDictionary;
}

// 문자열이 거꾸로 읽어도 동일한지 여부

function isPalindromeRecursive(word){
    return isPalindromeHelper(word,0,word.length-1);
}

function isPalindromeHelper(word,beginPos,endPos){
    if(beginPos >= endPos){
        return true;
    }
    if(word.charAt(beginPos) != word.charAt(endPos)){
        return false;
    }else{
        return isPalindromeHelper(word,beginPos+1,endPos-1)
    }
}

isPalindromeRecursive('hi'); // false
isPalindromeRecursive('iii'); // true
isPalindromeRecursive('ii'); // true
isPalindromeRecursive('aibohphobia'); // true
isPalindromeRecursive('racecar'); // true
