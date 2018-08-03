import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.css'

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')

const render = () => {
  ReactDOM.render(
    <App />,
    MOUNT_NODE
  )
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render()
