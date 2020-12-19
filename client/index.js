import React from 'react';
import { render } from 'react-dom';

const App = props =>{
    return(
        <h1>Hey world!</h1>
    )
}

render(<App />, document.getElementById('app'));