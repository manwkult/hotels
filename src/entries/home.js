import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'babel-polyfill'
import '@/assets/scss/app.scss'

import Home from '@/pages/containers/home'

import store from '@/store'

const home = document.getElementById('app')

render(<Provider store={store}>
  <Home />
</Provider>,
home)
