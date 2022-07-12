import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { sendMessage } from '../../services/firebase'
import './styles.css';

const MessageInput = ({ roomId }) => {
    const { user } = useAuth();
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage(roomId, user, value);
        setValue('');
    }

  return (
    <form onSubmit={handleSubmit} className="message-input-container">
        <input
         type="text" 
         value={value} 
         placeholder="Enter Text" 
         onChange={handleChange} 
         className="message=input"
         required minLength={1} 
         style={{color: "black"}}
         />
         <button type="submit" disabled={value < 1} className="send-message">Send</button>
    </form>
  )
}

export default MessageInput;