require('./bootstrap');

import React from 'react';
import Home from './pages/App.tsx'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <Home />,
    document.querySelector('#root')
);
