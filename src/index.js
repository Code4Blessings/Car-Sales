import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { featureReducer } from './reducer/featureReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.scss';

//Step 1. - Create a store here in index.js.  After, go to the App.js file

const store = createStore(featureReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, rootElement
    );
