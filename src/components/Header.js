import {Link} from 'react-router-dom'
import {useState} from 'react'
import {useContext} from 'react'
import {UserContext} from '../context/UserContext'

const Header = () => {
    const [nav, setNav] = useState(false)
    const {user, handleLogout} = useContext(UserContext)

    const handleNavToggle = () => {
        setNav(!nav)
    }

    return user ? (
        <div className='nav'>
            <header className='header'>
                    <h3>{user.username}</h3>
                    <Link to='/dash'>DASHBOARD</Link>
                    <Link to={`/${user.username}`}>CARD</Link>
                    <Link to='/search'>SEARCH</Link>
                    <Link to='/chat'>CHAT</Link>
                    <Link to='/' onClick={handleLogout}>LOGOUT</Link>
            </header>
            <nav className='mob-nav'>
                <button className='nav-close' onClick={() => handleNavToggle()}>open</button>
                <ul className={`menu-nav ${nav ? ' show-menu' : ''}`}>
                    <button className='nav-open' onClick={() => handleNavToggle()}>close</button>
                    <Link to='/dash' onClick={() => handleNavToggle()}>DASHBOARD</Link>
                    <Link to={`/${user.username}`} onClick={() => handleNavToggle()}>CARD</Link>
                    <Link to='/search' onClick={() => handleNavToggle()}>SEARCH</Link>
                    <Link to='/chat' onClick={() => handleNavToggle()}>CHAT</Link>
                    <Link to='/' onClick={() => {
                        handleNavToggle()
                        handleLogout()
                    }}>LOGOUT</Link>
                </ul>
            </nav>
        </div>
    ) : (
        <header className='header'>
            <h2>TrainerCard</h2>
            <Link to='/' onClick={handleLogout}>Login</Link>
        </header>
    )
}

export default Header