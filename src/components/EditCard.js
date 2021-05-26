import {useContext, useState} from 'react'
import {CardContext} from '../context/CardContext'
import {UserContext} from '../context/UserContext'

function EditCard() {
    const [threedsID, setThreedsID] = useState('')
    const [switchID, setSwitchID] = useState('')
    const {handleSave} = useContext(CardContext)
    const {user} = useContext(UserContext)

    return (
        <div>
            <h1>{user.username}</h1>
            <input value={threedsID} onChange={e => setThreedsID(e.target.value)} />
            <input value={switchID} onChange={e => setSwitchID(e.target.value)} />
            <button onClick={() => handleSave(threedsID, switchID)}>Save</button>
        </div>
    )
}

export default EditCard