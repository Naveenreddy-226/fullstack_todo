function hello() {
  const text = document.getElementById('hello').value;

  // POST new task
  fetch('http://localhost:5000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ task: text }),
  })
    .then((res) => res.json())
    .then(() => {
      // After POST, fetch all users
      return fetch('http://localhost:5000/api/users');
    })
    .then((res) => res.json())
    .then((data) => {
      const ol = document.createElement('ol');

      data.forEach((user) => {
        const li = document.createElement('li');
        li.textContent = user.task + '     ';

        const button = document.createElement('button');
        button.textContent = 'Delete';

        // DELETE button functionality
        button.addEventListener('click', () => {
          fetch(`http://localhost:5000/api/users/${user._id}`, {
            method: 'DELETE',
          })
            .then((res) => res.json())
            .then(() => {
              // Remove the item from the DOM
              li.remove();
            })
            .catch((err) => console.error('Delete error:', err));
        });

        li.appendChild(button);
        ol.appendChild(li);
      });

      const dataContainer = document.getElementById('data');
      dataContainer.innerHTML = ''; // clear previous content
      dataContainer.appendChild(ol);
    })
    .catch((err) => console.error('Error:', err));
}
