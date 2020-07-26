// 0부터 n-1까지의 숫자를 출력하는 경우
function exampleLinear(n){
    for(var i=0;i<n;i++){
        console.log(i)
    }
}

//O(n2) O(n3) 2차 시간 , 3차 시간 복잡도-----------------------------//
function exampleQuadratic(n){
    for(var i=0;i<n;i++){
        console.log(i);
        for(var j=i;j<n;j++){
            console.log(j)
        }
    }
}

function exampleQubic(n){
    for (var i=0;i<n;i++){
        console.log(i);
        for(var j =i;j<n;j++){
            console.log(j);
            for(var k=j;j<n;j++){
                console.log(k);
            }
        }
    }
}

//로그 시간 복잡도 --------------------------------------------//
function exampleLogarithmic(n){ // 10
    for(var i=2;i<=n;i=i*2){ // i=2; i<=10; i=4;  // i=4; 4<=10; i=8 // i=8; 8<=10; i=16
        console.log(i) //2 // 4 // 8 
    }
}


//시간 복잡도 O(n)을 지닌 코드---------------------------------//
function a(n){ // count에 숫자를 n번 더하기 때문에 f(n)=n 으로 O(n)이다. 
    var count = 0;
    for(var i=0;i<n;i++){
        count+=1;

    }
    return count;
}

//--------------------------------------------------------//

function a2(n){ // 0부터 5n까지 실행 f(n)=5n 이지만 위 코드와 같이 O(n)표기법을 지님
    var count =0;
    for(var i=0; i<5*n;i++){
        count+=1;
    }
return count;
}

//선형 시간 복잡도-------------------------------------------//

function a3(n){ // count+=3;으로 인해 +1이 추가되어 f(n)=n+1 이지만 여전히 O(n)
    var count = 0;
    for(var i=0;i<n;i++){
        count+=1;
    }
    count+=3;
    return count;
}

//--------------------------------------------------------//
function a4(n){
    var count=0;
    for(var i=0;i<n;i++){
        count+=1; // f(n)=n 이고
        console.log(count,'----count1')
    }
    for(var i=0;i<5*n;i++){
        count+=1; // f(n)=5n 이지만 결과는 O(n)=n 이 된다.
        console.log(count,'----count2')

    }
    return count;
}

//--------------------------------------------------------//

function a5(n){ // f(n)=5n*n  내부 루프 5n번 실행, 외부 루프에 의해 n번 실행으로 5n2번 연산이 일어남
    // O(n) =n2이 된다.

    var count =0;
    for(var i=0;i<n;i++){
        count+=1;
        for(var i=0;i<5*n;i++){
            count+=1;
        }
    }
    return count;
}

//--------------------------------------------------------//
function a6(n){ // 네번째줄이 n*n회 실행되기때문에 f(n)=n2
    var count =0;
    for(var i=0;i<n*n;i++){
        count+=1;
    }
    return count;
}

//--------------------------------------------------------//
function someFunction(n){ //O(n2)
    for(var i=0;i<n*1000;i++){
        for(var j=0;j<n*20;j++){
            console.log(i+j);
        }
    }
}
//--------------------------------------------------------//
function someFunction2(n){ // O(n3)
    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            for(var k=0;k<n;k++){
                for(var l=0;l<10;l++){
                    console.log(i+j+k+l);
                }
            }
        }
    }
}
//--------------------------------------------------------//
function someFunction3(n){ //O(1)
    for(var i=0;i<1000;i++){
        console.log("hi");
    }
}
//--------------------------------------------------------//

function someFunction4(n){ //O(n)
    for(var i=0;i<n*10;i++){
        console.log(n);
    }
}

//--------------------------------------------------------//

function someFunction5(n){ //O(log2n)
    for(var i=0;i<n;i*2){
        console.log(n);
    }
}

//--------------------------------------------------------//

function someFunction6(n){ //O(∞)  함수가 종료되지않음
    while(true){
        console.log(n);
    }
}