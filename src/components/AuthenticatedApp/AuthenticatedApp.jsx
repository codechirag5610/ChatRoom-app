import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, ChatRoom } from '../index';

const AuthenticatedApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/room/:id" element={<ChatRoom />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AuthenticatedApp;