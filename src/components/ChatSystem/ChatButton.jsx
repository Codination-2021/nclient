import React from 'react'
import {useState} from 'react'
import "./ChatSystem.css"
import ChatSystem from './ChatSystem'

const ChatButton = () => {

    const [chatbot,setChatbot] = useState(false)

    const toggleChatbot = (e) => {        
        setChatbot(!chatbot)           
    }

    return (
        <div>            
            {chatbot && <ChatSystem />}            
            <img onClick={toggleChatbot} src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png" className="chatbutton"></img>
        </div>
    )
}

export default ChatButton
