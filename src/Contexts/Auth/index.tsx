import { useState, createContext, ReactNode } from 'react';

type UserProps = {
    email: String;
    password: String
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({});

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>({
        email: '',
        password: ''
    })

    const isAuthenticated = !!user.email;


    function handleLogin({email, password}: UserProps) {
       setUser({email, password})
       
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin,isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;