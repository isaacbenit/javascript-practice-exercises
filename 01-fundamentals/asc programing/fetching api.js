fetch("https://jsonplaceholder.typicode.com/todos")
.then(response=> response.json())
.then(data=> console.log('it is fetched'))
.catch(error => console.error(error))