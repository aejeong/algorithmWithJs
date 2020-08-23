//재귀
function countDownToZero(n){
    if(n<0){
        return; //함수를 중단
    }else{
        console.log(n);
        countDownToZero(n-1);
    }
}

countDownToZero(12);

//피보나치 수열
function getNthFibo(n){
    if(n <= 1) return n;
    var sum = 0,
        last =1,
        lastlast =0;

        for(var i=1;i<n;i++){
            sum = lastlast +last;
            lastlast = last;
            last = sum;
        }

        return sum;
}


//재귀적으로~
function getNthFibo2(n){
    if(n<=1){
        return n;
    }else{
        return getNthFibo2(n-1) + getNthFibo2(n-2)
    }
}

//꼬리 재귀
//before
function getNthFibo3(n){
    if(n<=1) return n;
    var sum=0, last=1, lastlast =0;

    for(var i=1;i<n;i++){
        sum =lastlast +last;
        lastlast =last;
        last= sum;
    }

    return sum;
}

//after
function getNthFiboBetter(n,lastlast,last){
    if(n==0){
        return lastlast
    }
    if(n==1){
        return last;
    }
    return getNthFiboBetter(n-1,last,lastlast+last);
}