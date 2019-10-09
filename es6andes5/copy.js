/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-08 16:17:06
 * @LastEditTime: 2019-10-08 16:22:25
 * @LastEditors: Please set LastEditors
 */
// 我们怎么去实现深拷贝呢，这里可以递归递归去复制所有层级属性。
function deepClone(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(key in obj){
            if(obj.hasOwnProperty(key)){
                //判断ojb子元素是否为对象，如果是，递归复制
                if(obj[key]&&typeof obj[key] ==="object"){
                    objClone[key] = deepClone(obj[key]);
                }else{
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}    
let a=[1,2,3,4],
    b=deepClone(a);
a[0]=2;
console.log(a,b);


// 除了递归，我们还可以借用JSON对象的parse和stringify
function deepClone(obj){
    let _obj = JSON.stringify(obj),
        objClone = JSON.parse(_obj);
    return objClone
}    
let a=[0,1,[2,3],4],
    b=deepClone(a);
a[0]=1;
a[2][0]=1;
console.log(a,b);


