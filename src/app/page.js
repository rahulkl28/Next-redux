'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import { Provider } from 'react-redux';
import store from './store/store';



export default function Home() {


  return (
   <Provider store={store}>
    <UserForm/>
   </Provider>
  )
}
