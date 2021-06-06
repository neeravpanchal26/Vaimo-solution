// Default imports
require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './app.scss';

// Custom imports
import {Provider} from "react-redux";
import configureStore from "./store/store";

// Local instance
const store = configureStore();

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('app'));
