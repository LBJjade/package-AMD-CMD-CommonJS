//冒泡排序
function bubbleSort(arr){
    var i = j = 0;
    for(i=1;i<arr.length;i++){
        for(j=0;j<=arr.length-i;j++){
            var temp = 0;
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}


//快速排序
function quickSort(arr,l,r){
    if(l < r){
        var i = l, j = r, x = arr[i];
        while(i<j){
            while(i<j && arr[j]>x)
                j--;
            
            if(i<j)
                //这里用i++，被换过来的必然比x小，赋值后直接让i自加，不用再比较，可以提高效率
                arr[i++] = arr[j];
            
            while(i<j && arr[i]<x)
                i++;
            
            if(i<j)
                //这里用j--，被换过来的必然比x大，赋值后直接让j自减，不用再比较，可以提高效率
                arr[j--] = arr[i];
        }
        arr[i] = x;
        
        quickSort(arr, l, i-1);
        quickSort(arr, i+1, r);
    }
}


function merge(left, right) {
    var result = [],
        il = 0,
        ir = 0;

    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    while(left[il]){
        result.push(left[il++]);
    }
    while(right[ir]){
        result.push(right[ir++]);
    }
    return result;
}


function palindrome(str){
    // \W匹配任何非单词字符。等价于“[^A-Za-z0-9_]”。
    var re = /[\W_]/g;
    // 将字符串变成小写字符,并干掉除字母数字外的字符
    var lowRegStr = str.toLowerCase().replace(re,'');
    // 如果字符串lowRegStr的length长度为0时，字符串即是palindrome
    if(lowRegStr.length===0)
        return true;
    // 如果字符串的第一个和最后一个字符不相同，那么字符串就不是palindrome
    if(lowRegStr[0]!=lowRegStr[lowRegStr.length-1])
        return false;
    //递归
    return palindrome(lowRegStr.slice(1,lowRegStr.length-1));
}


