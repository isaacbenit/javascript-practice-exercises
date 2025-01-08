function hello() {
  return new Promise((resolve, reject) => {
    resolve("hello my g");
  });
}
function bye(value) {
  return new Promise((resolve, reject) => {
    resolve("ok byeeee👋🏽👋🏽");
  });
}
hello().then ((value) => {console.log(value); return bye() }).then((value) => console.log(value))
  // .then((value) => {
  //   console.log(value);
  //   return bye();
  // })
  // .then((value) => console.log(value)).then((x)=> bye(x));
