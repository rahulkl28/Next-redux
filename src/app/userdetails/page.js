'use client'

import React from 'react'
import { Provider } from 'react-redux'
import UsersDetails from './nextapp/page'
import store from '../store/store'

const page = () => {
  return (
    <Provider store={store}>
      <UsersDetails/>
    </Provider>
  )
}

export default page