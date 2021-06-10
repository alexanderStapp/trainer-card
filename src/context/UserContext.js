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

    const handleLogin = (username, password, e) => {
        e.preventDefault()
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
        axios.put('/api/mail', {username, email})
            .then(res => {
                console.log(res)
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