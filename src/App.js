import React, { useEffect} from 'react';

import './App.css';
import {gapi} from 'gapi-script'
import Glogin from './components/Glogin';
import Flogin from './components/Flogin';


const clientId = "755709826951-cfhav9kmh8jelu7teq9gna7l4c3dn35s.apps.googleusercontent.com";

function App() {
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    };
    gapi.load('client:auth2', start);

     
  })

  return (
    <div className="App">
      <Glogin />
      <Flogin />
    </div>
  );
}

export default App;
