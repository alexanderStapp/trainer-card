import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import {Link} from 'react-router-dom'

function Auth() {
    const {handleLogin, username, setUsername, password, setPassword} = useContext(UserContext)

    return (
        <form className='login' onSubmit={(e) => handleLogin(username, password, e)}>
            <h1>TrainerCard</h1>
            <input className='input' value={username} onChange={e => setUsername(e.target.value)} />
            <input type='password' className='input' value={password} onChange={e => setPassword(e.target.value)} />
            <div className='auth-buttons'>
                <button className='style-button' type='submit'>Login</button>
                <Link to='/register'>Sign Up</Link>
            </div>
        </form>
    )
}

export default Auth