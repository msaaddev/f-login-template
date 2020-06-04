import React from 'react';
import SignInButton from './components/signinbutton';
import { facebook, google } from './data/data.json';
import './App.css';

function App() {
    return (
        <div className='container'>
            <SignInButton text={facebook} />
            <SignInButton text={google} />
        </div>
    );
}

export default App;
