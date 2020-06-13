localStorage.setItem('name', 'Manny');

const name = localStorage.getItem('name');

const h1 = document.querySelector('#title');

name ? h1.textContent = `Welcome ${name}` : h1.textContent = 'No one is home'; 
