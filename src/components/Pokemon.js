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
        <div className='poke-view'>
            <div className='trade-launch'>
                <span className='poke-launch'>
                    <h4>looking for</h4>
                    <h3>{lookingFor.name}</h3>
                    <img src={lookingFor.sprites.front_default} alt={lookingFor.name}/>
                </span>
                <button onClick={() => handleSubmit(lookingFor.id, lookingFor.name, lookingFor.sprites.front_default, willing.id, willing.name, willing.sprites.front_default)}>submit</button>
                <span className='poke-launch'>
                    <h4>willing to trade</h4>
                    <h3>{willing.name}</h3>
                    <img src={willing.sprites.front_default} alt={lookingFor.name}/>
                </span>
            </div>
            <div className='poke-list'>
                <div className='poke-item'>
                    <button onClick={() => handleLooking('any pokemon')}>looking</button>
                    <p>any pokemon</p>
                    <button onClick={() => handleWilling('any pokemon')}>trading</button>
                </div>
                {pokemon.map(poke => {
                    return (
                        <div key={poke.name} className='poke-item'>
                            <button onClick={() => handleLooking(poke.name)}>looking</button>
                            <p>{poke.name}</p>
                            <button onClick={() => handleWilling(poke.name)}>trading</button>
                        </div>
                    )
                })}
                <span className='prev-next'>
                    {nextUrl && <button onClick={() => setUrl(nextUrl)}>next 20</button>}
                    {prevUrl && <button onClick={() => setUrl(prevUrl)}>previous 20</button>}
                </span>
            </div>
        </div>
    )
}

export default Pokemon