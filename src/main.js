//Js library for UI
import React from 'react';

/**
 * provides DOM-specific methods 
 * that can be used at the top level 
 * of your app and as an escape hatch 
 * to get outside of the React model
 */
import ReactDom from 'react-dom';
import App from './components/app';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(<App />, container);
