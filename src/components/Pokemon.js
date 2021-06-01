import {useState, useEffect} from 'react'
import axios from 'axios'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([
        {name: 'loading...'}
    ])
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [nextUrl, setNextUrl] = useState('')

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setPokemon(res.data.results)
                setNextUrl(res.data.next)
            })
    }, [url])

    return (
        <div>
            {pokemon.map(poke => {
                return (
                    <div key={poke.name}>
                        {poke.name}
                    </div>
                )
            })}
            <button onClick={() => setUrl(nextUrl)}>next</button>
        </div>
    )
}

export default Pokemon