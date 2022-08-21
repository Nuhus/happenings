import React from 'react'
import '../styles/globals.css'
import Navbar from './components/Navbar'
import { store } from '../utils/Redux/slices'
import { Provider } from 'react-redux'
function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
  <React.Fragment>
    <Navbar />
  <Component {...pageProps} />
  </React.Fragment>
  </Provider>
  )
}

export default MyApp
