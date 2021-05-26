import axios from 'axios'
import {useState} from 'react'

function Search() {
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([])

    const handleSearch = (search) => {
        axios.get(`/api/search/${search}`)
            .then(res => {
                setUsers([])
                console.log(res.data)
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
                    <h3 key={user.username}>{user.username}</h3>
                )
            })}
        </div>
    )
}

export default Search