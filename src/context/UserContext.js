import axios from 'axios'
import {createContext, useState} from 'react'
import {useHistory} from 'react-router-dom'

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState(null)
    const {push} = useHistory()

    const handleLogin = (username, password) => {
        axios.post('/auth/login', {username, password})
            .then(res => {
                setUser(res.data)
                push('/')
            }).catch(err => console.log(err))
    }

    const handleRegister = (username, password) => {
        axios.post('/auth/register', {username, password})
            .then(res => {
                setUser(res.data)
                push('/')
            }).catch(err => console.log(err))
    }

    const handleLogout = () => {
        axios.get('/auth/logout')
        setUser(null)
    }

    // const handleSave = (threedsID, switchID) => {
    //     axios.put(`/api/card/${user.user_id}`, {threedsID, switchID})
    //         .then(res => setUser(...user, res.data)).catch(err => console.log(err))
    // }

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            handleLogin,
            handleRegister,
            handleLogout,
            // handleSave
        }}>
            {props.children}
        </UserContext.Provider>
    )
}