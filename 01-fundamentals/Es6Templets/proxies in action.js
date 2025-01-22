let dog = {
  name: "max",
  age: 8,
};
const dogprox = {
  get(target, property) {
    console.log(target[property]);
    if(property === 'age'){
        console.log(target[property] * 2)
    }
  
  },

// set(target, property, value){
//     target[property] = value
//   },

//   delete: function(target,property){
//     if (property === 'color'){
//         delete target[property]
//     }}
}

let proxy = new Proxy(dog, dogprox);
console.log(proxy)
proxy.color = 'black'
proxy.id = 5
console.log(proxy)
proxy.age;
delete proxy.color
console.log(proxy)
// let b = proxy.age;
// console.log(typeof(b))
// if(proxy.age > 7){
//     console.log('your dog is not a baby')
// };
// console.log(Number(proxy.age)+10);
