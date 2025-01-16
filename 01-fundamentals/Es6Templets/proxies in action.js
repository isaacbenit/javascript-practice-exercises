let dog ={
    name:'max',
    age:8,

}
const dogprox = {
    
get(target,property){
    console.log(target[property])
    // console.log(property[1]*2)
}
}

let proxy= new Proxy(dog,dogprox);
console.log(proxy)
// let b = proxy.age;
// console.log(typeof(b))
// if(proxy.age > 7){
//     console.log('your dog is not a baby')
// };
// console.log(Number(proxy.age)+10);