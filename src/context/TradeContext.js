import axios from 'axios'
import {createContext, useState} from 'react'

export const TradeContext = createContext()

export const TradeProvider = (props) => {
    const [lookingFor, setLookingFor] = useState({name: 'any pokemon', id: 0})
    const [willing, setWilling] = useState({name: 'any pokemon', id: 0})

    const handleLooking = (name) => {
        name === 'any pokemon'
        ? setLookingFor({name: 'any pokemon', id: 0})
        : axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => {
                setLookingFor(res.data)
            }).catch(err => console.log(err))
    }

    const handleWilling = (name) => {
        name === 'any pokemon'
        ? setWilling({name: 'any pokemon', id: 0})
        : axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => {
                setWilling(res.data)
            }).catch(err => console.log(err))
    }

    const handleSubmit = (lookingFor, willing) => {
        axios.post('api/trade', {lookingFor, willing})
            .then(
                setLookingFor({name: 'any pokemon', id: 0}),
                setWilling({name: 'any pokemon', id: 0})
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