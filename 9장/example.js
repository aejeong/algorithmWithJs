// 집한은 항목이 유일한지 확인하는 데 있어 강력하다
//Set의 주요 특징은 유일함을 확인한다는 것
var exampleSet = new Set();
exampleSet.add(1); // exampleSet: Set{1};
exampleSet.add(1); // exampleSet: Set{1};
exampleSet.add(2); // exampleSet: Set{1,2};

//삭제는 boolean 반환
exampleSet.delete(1) // true
//포함
exampleSet.has(1); // false
exampleSet.has(2); // true

//교집합
function intersectSets(setA,setB){
    var intersection = new Set();
    for(var elem of setB){
        if(setA.has(elem)){
            intersection.add(elem);
        }
    }
    return intersection;
}

var setA1 = new Set([1,2,3,4]),
    setB1 = new Set([2,3]);
    intersectSets(setA,setB); // Set{2,3};


// 상위 집합 여부
function isSuperset(setA, subset){
    for(var elem of subset){
        if(!setA.has(elem)){
            return false;
        }
    }
    return true;
}

var setA2= new Set([1,2,3,4]),
    setB2= new Set([2,3]),
    setC2= new Set([5]);

    isSuperset(setA,setB); //setA가 setB의 모든 항복을 포함 true
    isSuperset(setA,setC) // false


//합집합  
function unionSet(setA,setB){
    var union = new Set(setA);
    for(var elem of setB){
        union.add(elem);
    }

    return union;
}

var setA3=new Set([1,2,3,4])
setB3= new Set([2,3]),
setC3= new Set([5]);
unionSet(setA3,setB3) // Set{1,2,3,4}
unionSet(setA3,setC3) // Set{1,2,3,4,5}


//차집합
function differenceSet(setA,setB){
    var difference =new Set(setA);
    for(var elem of setB){
        difference.delete(elem);
    }
    return difference
}

var setA4=new Set([1,2,3,4]),
    setB4=new Set([2,3])
    differenceSet(setA4,setB4); // Set {1,4}



//배열중복 확인하기

function checkDuplicates(arr){
    var mySet = new Set(arr);
    return mySet.size<arr.length;
}

checkDuplicates([1,2,3,4,5])//false
checkDuplicates([1,1,2,3,4,5])//true

//개별적인 배열들로부터 유일한 값 반환

function uniqueList(arr1,arr2){
    var mySet = new Set(arr1.concat(arr2));
    return Array.from(mySet);
}

uniqueList([1,1,2,2],[2,3,4,5]) // [1,2,3,4,5]
uniqueList([1,2],[3,4,5]) // [1,2,3,4,5]
uniqueList([],[2,2,3,4,5]) // [3,4,5]