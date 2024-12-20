function sum(n) {
  let m = n.toString();
  let z = 0;
  z = m.split("").reduce((a, b) => Number(a) + Number(b));
  let k= z.toString().length;
//   console.log(m);
  if (k != 1) {
    sum(Number(z));
  }
  return z;
}
console.log(sum(552));
