import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import firebase from 'firebase/app';

import { auth } from '../firebase';

function Login() {
  const provider = new firebase.auth.GoogleAuthProvider();

  return (
    <div id='login-page'>
      <div id='login-card'>
        <h2>Welcome to Unichat!</h2>

        <div
          className='login-button google'
          onClick={() => auth.signInWithRedirect(provider)}
        >
          <GoogleOutlined /> Sign In with Google
        </div>

        {/* <br />
        <br /> */}

        {/* <div className='login-button facebook'>
          <FacebookOutlined /> Sign In with Facebook
        </div> */}
      </div>
    </div>
  );
}

export default Login;
