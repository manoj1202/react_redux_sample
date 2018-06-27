import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import {Provider} from "react-redux"
import {createStore} from "redux"
import reducer from "./reducers"

cons store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
     document.getElementById('root')
)