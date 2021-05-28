import axios from 'axios'
import {createContext, } from 'react'


export const BuddyContext = createContext()

export const BuddyProvider = (props) => {

    const addBuddy = (buddy) => {
        axios.post(`/api/dash/${buddy}`)
    }

    return (
        <BuddyContext.Provider value={{
            addBuddy
        }}>
            {props.children}
        </BuddyContext.Provider>
    )
}