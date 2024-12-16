// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). 
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
function comp(a,b){
    if(a=== null || b=== null){
      return false
    }
    else{
      let c=a.sort((a,b)=> a-b).map((a)=> a**2)
      let d=b.sort((a,b)=>a-b)
      return c.join()===d.join()
      }
  }
  console.log(comp([121, 144, 19, 161, 19, 144, 19,11],[121, 14641, 20736, 361, 25921, 361, 20736, 361]))