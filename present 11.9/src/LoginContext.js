import React, {useState, createContext} from 'react';

export const LoginContext = createContext();

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
        <LoginContext.Provider value={[correctLogin, correctloginState]}>
            {props.children}
        </LoginContext.Provider>


    );

}