import React, { useEffect, useContext, useState } from 'react';
import {BrowserRouter} from "react-router-dom";
import Router from './router/Router';
import Context from './GlobalState/context';
import firebase from 'firebase'
import fireconfig from './Firebase.config'

const App = () => {

  const {state, actions} = useContext(Context)
  const [show, setShow] = useState(false)

  useEffect(async () => {
    await 
      actions({ type: 'setState', payload: { ...state, fireInit: firebase.initializeApp(fireconfig) } })
    await 
      setShow(true)
  }, []);

  return(
      show ? 
        < BrowserRouter >
          <Router />
        </BrowserRouter >
      :
        <div/>
  )
}

export default App;
