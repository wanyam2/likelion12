import React, { useState, useEffect } from 'react';
import './App.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const savedMessages = localStorage.getItem('chatMessages');
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }, [messages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;
        const newMessage = {
            text: input,
            position: messages.length % 2 === 0 ? 'left' : 'right'
        };
        setMessages([...messages, newMessage]);
        setInput('');
    };

    return (
        <div>
            <div className="chat-container">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.position === 'left' ? 'left-bubble' : 'right-bubble'}`}
                    >
                        <div className="message-bubble">
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="메세지를 입력하세요"
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chat;
