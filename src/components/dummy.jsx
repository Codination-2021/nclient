import React, { useState } from 'react'
import axios from "axios"

const Dummy = () => {
    const [messages,setMessages] = useState([])
    const [newmessage,setNewMessage] = useState("")
    const handleChange = (e) => {
        setNewMessage(e.target.value)
    }

    const handleClick = (e) => {
        setMessages([...messages, { key: newmessage}])
        try{
            axios.post("http://localhost:8800/fetchMessage", {
                message:"mereko dbms aur ns chahiye"    
            }).then((res) => {
            console.log(res)
            if(res.data.success){
                setMessages([...messages, ...Object.values(res.data.messages)])
            }
            else
            {
                setMessages([...messages, { key: "notfound"}])
            }
            
        })
        }
        finally{
            setNewMessage("")
        }
        
    }

    return (
        <div>
            <div>
            {
                messages.map((message,idx) => {
                    console.log(message)
                    return (
                        <div key={idx}>
                            <div>
                                rithik        
                            </div>     
                            <div>
                                {message.links?.map((link,idx) => {
                                    return (<a href={link} target="_blank"><li key={idx}>{link}</li></a>)
                                })}        
                            </div> 
                            <div>                              
                            <iframe width="560" height="315" src={message.yt} title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>    
                            </div> 
                            <div>
                                {/* {message.books?.map((book,idx) => {
                                    return (<li key={idx}>{book}</li>)
                                })}         */}
                            </div>      
                        </div>
                        
                    )
                })
            }
            </div>
            <div>
                <input type="text" name="message" value={newmessage} onChange={handleChange}></input>
                <button onClick={handleClick}>Send</button>
            </div>
        </div>
    )
}

export default Dummy
