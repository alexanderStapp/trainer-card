import axios from 'axios'
import {createContext, useState} from 'react'


export const BuddyContext = createContext()

export const BuddyProvider = (props) => {
    const [buddies, setBuddies] = useState([])

    const addBuddy = (buddy) => {
        axios.post(`/api/dash/${buddy}`)
    }
    const removeBuddy = (buddy) => {
        axios.delete(`/api/dash/${buddy}`)
            .then(res => {
                setBuddies(res.data)
            }).catch(err => console.log(err))
    }

    return (
        <BuddyContext.Provider value={{
            buddies,
            setBuddies,
            addBuddy,
            removeBuddy
        }}>
            {props.children}
        </BuddyContext.Provider>
    )
}