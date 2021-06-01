import axios from 'axios'
import {useState, useEffect, useContext} from 'react'
import {UserContext} from '../context/UserContext'
import {TradeContext} from '../context/TradeContext'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([
        {name: 'loading...'}
    ])
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [nextUrl, setNextUrl] = useState('')
    const [prevUrl, setPrevUrl] = useState('')
    const {user} = useContext(UserContext)
    const {lookingFor, willing, handleLooking, handleWilling, handleSubmit} = useContext(TradeContext)

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data)
                setPokemon(res.data.results)
                setNextUrl(res.data.next)
                setPrevUrl(res.data.previous)
            })
    }, [url])

    return (
        <div>
            <h3>looking for {lookingFor.name}</h3>
            <h3>willing to trade {willing.name}</h3>
            <div className='poke-item'>
                <button>looking for</button>
                <p>any pokemon</p>
                <button>willing to trade</button>
            </div>
            {pokemon.map(poke => {
                return (
                    <div key={poke.name} className='poke-item'>
                        <button onClick={() => handleLooking(poke.name)}>looking for</button>
                        <p>{poke.name}</p>
                        <button onClick={() => handleWilling(poke.name)}>willing to trade</button>
                    </div>
                )
            })}
            {prevUrl && <button onClick={() => setUrl(prevUrl)}>previous 20</button>}
            {nextUrl && <button onClick={() => setUrl(nextUrl)}>next 20</button>}
        </div>
    )
}

export default Pokemon