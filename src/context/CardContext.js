import {createContext, useState} from 'react'

export const CardContext = createContext()

export const CardProvider = (props) => {
    const [edit, setEdit] = useState({
        editMode: false
    })

    const toggleEdit = () => {
        setEdit(!edit)
    }

    // const handleSave = () => {

    // }

    return (
        <CardContext.Provider value={{
            edit,
            toggleEdit,
            // handleSave
        }}>
            {props.children}
        </CardContext.Provider>
    )
}