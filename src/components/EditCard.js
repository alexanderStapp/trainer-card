import {useContext, useState} from 'react'
import {CardContext} from '../context/CardContext'
import {UserContext} from '../context/UserContext'
import {useHistory} from 'react-router-dom'
import {RiSave2Fill, RiArrowLeftFill} from 'react-icons/ri'

function EditCard(props) {
    const [threedsID, setThreedsID] = useState('')
    const [switchID, setSwitchID] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const {handleSave} = useContext(CardContext)
    const {user} = useContext(UserContext)
    const {push} = useHistory()

    return (
        <div className='trainer-card'>
            <span className='card-item'>
                <h2>NAME: </h2>
                <h2>{user.username}</h2>
            </span>
            <input value={threedsID} onChange={e => setThreedsID(e.target.value)} />
            <input value={switchID} onChange={e => setSwitchID(e.target.value)} />
            <input value={profilePic} onChange={e => setProfilePic(e.target.value)} />
            <button className='undo' onClick={() => push(`/${user.username}`)}><RiArrowLeftFill /></button>
            <button className='edit-save' onClick={() => handleSave(threedsID, switchID)}><RiSave2Fill /></button>
        </div>
    )
}

export default EditCard