import React from 'react';
import home from "./images/home.svg";
import Common from './Common';
import { useHistory } from "react-router";
  
const Mainpage = () => {
    const history = useHistory();
    return (
        <>
            <Common 
                name='Welcome to ' 
                imgsrc={home} 
                isCompName={true}
                compName="Codination"
                visit='/register' 
                btnname="Get Started" 
                
            />
        </>
    )
}

export default Mainpage;

// onClick={() => history.push("/register")}