import axios from 'axios'
import {createContext, useContext, useState} from 'react'
import {UserContext} from '../context/UserContext'

export const CardContext = createContext()

export const CardProvider = (props) => {
    const {user, setUser} = useContext(UserContext)
    const [edit, setEdit] = useState(false)

    const toggleEdit = () => {
        setEdit(!edit)
    }

    const handleSave = (threedsID, switchID) => {
        axios.put(`/api/card/${user.user_id}`, {threedsID, switchID})
            .then(res => setUser(res.data)).catch(err => console.log(err))
        toggleEdit()
    }

    return (
        <CardContext.Provider value={{
            edit,
            toggleEdit,
            handleSave
        }}>
            {props.children}
        </CardContext.Provider>
    )
}