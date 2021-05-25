import {useContext} from 'react'
import {CardContext} from '../context/CardContext'
import {UserContext} from '../context/UserContext'

function Card() {
    const {edit, toggleEdit} = useContext(CardContext)
    const {user} = useContext(UserContext)
    return !edit ? (
        <div>
            <h1>{user.username}</h1>
            <button onClick={toggleEdit}>Save</button>
        </div>
    ) : (
        <div>
            <h1>{user.username}</h1>
            <h2>{user.threeds}</h2>
            <h2>{user.switch}</h2>
            <img src={user.profile_pic} alt={user.username} />
            <button onClick={toggleEdit}>Edit</button>
        </div>
    )
}

export default Card