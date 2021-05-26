import axios from 'axios'
import {useState} from 'react'
import {Link} from 'react-router-dom'

function Search() {
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([])

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
                    <Link to={`/${user.username}`} key={user.username}>{user.username}</Link>
                )
            })}
        </div>
    )
}

export default Search