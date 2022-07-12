import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { MessageList, MessageInput } from '../index';
import  {chatRooms}  from '../../data/chatRooms';
import './styles.css';


const ChatRoom = () => {
    const params = useParams();
    console.log(params.id);
    const room = chatRooms.find((x) => x.id === params.id);
    if (!room) {
        (<h2>Room not found</h2>)
    }

  return (
    <>
            <h2>{room.title}</h2>
            <div>
                <Link to="/">⬅️ Back to all rooms</Link>
            </div>
            <div className="messages-container">
                <MessageList roomId={room.id} />
                <MessageInput roomId={room.id} />
            </div>
        </>
  )
}

export default ChatRoom;


