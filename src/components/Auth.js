import {useContext, useState} from 'react'
import {UserContext} from '../context/UserContext'

function Auth() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {handleLogin, handleRegister} = useContext(UserContext)
    return (
        <div className='login'>
            <h1>TrainerCard</h1>
            <input className='input' value={username} onChange={e => setUsername(e.target.value)} />
            <input type='password' className='input' value={password} onChange={e => setPassword(e.target.value)} />
            <div className='auth-buttons'>
                <button className='style-button' onClick={() => handleLogin(username, password)}>Login</button>
                <button className='style-button' onClick={() => handleRegister(username, password)}>Register</button>
            </div>
        </div>
    )
}

export default Auth