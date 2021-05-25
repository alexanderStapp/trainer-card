import {useContext, useState} from 'react'
import {UserContext} from '../context/UserContext'

function Auth() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {handleLogin, handleRegister} = useContext(UserContext)
    return (
        <div className='login'>
            <h1>TrainerCard</h1>
            <input value={username} onChange={e => setUsername(e.target.value)} />
            <input value={password} onChange={e => setPassword(e.target.value)} />
            <div className='auth-buttons'>
                <button onClick={() => handleLogin(username, password)}>Login</button>
                <button onClick={() => handleRegister(username, password)}>Register</button>
            </div>
        </div>
    )
}

export default Auth