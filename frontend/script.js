function hello(){
    const text=document.getElementById('hello').value;
    fetch('http://localhost:5000/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    task:text,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log('Saved:', data))
  .catch((err) => console.error('Error:', err));

  fetch('http://localhost:5000/api/users', {
  method: 'GET',
})
  .then((res) => res.json())
  .then((data) => {
    // Assuming 'data' is an array of user objects
    let output = '';

    data.forEach((user) => {
      // Customize based on the structure of your user object
      output += `<li>${user.task}</li>`;
    });

    document.getElementById('data').innerHTML = `<ul>${output}</ul>`;
  })
  .catch((err) => console.error('Error:', err));
}

