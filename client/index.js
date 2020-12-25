import React from 'react';
import { render } from 'react-dom';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = props => {
    return (
        <HomePage />
    )
}
render(<App />, document.getElementById('app'));