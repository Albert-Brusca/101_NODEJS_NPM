import './style.css'
import user from './user.js';

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`


user('pepe@gmail.com').consoleme();

console.log('prova');