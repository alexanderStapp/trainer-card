import axios from 'axios'
import {useContext, useState} from 'react'
import {BuddyContext} from '../context/BuddyContext'
import {UserContext} from '../context/UserContext'
import {Link} from 'react-router-dom'

function Search() {
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([])
    const {buddies, addBuddy} = useContext(BuddyContext)
    const {user} = useContext(UserContext)

    const handleSearch = (search) => {
        axios.get(`/api/search/${search}`)
            .then(res => {
                setUsers([])
                setUsers(res.data)
            }).catch(err => console.log(err))
        }

    return (
        <div>
            <form className='search-form'>
                <input className='input' value={search} onChange={e => setSearch(e.target.value)}/>
                <button className='search-button' onClick={() => handleSearch(search)}>search</button>
            </form>
            <br />
            <div className='search-list'>
                {users.map(search => {
                    return (
                        <span className='search-item' key={search.user_id}>
                            <Link to={`/${search.username}`} key={search.username}>{search.username}</Link>
                            {user.username === search.username ? <Link to={`/${user.username}`} className='add-buddy'>go to card</Link>
                                : !buddies.some(e => e.user_buddy === search.user_id) ? <button className='add-buddy' onClick={() => addBuddy(search.user_id)}>add buddy</button>
                                : <button className='added'>added</button>
                            }
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default Search