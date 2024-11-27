function solution(str, ending) {
  // TODO: complete
  let a = str.length;
  let b = ending.length;
  let c = a - b;
  if (str.substring(c) === ending) {
    return true;
  } else {
    return false;
  }
}
console.log(solution("isaac", "ac"));

