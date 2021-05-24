import axios from 'axios'
import {createContext, useState} from 'react'

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        username: null,
        password: null

    })

    const handleLogin = (username, password) => {
        axios.post('/auth/login', {username, password})
            .then(res => {
                setUser(res.data)
            }).catch(err => console.log(err))
    }

    const handleRegister = (username, password) => {
        axios.post('/auth/register', {username, password})
            .then(res => {
                setUser(res.data)
            }).catch(err => console.log(err))
    }

    return (
        <UserContext.Provider value={{
            test: 'hello world',
            user,
            setUser,
            handleLogin,
            handleRegister
        }}>
            {props.children}
        </UserContext.Provider>
    )
}