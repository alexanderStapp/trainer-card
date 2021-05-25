import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../context/UserContext'

const Header = () => {
    const {user, handleLogout} = useContext(UserContext)

    return user ? (
        <header className='header'>
                <h3>{user.username}</h3>
                <Link to='/'>Feed</Link>
                <Link to='/card'>Card</Link>
                <Link to='/auth' onClick={handleLogout}>Logout</Link>
        </header>
    ) : (
        <header className='header'>
                <Link to='/'>Feed</Link>
                <Link to='/card'>Card</Link>
                <Link to='/auth' onClick={handleLogout}>Logout</Link>
        </header>  
    )
}

export default Header