import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./components/AppContextProvider/appContextProvider"

ReactDOM.render(

<BrowserRouter>
<AppContextProvider>
    <App />
    </AppContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
