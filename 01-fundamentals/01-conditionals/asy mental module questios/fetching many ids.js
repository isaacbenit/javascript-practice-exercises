
// 4. You’ve given three API’s:

// The first one fetch a post: https://jsonplaceholder.typicode.com/posts/id,

// The 2nd fetch post comments: https://jsonplaceholder.typicode.com/comments?postId=id

// The 3rd fetch author: https://jsonplaceholder.typicode.com/users/id

// Now using the information above, write a function that 
// receives a post id as parameter, fetches its comments and the author.
function retriveId(a){
    return new Promise((resolve,reject)=>{
        resolve(fetch(`https://jsonplaceholder.typicode.com/posts/${a}`))
    })
}
function retriveComment(a){
    return new Promise((resolve,reject)=>{
        resolve(fetch(`https://jsonplaceholder.typicode.com/comments?postId=${a}`))
    })
}
function retriveauthor(a){
    return new Promise((resolve,reject)=>{
        resolve(fetch(`https://jsonplaceholder.typicode.com/users/${a}`))
    })
}


async function disp() {
    let id = await retriveId(1)
    let idjs=await id.json()
    console.log(idjs)

    let comment= await retriveComment(1)
    let commentjs= await comment.json()
    console.log(commentjs)

    let author= await retriveauthor(1)
    let authorjs= await author
    console.log(authorjs)
}
disp()
// retrive(2).then((value)=> value.json()).then((response)=> console.log(response))