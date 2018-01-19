import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

/**
 * entrance code for SPA
 */
function main() {
  ReactDOM.render(
    <App />
    , document.querySelector('.app-wrapper'));

  console.log([1, 2, 3, 4].includes(1)); // ES7: Array.prototype.includes
}

document.addEventListener('DOMContentLoaded', main);
