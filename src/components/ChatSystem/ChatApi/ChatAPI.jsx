import axios from "axios";

const API = {
    GetChatbotResponse: async message => {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          if (message === "hi") resolve([{key:<p>Welcome to Codination-2021<img src="https://c.tenor.com/TTqJEOE7gAsAAAAC/welcome-emoji.gif" alt="Welcome Emoji" style={{}}></img></p>}]);
          //if (message === "hi") resolve([{key:<p>Welcome to Codination-2021<img src="http://pa1.narvii.com/6434/c4b1b4dabb9ed4fa32f21979a2da69a7bac2bdf0_00.gif" alt="Welcome Emoji" style={{}}></img></p>}]);
          else if(message === "bye") resolve([{key:<p>Goodbye, have a nice day!<br /><img src="https://c.tenor.com/yCflSyaBik8AAAAM/wave-emoji.gif" alt="Good-Bye Emoji" style={{}}></img></p>}]);
          //else if(message === "bye") resolve([{key:<p>Goodbye, have a nice day!<br /><img src="https://y.yarn.co/137ec606-efcf-4fdd-8e5f-48abdbaeab26_text.gif" alt="Good-Bye Emoji" style={{}}></img></p>}]);
           else{
                try{
                    axios.post("http://localhost:8800/fetchMessage", {
                        message:message    
                    }).then((res) => {
                        console.log(res);
                        if(res.data.success){
                            var msgs = [{key:<p>Here is your search result <img src="https://c.tenor.com/eT_e-q0D5xoAAAAC/long-livethe-blob-sunglasses.gif" alt="Cool Emoji" style={{}}></img></p>}];                
                            //var msgs = [{key:<p>Here is your search result <img src="https://c.tenor.com/ILGqzVUwmMUAAAAM/minion-dance.gif" alt="Cool Emoji" style={{}}></img></p>}];                
                            
                            //msgs.concat(res.data.messages)
                            resolve([...msgs, ...res.data.messages]);
                        }
                        else
                        {
                            resolve([{key:<p>Sorry, Couldn't found anything. <img src="https://blog.joypixels.com/content/images/2019/12/thumbs_down.gif" alt="Thumbs down Emoji" style={{}}></img></p>}])
                            //resolve([{key:<p>Sorry, Couldn't found anything. <img src="https://i.gifer.com/cLL.gif" alt="Thumbs down Emoji" style={{}}></img></p>}])
                        }
                    
                    })
                }catch(e){
                    reject("Couldn't found any thing for you")
                }
            }
        }, 2000);
       
       
      });
    }
  };
  
  export default API;