import React, { useRef, useLayoutEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useMessages } from '../../hooks/useMessages';
import { Message } from '../index';
import './styles.css';

const MessageList = ({ roomId }) => {
    const containerRef = useRef(null);
    const { user } = useAuth();
    const messages = useMessages(roomId);

    useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    });

    return (
        <div className="message-list-container" ref={containerRef}>
            <ul className="message-list">
                {messages.map((x) => (
                    <Message
                        key={x.id}
                        message={x}
                        isOwnMessage={x.uid === user.uid}
                    />
                ))}
            </ul>
        </div>
    );
}



export default MessageList ;