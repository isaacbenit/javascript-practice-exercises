let p = fetch("https://jsonplaceholder.typicode.com/users/")
  .then((value) => value.json())
  .then((data) =>   {
    for (i = 0; i < data.length; i++) {
      if (data[i].username === "Bret") {
        console.log(data[i].email);
      }
    }
  });


