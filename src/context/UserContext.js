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
                props.history.push('/')
            }).catch(err => console.log(err))
    }

    const handleRegister = (username, password) => {
        axios.post('/auth/register', {username, password})
            .then(res => {
                setUser(res.data)
                props.history.push('/')
            }).catch(err => console.log(err))
    }

    const handleLogout = () => {
        axios.get('/auth/logout')
    }

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            handleLogin,
            handleRegister,
            handleLogout
        }}>
            {props.children}
        </UserContext.Provider>
    )
}