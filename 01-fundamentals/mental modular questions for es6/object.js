//  let  isaac = {
//     name:'benit'
//   }
//   console.log(Object.hasOwn(isaac,'name'))
//   console.log(isaac.name)

const check = (obj,prop) => {
    if(Object.hasOwn(obj,prop)){
        console.log(obj[prop])
    }
    else{
        console.log('property is not found')
    }
  }
check({name:'isaac'},'nam')