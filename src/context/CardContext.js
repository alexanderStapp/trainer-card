import axios from 'axios'
import {createContext, useContext, useState} from 'react'
import {UserContext} from '../context/UserContext'

export const CardContext = createContext()

export const CardProvider = (props) => {
    const {user} = useContext(UserContext)
    const [card, setCard] = useState({})
    const [edit, setEdit] = useState({
        editMode: false
    })

    const toggleEdit = () => {
        setEdit(!edit)
    }

    const handleSave = (threedsID, switchID) => {
        axios.put(`/api/card/${user.user_id}`, {threedsID, switchID})
            .then(res => setCard(res.data)).catch(err => console.log(err))
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