import axios from 'axios'
import {createContext, useState} from 'react'


export const BuddyContext = createContext()

export const BuddyProvider = (props) => {
    const [buddies, setBuddies] = useState([])

    const addBuddy = (buddy) => {
        axios.post(`/api/dash/${buddy}`)
    }

    return (
        <BuddyContext.Provider value={{
            buddies,
            setBuddies,
            addBuddy
        }}>
            {props.children}
        </BuddyContext.Provider>
    )
}