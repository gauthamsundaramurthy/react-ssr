import express from "express"
import React from 'react'
import template from './src/template'
import path from "path"
import data from './assets/data.json'

import {renderToString} from "react-dom/server"
import { Provider } from 'react-redux'
import App from "./src/components/app"
import configureStore from './src/redux/configureStore'

const app = express ()

app.use("/assets", express.static(path.resolve(__dirname, 'assets')))
app.use("/media", express.static(path.resolve(__dirname, 'media')))

app.get('/', (req,res) => {
    let initialState = {
        isFetching: false,
        apps: data
    }
    let store = configureStore(initialState)
    let content = renderToString(<Provider store={store}> <App /> </Provider>)
    let response = template('SSR', store.getState(), content)
    res.send(response)
})

app.get('/csr', (req,res) => {
    res.send(template('CSR'))
})

app.listen(3000)
