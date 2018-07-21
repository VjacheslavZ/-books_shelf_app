import React from 'react';
import ReadctDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import reducers from './redusers';
import Routes from './routes';

const createStoreWidthMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReadctDOM.render(
    <Provider store={createStoreWidthMiddleware(reducers)}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>
,document.getElementById('root'));