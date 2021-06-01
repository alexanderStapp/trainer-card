import axios from 'axios'
import {createContext, useState} from 'react'

export const TradeContext = createContext()

export const TradeProvider = (props) => {
    const [lookingFor, setLookingFor] = useState({name: '(add a pokemon)'})
    const [willing, setWilling] = useState({name: '(add a pokemon)'})

    const handleLooking = (name) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => {
                setLookingFor(res.data)
            })
    }

    const handleWilling = (name) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => {
                setWilling(res.data)
            })
    }

    const handleSubmit = (user_id, lookingFor, willing, notes) => {
        axios.post('api/trade', {user_id, lookingFor, willing, notes})
            .then(
                setLookingFor(''),
                setWilling('')
            ).catch(err => console.log(err))
    }

    return (
        <TradeContext.Provider value={{
            lookingFor,
            willing,
            handleLooking,
            handleWilling,
            handleSubmit
        }}>
            {props.children}
        </TradeContext.Provider>
    )
}