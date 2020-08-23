//검색과 정렬

/**
 * 선형 검색 
 * -배열 순회하며 검색 
 * - O(n)의 시간복잡도
 * 배얄의 정렬 여부와 상관없이 동작하기떄문에 좋지만
 * 배열의 모든 항목을 확인해야하는 단점이있음
 * */
function linearSearch(array,n){
    for(var i=0;i<array.length;i++){
        if(array[i]==n){
            return true;
        }
    }
    return false;
}
console.log(linearSearch([1,2,3,4,5,6,7,8,9],6)) //true
console.log(linearSearch([1,2,3,4,5,6,7,8,9],10)) //false



/**
 * 이진 검색
 * 중간 값을 확인해 원하는 값보다 큰지 작은지 확인
 * 정렬된 자료에 사용하기 좋다
 */

 function binarySerach(array,n){
     var lowIndex = 0, highIndex = array.length-1;

     while(lowIndex<=highIndex){
         var midIndex = Math.floor((highIndex+lowIndex)/2);
         if(array[midIndex]==n){
             return midIndex;
         }else if(n>array[midIndex]){
             lowIndex = midIndex;
     }else{
         highIndex = midIndex;
     }
     }
     return -1;
 }

 console.log(binarySerach([1,2,3,4],4)); //true
 console.log(binarySerach([1,2,3,4],5)); //-1



//정렬

 /**
  * 거품 정렬 (Bubble sort)
  * O(n2)
  * 전체 배열 순회하면서 큰 값과 작은 값을 교환
  */

  function swap(array,index1,index2){
      var temp= array[index1];
      array[index1] = array[index2];
      array[index2] = temp;
  }

  function bubbleSort(array){
      for(var i=0,arrayLength = array.length; i<arrayLength; i++){
          for(var j=0;j<=i;j++){
              if(array[i] <  array[j]){
                swap(array,i,j)
              }
          }
      }
      return array;
  }
  bubbleSort([6,1,2,3,4,5]) // [1,2,3,4,5,6]


  /**
   * 선택 정렬(selection sort)
   * 가장 작은 값을 찾아서 배열의 현 위치에 삽입
   * bubble sort 보다 약간 더 나음
   */

   function selectionSort(items){
       var len = items.length, min

       for(var i=0;i<len;i++){
           min =i;
           for(j=i+1;j<len;j++){
               if(items[j]<items[min]){
                   min=j;
               }
           }
           if(i != min){
               swap(items,i,min)
           }
       }
       return items;
    }

    selectionSort([6,1,23,4,2,3]) //[1,2,3,4,6,23]

    /**
     * 삽입 정렬(insertion sort)
     * 정렬되지 않은 항목들을 배열의 정렬된 부분으로 이동시킴
     * 선택 정렬과 비슷
     */

     function insertionSort(items){
         var len = items.length,//배열 항목의 수
          value, // 현재 비교 중인 값
          i, // 정렬되지 않은 부분의 인덱스
          j // 정렬된 부분의 인덱스;

          for(i=0; i<len;i++){
            //현재 값이 이후에 이동될 수 있기 때문에 저장  
            value= items[i];
            for(j=i-1;j>-1&& items[j]>value; j--){
                items[j+1] = items[j]
            }
            items[j+1]=value
          }
          return items;
     }

     insertionSort([6,1,23,4,2,3]) // [1,2,3,4,6,23]

     /**
      * 빠른 정렬(quickSort)
      * 기준점을 획득하고 해당 기준점 기준으로 배열을 나눔
      */

      function quickSort(items){
          return quickSortHelper(items,0,items.length-1);
      }

      function quickSortHelper(items,left,right){
          var index; 
          if(items.length>1){
              index = partition(items, left, right)

              if(left<index-1){
                  quickSortHelper(items,left,index-1);
              }

              if(index<right){
                  quickSortHelper(items,index,right)
              }
          
            }
            return items;
      }

      function partition(array,left,right){
          var pivot = array[Math.floor((right+left)/2)];
          while(left<=right){
              while(pivot>array[left]){
                  left++;
              }
              while(pivot<array[right]){
                  right--;
              }
              if(left<=right){
                  var temp = array[left];
                  array[left] = array[right];
                  array[right] = temp;
                  left++;
                  right--;
              }
            }
            return left;
      }

      quickSort([6,1,23,4,2,3]) 


      /**
       * 빠른 선택(quickSelcet)
       * 배열에서 k번째로 작은 항목을 찾는 선택 알고리즘
       */

       var array=[1,3,3,-2,3,14,7,8,1,2,2]

       function quickSelectInPlace(A,l,h,k){
           var p = partition(A,l,h);
           if(p==(k-1)){
               return A[p];
           }else if(p>(k-1)){
               return quickSelectInPlace(A,l,p-1,k);
           }else{
               return quickSelectInPlace(A,p+1,h,k)
           }
       }

       function medianQuickselect(array){
           return quickSelectInPlace(array,0,array.length-1,Math.floor(array.length/2))
       }

       quickSelectInPlace(array,0,array.length-1,5)//2
       quickSelectInPlace(array,0,array.length-1,10)//7

       /**
        * 병합정렬(mergeSort)
        * 각 하위 배열에 하나의 항목이 존재할 떄까지 배열을 하위 배열로 나눔
        * 그리고 각 하위 배열을 정렬된 순서로 병합 
        */

        function merge(leftA, rightA){
            //
            var results =[],leftIndex=0,rightIndex=0;
            while(leftIndex<leftA.length && rightIndex <right.length){
                if(leftA[leftIndex]<rightA[rightIndex]){
                    results.push(leftA[leftIndex++]);
                }else{
                    results.push(rightA[rightIndex++])
                }
            }
            var leftRemains = leftA.slice(leftIndex), 
            rightRemains = rightA.slice(rightIndex) 
            return results.concat(leftRemains).concat(rightRemains)
        }

        function mergeSort(array){
            // [4,6,1,23,2,3]
            if(array.length<2){
                return array;
            }

            var midpoint = Math.floor((array.length)/2), 
            leftArray = array.slice(0,midpoint), 
            rightArray = array.slice(midpoint)

            return merge(mergeSort(leftArray),mergeSort(rightArray))
        }

        mergeSort([6,1,23,4,2,3]) // [1,2,3,4,6,23]

        /**
         * 계수 정렬(countSort)
         * 제한된 범위의 정수 정렬할때 사용
         */

         function countSort(array){
             var hash = {}, countArr = [];
             for(var i=0;i<array.length;i++){
                 if(!hash[array[i]]){
                     hash[array[i]] = 1;
                 }else{
                     hash[array[i]]++
                 }
             }

             for(var key in hash){
                 for(var i=0;i<hash[key];i++){
                     countArr.push(parseInt(key));
                 }
             }
             return countArr;
         }

         countSort([6,1,23,2,3,2,1,2,2,3,3,1,123,123,4,2,3]); 


/**
 * 자바스크립트 내장 정렬 sort()
 */

 var array1= [12,3,4,2,1,34,23];
 array1.sort(); //[1,12,2,23,3,34,4]
 //기본적으로 알바펫순 정렬이기떄문에 숫자에 대해서는 제대로 동작하지않을 가능성이 크다
 //자바스크립트가 항목들을 문자열로 변환한 다음 알파벳순으로 정렬함

function comparatorNumber(a,b){
    return a-b;// 가장 작은 값부터 가장 큰 값순으로 졍렬돼야함을 나타냄 내림 차순으로 정렬 하기 원할 경우에는 b-a
}

array1.sort(comparatorNumber); //[1,2,3,4,12,23,34]
// 빠른 정렬, 병합 정렬, 계수 정렬이 가장 효율적이다



// 제곱근 함수
//선형
function sqrtIntNaive(number){
    if(number === 0 || number === 1){
        return number;
    }

    var index=1, square =1;
    while(square<number){
        if(square == number){
            return square
        }

        index++;
        square = index*index
    }
    return index; 
}

sqrtIntNaive(9) // 3

// 이진
function sqrtInt(number){
    if(number==0||number==1) return number;

    var start=1,end=number,ans;

    while(start<=end){
        let mid = parseInt((start+end)/2)
        if(mid*mid == number){ 
            return mid;
        }
        if(mid*mid<number){
            start = mid+1 
            ans=mid;
        }else{
            end=mid-1; 
        }
    }
    return ans;
}

sqrtInt(9);


//문자열 길이순으로 정렬

var mythical = ['dragon','slayer','magic','wizard of oz','ned stark'];

function sortComparator(a,b){
    return a.length - b.length
}

mythical.sort(sortComparator);



