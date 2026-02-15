import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from '../src/store/Store'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';

import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
