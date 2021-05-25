import { useContext } from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../context/UserContext'

const Header = () => {
    const {handleLogout} = useContext(UserContext)
    return (
        <header>
            <Link to='/'>Feed</Link>
            <Link to='/card'>Card</Link>
            <Link to='/auth' onClick={handleLogout}>Logout</Link>
        </header>
    )
}

export default Header