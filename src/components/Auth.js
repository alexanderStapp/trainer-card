import {useContext, useState} from 'react'
import {UserContext} from '../context/UserContext'

function Auth() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {user, handleLogin, handleRegister} = useContext(UserContext)
    console.log(user)
    return (
        <div>
            <input value={username} onChange={e => setUsername(e.target.value)} />
            <input value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={() => handleLogin(username, password)}>Login</button>
            <button onClick={() => handleRegister(username, password)}>Register</button>
        </div>
    )
}

export default Auth