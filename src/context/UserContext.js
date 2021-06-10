import axios from 'axios'
import {createContext, useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState(null)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {push} = useHistory()

    useEffect(() => {
        axios.get('/auth/me')
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleLogin = (username, password) => {
        axios.post('/auth/login', {username, password})
            .then(res => {
                setUser(res.data)
                push('/dash')
            }).catch(err => console.log(err))
    }

    const handleRegister = (username, email, password) => {
        axios.post('/auth/register', {username, email, password})
            .then(res => {
                setUser(res.data)
                push('/dash')
            }).catch(err => console.log(err))
        axios.get('/api/mail', {username, email})
    }

    const handleLogout = () => {
        axios.get('/auth/logout')
        setUser(null)
    }

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            username,
            setUsername,
            email,
            setEmail,
            password,
            setPassword,
            handleLogin,
            handleRegister,
            handleLogout,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}