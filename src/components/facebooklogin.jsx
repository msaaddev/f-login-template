import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { facebookAppId } from '../data/data.json';
import './facebooklogin.css';

const SignInButton = ({ auth, setName, setAuth, setPicture, name, picture }) => {
    const componentClicked = () => {
        console.log('Component Clicked');
    };

    const responseFacebook = (response) => {
        if (response.status !== 'unknown') {
            setName(response.name);
            setPicture(response.picture.data.url);
            setAuth(true);
        }
    };

    let facebookData;

    auth
        ? (facebookData = (
              <div className='container'>
                  <img alt={name} src={picture} />
                  <br />
                  {name}
              </div>
          ))
        : (facebookData = (
              <FacebookLogin
                  appId={facebookAppId}
                  autoLoad={true}
                  fields='name,picture'
                  onClick={componentClicked}
                  callback={responseFacebook}
              />
          ));

    return <>{facebookData}</>;
};

export default SignInButton;
