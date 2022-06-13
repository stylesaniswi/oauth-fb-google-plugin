import React, {useState} from 'react'
import FacebookLogin from 'react-facebook-login'
import './style.css'

const appId="714176789854978"

function Flogin() {
    const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

 function facebookLogout(){
        window.FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                window.FB.logout(function(response) {
                   console.log("loggedout");
                   window.location.reload()
                });
            }
        });
    }


  return (
    <div>
        {!login &&
            <FacebookLogin
              appId={appId}
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook" />
          }
         
          
          {login &&
          <>
           <button onClick= {facebookLogout} className="loginBtn loginBtn--facebook"> Facebook Logout</button>
          <img src={picture} alt='' />
            <h1>Welcome{data.name}</h1>
            <p> user id: {data.id} <br />
                user details: {data.accessToken}
            </p>
          </>
            
          }
    </div>
  )
}

export default Flogin