// UserContextProvider.js
import { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = (props) => {
    const [userLogin, setUserLogin] = useState(false);

    const handlingLogin = () => {
        setUserLogin(true);
    }

    const handlingLogout = () => {
        setUserLogin(false);
    }

    const contextValue = {
        handlingLogin: handlingLogin, 
        handlingLogout: handlingLogout,
        userLogin: userLogin,
    }

    return <UserContext.Provider value={contextValue}>
        {props.children}
    </UserContext.Provider>
}

export {
    UserContextProvider,
    UserContext,
}
