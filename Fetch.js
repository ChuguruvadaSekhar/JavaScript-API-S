fetch("http://jsonplaceholder.typicode.com/users")
.then(response => {
    return response.json();
})
.then(users => {
    console.log(users);
});