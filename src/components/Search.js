import axios from 'axios'
import {useContext, useState} from 'react'
import {BuddyContext} from '../context/BuddyContext'
import {Link} from 'react-router-dom'

function Search() {
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([])
    const {addBuddy} = useContext(BuddyContext)

    const handleSearch = (search) => {
        axios.get(`/api/search/${search}`)
            .then(res => {
                setUsers([])
                setUsers(res.data)
            }).catch(err => console.log(err))
        }

    return (
        <div>
            <input value={search} onChange={e => setSearch(e.target.value)}/>
            <button onClick={() => handleSearch(search)}>search</button>
            <br />
            {users.map(user => {
                return (
                    <span key={user.user_id}>
                        <Link to={`/${user.username}`} key={user.username}>{user.username}</Link>
                        <button onClick={() => addBuddy(user.user_id)}>add buddy</button>
                    </span>
                )
            })}
        </div>
    )
}

export default Search