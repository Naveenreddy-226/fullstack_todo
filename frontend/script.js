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
  .then((data) =>{
    const f=data[0].task;
    document.getElementById('data').textContent=f;
  })
  .catch((err) => console.error('Error:', err));
}

