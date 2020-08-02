//배열 삽입

var array1= [1,2,3,4];
array1.push(5); //array1 = [1,2,3,4,5]
array1.push(7); //array1= [1,2,3,4,5,7]
array1.push(2); //array1= [1,2,3,4,5,7,2]

//삭제
var array2= [1,2,3,4]
array2.pop(); // 4 반환 , array2=[1,2,3]
array2.pop(); // 3 반환 , array2=[1,2]

var array3= [1,2,3,4]
array3.shift(); // 1 반환 , array2=[2,3,4]
array3.shift(); // 2 반환 , array2=[3,4]

//접근
var array4 = [1,2,3,4];
array1[0]; // 1
array1[1]; // 2

//반복 O(n)의 시간복잡도를 지님..
//for
// for(var i =0; len=array1.length;i++){
//     console.log(array1[i]);
// }

//for in
var array5 = ['all','cows','are','big'];

for(var index in array5){
    console.log(index); // 인덱스 출력
}

for(var index in array5){
    console.log(array5[index]); // 값 출력
}

//for of
for(var element of array5){
console.log(element); //값 출력
}

//for each
var array1 = ['all','cows','are','big'];

array1.forEach(function(ele,idx){
    console.log(ele);
})

array1.forEach(function(ele,idx){
    console.log(array1[idx]);
})

//slice 배열 일부 반환
var array6 = [1,2,3,4];
array1.slice(1,2); //[2]반환 
array1.slice(2,4); //[3,4]반환

array1.slice(1); // [2,3,4]
array1.slice(1,4); // [2,3,4]
array1.slice(); // [1,2,3,4] 배열 복사

// from 배열 복사 하지만 참조하지않는다
var array1= [1,2,3,4];
var array2= Array.from(array1);
array1 // [1,2,3,4]
array2 // [1,2,3,4]

array2[0]= 5
array1 // [1,2,3,4]
array2 // [5,2,3,4]

//splice

var array1 = [1,2,3,4];
array1.splice() // []
array1.splice(1,2)// [2,3] 반환 array1=[1,4];

var array1= [1,2,3,4];
array1.splice(); // []
array1.splice(1,2,5,6,7); // [2,3] 반환 , array1=[1,5,6,7,4]
//-----------------//

var array1= [1,2,3,4];
array1.splice(1,2,[5,6,7]); //[2,3] 반환, array1=[1,[5,6,7],4];
array1=[1,2,3,4];
array1.splice(1,2,{'ss':1}); //[2,3]반환 array1=[1,{ss:1},4];

//concat
var array1= [1,2,3,4];
array1.concat(); // [1,2,3,4] 
array1.concat([2,3,4]); // [1,2,3,4,2,3,4] 반환

//length
var array1= [1,2,3,4];
console.log(array1.length); //4
array1.length =3; // array1=[1,2,3]

//전개 연산자

function addFourNums(a,b,c,d){
    return a+b+c+d;
}

var numbers=[1,2,3,4];
console.log(addFourNums(...numbers)) //10

var array1= [1,2,3,4,5];
Math.max(array1) // 5

var array2=[3,2,-123,2132,12];
Math.min(array2); // -123

// 어떤 수가 주어졌을때 배열 내의 어떤 항목 두 개를 합쳐야 해당 수가 되는지 찾기

function findSum(arr,weight){
    for(var i=0, arrLength=arr.length;i<arrLength;i++){
        for(var j=i+1;j<arrLength;j++){
            if(arr[i]+arr[j]==weight){
                return [i,j]
            }
        }
    }
    return -1;
}

function findSumBetter(arr,weight){
    var hashtable = {};

    for(var i=0,arrLength=arr.length;i<arrLength;i++){
        var currentElement = arr[i] , 
        difference = weight - currentElement;

        if(hashtable[currentElement] != undefined){
            return [i,hashtable[weight-currentElement]]
        }else{
            hashtable[difference] = i;
        }
    }
    return -1;
}

// slice 함수

function arraySlice(array,beginIndex, endIndex){
    if(!beginIndex && !endIndex){
        return array;
    }

    endIndex = array.length;

    var partArray = [];

    for(var i= beginIndex; i<endIndex; i++){
        partArray.push(array[i]);
    }
    return partArray;
}

arraySlice([1,2,3,4],1,2); //[2]
arraySlice([1,2,3,4],2,4); //[3,4]


//두 개의 정렬된 배열이 동일한 크기일때 중앙값 찾기
function medianOfArray(array){
    var length = array.length;
    if(length % 2 == 1){
        return array[Math.floor(length/2)];
    }else{
        return (array[length/2]+array[length/2 -1])/2;
    }
}

function medianOfTwoSortedArray(arr1,arr2,pos){
    if(pos <= 0){
        return -1;
    }
    if(pos == 1){
        return (arr1[0]+arr2[0])/2
    }

    if(pos ==2){
        return (Math.max(arr1[0],arr2[0])+Math.min(arr1[1],arr2[1]))/2
    }

    var median1 = medianOfArray(arr1);
    var median2 = medianOfArray(arr2);

    if(median1 == median2){
        return median1;
    }

    var evenOffset = pos % 2 == 0? 1:0,
    offsetMinus = Math.floor(pos/2) - evenOffset,
    offsetPlus = Math.floor(pos/2) + evenOffset;

    if(median1<median2){
        return medianOfTwoSortedArray(arr1.slice(offsetMinus), arr2.slice(offsetMinus), offsetPlus);
    }else{
        return medianOfTwoSortedArray(arr2.slice(offsetMinus), arr1.slice(offsetMinus),offsetPlus)
    }
}

medianOfTwoSortedArray([1,2,3],[4,5,6],3); //3.5
medianOfTwoSortedArray([11,23,24],[32,33,450],3); // 28
medianOfTwoSortedArray([1,2,3],[2,3,5],3); //2.5

//k개의 정렬된 배열에서 공통 항목 찾기

// var arr1 = [1,5,5,10];
// var arr2 = [3,4,5,5,10];
// var arr3 = [5,5,10,20];
// var output = [5,10];

// function commonElements(Array){
//     var hashmap={},
//     last,answer = [];

//     for(var i =0,kArrayLength=kArray.length; i<kArrayLength;i++){
//         var currentArray = kArray[i];
//         last = null;
//         for(var j=0,currentArrayLen = currentArray.length; j<currentArrayLen; j++){
//             var currentElement = currentArray[j]
//          if(last != currentElement){
//              if(!hashmap[currentElement]){
//                  hashmap[currentElement] =1;
//              }else{
//                  hashmap[currentElement]++;
//              }
//          }
//          last = currentElement;
//         }
//     }

//     for(var prop in hashmap){
//         if(hashmap[prop] == kArray.length){
//             answer.push(parseInt(prop))
//         }
//     }

//     return answer;
// }

// commonElements([[1,2,3],[1,2,3,4],[1,2]]) // [1,2]

//함수형 배열 메소드

//map
[1,2,3,4,5,6,7].map(function(value){
    return value*10
})
//[10,20,30,40,50,60,70]

//filter
// [100,2003,10,203,333,12].filter(function (value){
//     return value >100;
// });
//[2003,203,333]

//reduce
var sum = [0,1,2,3,4].reduce(function(prevVal, currentVal,index,array){
    return prevVal+currentVal;
})
console.log(sum) // 10

//initial value 제공
var sum = [0,1,2,3,4].reduce(function(prevVal, currentVal,index,array){
    return prevVal+currentVal;
},1)
console.log(sum) // 11

//------------------------------//
//가변배열

function Matrix(rows, colums){
    var jaggedarray =new Array(rows);
    for(var i=0;i<colums;i+=1){
        jaggedarray[i]=new Array(rows);
    }
    return jaggedarray
}

console.log(Matrix(3,3));


//spiral

var M = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]]

function spiralPrint(M){
    var topRow = 0,
        leftCol = 0,
        btmRow = M.length -1,
        rightCol = M[0].length -1;

        while(topRow < btmRow && leftCol < rightCol){
            for(var col = 0; col <=rightCol; col++){
                console.log(M[topRow][col])
            }
            topRow++;

            for(var row=topRow;row<=btmRow; row++){
                console.log(M[row][rightCol]);
            }
            rightCol--;
            if(topRow <= btmRow){
                for(var col=rightCol; col >=0; col--){
                    console.log(M[btmRow][col]);
                }
                btmRow--;
            }
            if(leftCol <= rightCol){
                for(var row=btmRow; row>topRow; row--){
                    console.log(M[row][leftCol]);
                }
                leftCol++;
            }
        }
}

spiralPrint(M)

//tic tac toe

function checkRow(rowArr,letter){
    for(var i=0; i<3;i++){
        if(rowArr[i]!=letter){
            return false;
        }
    }
    return true;
}

function checkColumn(gameBoardMatrix, columnIndex, letter){
    for(var i=0;i<3;i++){
        if(gameBoardMatrix[i][columnIndex]!==letter){
            return false;
        }
    }
    return true;
}

function ticTacToeWinner(gameBoardMatrix,letter){
    var rowWin = checkRow(gameBoardMatrix[0],letter) || checkRow(gameBoardMatrix[1],letter) ||
    checkRow(gameBoardMatrix[2],letter);
    
    var colWin = checkColumn(gameBoardMatrix,0,letter) || checkColumn(gameBoardMatrix,1,letter) ||
    checkColumn(gameBoardMatrix,2, letter)

    var diagonalWinLetfToRight = (gameBoardMatrix[0][0] ==letter && gameBoardMatrix[1][1] == letter && gameBoardMatrix[2][2] ==letter)
    var diagonalWinRightToLeft = (gameBoardMatrix[0][2] ==letter && gameBoardMatrix[1][1]==letter && gameBoardMatrix[2][0] ==letter)

    return rowWin || colWin || diagonalWinLeftToRight || diagonalWinRightToLeft
}

var board = [['0','-','X'],['-','0','-'],['-','X','0']]
ticTacToeWinner(board,'X');
ticTacToeWinner(board,'0');
