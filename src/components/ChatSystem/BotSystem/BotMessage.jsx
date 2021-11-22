import React, { useState, useEffect } from "react";

export default function BotMessage({ fetchMessage }) {
  const [isLoading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadMessage() {
      const msg = await fetchMessage();
      setLoading(false);
      setMessages(msg);
    }
    loadMessage();
  }, [fetchMessage]);

  return (

       isLoading?("..Codination is Typing a message"):(
    
            Object.values(messages).map((message,idx) => {
                console.log(message)
                return (
                    <div key={idx}>
                        <div>
                               {message.key}     
                        </div>     
                        {
                          message.links?(
                            <div>
                            {message.links?.map((link,idx) => {
                                return (<a href={link} rel="noreferrer" target="_blank"><li key={idx}>{link}</li></a>)
                            })}        
                          </div> 
                          ):("")
                        }
                        {
                          message.yt?(
                            <>
                          
                              <div>  
                  
                                <iframe width="400" height="315" src={message.yt} title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>    
                              </div> 
                          </>
                          ):("")
                        }
                        
                        
                    </div>
                    
                )
            })
       )
  );
}
