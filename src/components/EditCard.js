import {useContext, useState} from 'react'
import {CardContext} from '../context/CardContext'
import {UserContext} from '../context/UserContext'
import {useHistory} from 'react-router-dom'
import {RiSave2Fill, RiArrowLeftFill} from 'react-icons/ri'

function EditCard() {
    const [threedsID, setThreedsID] = useState('')
    const [switchID, setSwitchID] = useState('')
    const {user} = useContext(UserContext)
    const [profilePic, setProfilePic] = useState(user.pic)
    const {handleSave} = useContext(CardContext)
    const {push} = useHistory()

    return (
        <div className='trainer-card'>
            <span className='card-item'>
                <h2>NAME: </h2>
                <h2>{user.username}</h2>
            </span>
            <input
                className='edit-item'
                value={threedsID}
                onChange={e => setThreedsID(e.target.value)}
                placeholder='3DS friend code'
            />
            <input
                className='edit-item'
                value={switchID}
                onChange={e => setSwitchID(e.target.value)}
                placeholder='Switch friend code'
            />
            <select className='edit-item' onChange={e => setProfilePic(e.target.value)}>
                <option value={user.pic}>select a trainer</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
            <button className='undo-qr' onClick={() => push(`/${user.username}`)}><RiArrowLeftFill /></button>
            <button className='edit-save' onClick={() => handleSave(threedsID, switchID, profilePic)}><RiSave2Fill /></button>
        </div>
    )
}

export default EditCard