// Default imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Custom imports
import {Provider} from "react-redux";
import configureStore from "./store/store";

// Local instance
const store = configureStore();

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'));
