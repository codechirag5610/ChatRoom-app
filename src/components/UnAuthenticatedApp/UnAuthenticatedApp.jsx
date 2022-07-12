import React from 'react'
import { useAuth } from '../../hooks/useAuth';
import './styles.css';

const UnAuthenticatedApp = () => {
    const { login } = useAuth();

    return (
        <div className='unAuthenticatedContainer'>
            <h2 className='loginInfo'>Log in to join a chat room!</h2>
            <div className='loginButton'>
                <button onClick={login} className="login">
                    Login with Google
                </button>
            </div>
        </div>
    );
}

export default UnAuthenticatedApp;