import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

// setInterval(()=> {
//     store.dispatch({type: "FAKE"})
// }, 3000)

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}> {/*Размешаеть Store в глобальный контекст для доступа всем дочерным. К примеру: тема, локализация (Ру и Уз*/}
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
