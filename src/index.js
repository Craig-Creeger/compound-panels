import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import Scenario from './preview/scenario'

const domScenario = document.getElementById('scenario')
ReactDOM.render(<Scenario />, domScenario)

const domElem = document.getElementById('reactApp')
ReactDOM.render(<App />, domElem)
