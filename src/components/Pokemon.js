import axios from 'axios'
import {useState, useEffect, useContext} from 'react'
import {TradeContext} from '../context/TradeContext'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [nextUrl, setNextUrl] = useState('')
    const [prevUrl, setPrevUrl] = useState('')
    const {lookingFor, willing, handleLooking, handleWilling, handleSubmit} = useContext(TradeContext)

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setPokemon(res.data.results)
                setNextUrl(res.data.next)
                setPrevUrl(res.data.previous)
            })
    }, [url])

    return (
        <div className='trade-view'>
            <h3>looking for {lookingFor.name}</h3>
            <h3>willing to trade {willing.name}</h3>
            <button onClick={() => handleSubmit(lookingFor.id, lookingFor.name, lookingFor.sprites.front_default, willing.id, willing.name, willing.sprites.front_default)}>submit</button>
            <div className='poke-item'>
                <button onClick={() => handleLooking('any pokemon')}>looking for</button>
                <p>any pokemon</p>
                <button onClick={() => handleWilling('any pokemon')}>willing to trade</button>
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
            <span className='prev-next'>
                {nextUrl && <button onClick={() => setUrl(nextUrl)}>next 20</button>}
                {prevUrl && <button onClick={() => setUrl(prevUrl)}>previous 20</button>}
            </span>
        </div>
    )
}

export default Pokemon