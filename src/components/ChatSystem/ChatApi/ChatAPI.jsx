import axios from "axios";

const API = {
    GetChatbotResponse: async message => {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          if (message === "hi") resolve([{key:"Welcome to Codination-2021"}]);
          else{
                try{
                    axios.post("http://localhost:8800/fetchMessage", {
                        message:message    
                    }).then((res) => {
                        console.log(res);
                        if(res.data.success){
                            resolve(res.data.messages);
                        }
                        else
                        {
                            resolve([{key:"Couldn't found anything"}])
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