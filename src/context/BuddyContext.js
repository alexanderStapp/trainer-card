import axios from 'axios'
import {createContext, useState} from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const BuddyContext = createContext()

toast.configure()

export const BuddyProvider = (props) => {
    const [buddies, setBuddies] = useState([])
    const addSuccess = () => toast.success('buddy added!')

    const addBuddy = (buddy) => {
        axios.post(`/api/dash/${buddy}`)
        .then(addSuccess()).catch(err => console.log(err))
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