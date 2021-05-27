import axios from 'axios'
import {createContext, useContext} from 'react'
import {UserContext} from '../context/UserContext'
import {useHistory} from 'react-router-dom'

export const CardContext = createContext()

export const CardProvider = (props) => {
    const {user, setUser} = useContext(UserContext)
    const {push} = useHistory()

    const handleEdit = () => {
        push('/editcard')
    }

    const handleSave = (threedsID, switchID) => {
        axios.put(`/api/card/${user.user_id}`, {threedsID, switchID})
            .then(res => {
                setUser(res.data)
                push(`/${user.username}`)
            }).catch(err => console.log(err))
    }

    return (
        <CardContext.Provider value={{
            handleEdit,
            handleSave
        }}>
            {props.children}
        </CardContext.Provider>
    )
}