import {useContext, useEffect, useState} from 'react'
import {CardContext} from '../context/CardContext'
import {UserContext} from '../context/UserContext'

function Card() {
    const [threedsID, setThreedsID] = useState('')
    const [switchID, setSwitchID] = useState('')
    const {edit, toggleEdit, handleSave} = useContext(CardContext)
    const {user} = useContext(UserContext)

    return !edit ? (
        <div>
            <h1>{user.username}</h1>
            <input value={threedsID} onChange={e => setThreedsID(e.target.value)} />
            <input value={switchID} onChange={e => setSwitchID(e.target.value)} />
            <button onClick={handleSave(threedsID, switchID)}>Save</button>
        </div>
    ) : (
        <div>
            <h1>{user.username}</h1>
            <h2>{user.threeds.slice(0, 4)}-{user.threeds.slice(4, 8)}-{user.threeds.slice(8, 12)}</h2>
            <h2>{user.switch.slice(0, 4)}-{user.switch.slice(4, 8)}-{user.switch.slice(8, 12)}</h2>
            <img src={user.profile_pic} alt={user.username} />
            <button onClick={toggleEdit}>Edit</button>
        </div>
    )
}

export default Card