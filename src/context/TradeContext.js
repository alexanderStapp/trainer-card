import axios from 'axios'
import {createContext, useState} from 'react'

export const TradeContext = createContext()

export const TradeProvider = (props) => {
    const anyPokemon = {
        id: 0,
        name: 'any pokemon',
        sprites: {front_default: 'https://cdn2.bulbagarden.net/upload/8/8e/Spr_3r_000.png'},
    }
    const [lookingFor, setLookingFor] = useState(anyPokemon)
    const [willing, setWilling] = useState(anyPokemon)

    const handleLooking = (name) => {
        name === 'any pokemon'
        ? setLookingFor(anyPokemon)
        : axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => {
                setLookingFor(res.data)
            }).catch(err => console.log(err))
    }

    const handleWilling = (name) => {
        name === 'any pokemon'
        ? setWilling(anyPokemon)
        : axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => {
                setWilling(res.data)
            }).catch(err => console.log(err))
    }

    const handleSubmit = (lookingFor, lookingName, lookingSprite, willing, willingName, willingSprite) => {
        axios.post('api/trade', {lookingFor, lookingName, lookingSprite, willing, willingName, willingSprite})
            .then(
                setLookingFor(anyPokemon),
                setWilling(anyPokemon)
            ).catch(err => console.log(err))
    }

    const handleDelete = (tradeID) => {
        axios.delete(`/api/trade/${tradeID}`)
    }

    return (
        <TradeContext.Provider value={{
            lookingFor,
            willing,
            handleLooking,
            handleWilling,
            handleSubmit,
            handleDelete
        }}>
            {props.children}
        </TradeContext.Provider>
    )
}