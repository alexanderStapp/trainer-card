import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {UserContext} from '../context/UserContext'

const Header = () => {
    const {user, handleLogout} = useContext(UserContext)

    return user ? (
        <header className='header'>
                <h3>{user.username}</h3>
                <Link to='/dash'>DASHBOARD</Link>
                <Link to={`/${user.username}`}>CARD</Link>
                <Link to='/search'>SEARCH</Link>
                <Link to='/' onClick={handleLogout}>LOGOUT</Link>
        </header>
    ) : (
        <header className='header'>
            <h2>TrainerCard</h2>
            <Link to='/' onClick={handleLogout}>Login</Link>
        </header>
    )
}

export default Header