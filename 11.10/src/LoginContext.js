import React, {useState, createContext} from 'react';

export const loginContext = createContext();

export const LoginInfo = (props) =>{


    /*const [logins, loginState] = useState([
        {username: "testing", password: "pass123"},
     ]);*/

    const [correctLogin, correctloginState] = useState(false);


  /*  const correct = () => {  
        loginState((prev) => true);
     }
  
     const logout = () =>{
        loginState((prev) => false);
     }*/
 
   
    return(
        <loginContext.Provider value={[correctLogin, correctloginState]}>
            {props.children}
        </loginContext.Provider>


    );

}