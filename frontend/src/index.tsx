import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global-styles.css'
import { PageRoutes } from './utils/Routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <PageRoutes />
  </React.StrictMode>,
)
