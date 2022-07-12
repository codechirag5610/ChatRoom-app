import React from 'react'
import { useAuth } from './hooks/useAuth';
import  { AuthenticatedApp, UnAuthenticatedApp }  from './components/index';
import './App.css';


const App = () => {
  const { user } = useAuth();
    return user ? <AuthenticatedApp /> : <UnAuthenticatedApp />;
}

export default App