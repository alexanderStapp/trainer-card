import {useContext, useState, useEffect} from 'react'
import {CardContext} from '../context/CardContext'
import {UserContext} from '../context/UserContext'
import {useHistory} from 'react-router-dom'
import {RiSave2Fill, RiArrowLeftFill} from 'react-icons/ri'
import InputMask from 'react-input-mask'

function EditCard() {
    const {user} = useContext(UserContext)
    const [threedsID, setThreedsID] = useState('')
    const [switchID, setSwitchID] = useState('')
    const [homeID, setHomeID] = useState('')
    const [profilePic, setProfilePic] = useState(user.pic)
    const {handleSave} = useContext(CardContext)
    const {push} = useHistory()


    return (
        <div className='trainer-card'>
            <span className='card-name'>
                <h3>NAME: </h3>
                <h3>{user.username}</h3>
            </span>
            <InputMask
                className='edit-threeds'
                mask="9999-9999-9999"
                maskChar=' '
                alwaysShowMask='false'
                value={threedsID}
                onChange={e => setThreedsID(e.target.value)}
            />
            <InputMask
                className='edit-switch'
                mask="9999-9999-9999"
                maskChar=' '
                alwaysShowMask='false'
                value={switchID}
                onChange={e => setSwitchID(e.target.value)}
            />
            <input
                className='edit-home'
                value={homeID}
                onChange={e => setHomeID(e.target.value)}
            />
            <select className='edit-pic' onChange={e => setProfilePic(e.target.value)}>
                <option value={user.pic}>select an option</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
            <button className='undo-qr' onClick={() => push(`/${user.username}`)}><RiArrowLeftFill /></button>
            <button className='edit-save' onClick={() => handleSave(threedsID, switchID, homeID, profilePic)}><RiSave2Fill /></button>
        </div>
    )
}

export default EditCard