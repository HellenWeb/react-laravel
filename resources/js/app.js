require('./bootstrap');

import React from 'react';
import Routes from './routes.tsx'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <Routes />,
    document.querySelector('#root')
);
