import React, { useState } from 'react';
import Facebooklogin from './components/facebooklogin';
import './App.css';

function App() {
    const [auth, setAuth] = useState(false);
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');

    return (
        <div className='container'>
            <Facebooklogin
                auth={auth}
                setAuth={setAuth}
                setName={setName}
                setPicture={setPicture}
                name={name}
                picture={picture}
            />
        </div>
    );
}

export default App;
