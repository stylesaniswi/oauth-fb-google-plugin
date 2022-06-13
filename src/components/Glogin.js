import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import { GoogleLogout } from 'react-google-login';

const clientId="755709826951-cfhav9kmh8jelu7teq9gna7l4c3dn35s.apps.googleusercontent.com";

function Glogin() {
    const [status , setStatus] = useState(false);
    const [gdata, setGdata] = useState("");
    const [picture, setPicture] = useState("");
    // const [accessToken, setAccessToken] = useState("");
    
    const onFailure = (res)=>{
        console.log("Login FAiled : ", res);
      }
      const onLoginSuccess = (res)=>{
        console.log("Login Success!! current user :" , res.profileObj);
        setStatus(true);
        // setAccessToken(res.accessToken);
        setGdata(res);
        setPicture(res.profileObj.imageUrl)
      }
      const onLogoutSuccess =() =>{
        console.log("Logout successful");
        setStatus(false);
    }
  return (
    <div>
        {
        !status?
        <GoogleLogin
        clientId= {clientId}
        buttonText="Login"
        onSuccess={onLoginSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      /> :
      <GoogleLogout 
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onLogoutSuccess}
        />
        }
        {
          status &&
          <>
            <img src={picture} alt='' />
            <h1>Welcome {gdata.profileObj.name}</h1>
            <p> user email: {gdata.profileObj.email} <br />
                
            </p>
          </>
        }
        

    </div>
  )
}

export default Glogin