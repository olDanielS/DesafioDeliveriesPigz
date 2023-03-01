import {useState,createContext} from 'react';

export const AuthContext = createContext();

 function AuthProvider({children}){
    const [user, setUser] = useState<null|object>(null)

     interface UserLogin{
        email: String,
        password: String
    }

    function handleLogin(data: UserLogin){
        if(data.email && data.password){
            setUser(data)
        }
    }

    return(
    <AuthContext.Provider value={{user, handleLogin}}>
        {children}
    </AuthContext.Provider>
)
}
export default AuthProvider;