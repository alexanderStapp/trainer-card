import {useContext} from 'react'
import {UserContext} from '../context/UserContext'

function Register() {
    const {handleRegister, username, setUsername, email, setEmail, password, setPassword} = useContext(UserContext)

    return (
        <form className='register'>
            <h1>Sign Up</h1>
            <input className='input' placeholder='username' value={username} onChange={e => setUsername(e.target.value)} />
            <input className='input' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
            <input type='password' placeholder='password' className='input' value={password} onChange={e => setPassword(e.target.value)} />
            <div className='auth-buttons'>
                <button className='style-button' onClick={() => handleRegister(username, email, password)}>Register</button>
            </div>
        </form>
    )
}

export default Register