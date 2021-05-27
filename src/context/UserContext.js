import axios from 'axios'
import {createContext, useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState(null)
    const {push} = useHistory()

    useEffect(() => {
        axios.get('/auth/me')
            .then( res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleLogin = (username, password) => {
        axios.post('/auth/login', {username, password})
            .then(res => {
                setUser(res.data)
                push('/dash')
            }).catch(err => console.log(err))
    }

    const handleRegister = (username, password) => {
        axios.post('/auth/register', {username, password})
            .then(res => {
                setUser(res.data)
                push('/dash')
            }).catch(err => console.log(err))
    }

    const handleLogout = () => {
        axios.get('/auth/logout')
        setUser(null)
    }

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            handleLogin,
            handleRegister,
            handleLogout,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}