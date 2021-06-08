import axios from 'axios'
import {createContext, useContext, useState} from 'react'
import {UserContext} from './UserContext'
import {useHistory} from 'react-router-dom'

export const CardContext = createContext()

export const CardProvider = (props) => {
    const [userInfo, setUserInfo] = useState(null)
    const {user, setUser} = useContext(UserContext)
    const {push} = useHistory()

    const handleEdit = () => {
        push('/editcard')
    }

    const handleSave = (threedsID, switchID, homeID, profile_pic) => {
        axios.put(`/api/card/${user.user_id}`, {threedsID, switchID, homeID, profile_pic})
            .then(res => {
                setUser(res.data)
                push(`/${user.username}`)
            }).catch(err => console.log(err))
    }

    return (
        <CardContext.Provider value={{
            userInfo,
            setUserInfo,
            handleEdit,
            handleSave,
        }}>
            {props.children}
        </CardContext.Provider>
    )
}