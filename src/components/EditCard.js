import {useContext, useEffect, useState} from 'react'
import {CardContext} from '../context/CardContext'
import {UserContext} from '../context/UserContext'
import {useHistory} from 'react-router-dom'
import {RiSave2Fill, RiArrowLeftFill} from 'react-icons/ri'
import InputMask from 'react-input-mask'
import axios from 'axios'


function EditCard() {
    const {user, setUser} = useContext(UserContext)
    const [threedsID, setThreedsID] = useState('')
    const [switchID, setSwitchID] = useState('')
    const [homeID, setHomeID] = useState('')
    const [profilePic, setProfilePic] = useState(user.pic)
    const {handleSave} = useContext(CardContext)
    const {push} = useHistory()

    useEffect(() => {
        axios.get(`/api/card/${user.username}`)
            .then(res => {
                setUser(res.data)
            }).catch(err => console.log(err))
    }, [])

    return (
        <div className='trainer-edit extra'>
            <span className='card-name'>
                <h3>NAME: </h3>
                <h3>{user.username}</h3>
            </span>
            <span className='card-threeds'>
                <h3>3DS ID:</h3>
                <InputMask
                    mask="9999-9999-9999"
                    maskChar=' '
                    alwaysShowMask='false'
                    value={threedsID}
                    onChange={e => setThreedsID(e.target.value)}
                />
            </span>
            <span className='card-switch'>
                <h3>SWITCH ID:</h3>
                <InputMask
                    mask="9999-9999-9999"
                    maskChar=' '
                    alwaysShowMask='false'
                    value={switchID}
                    onChange={e => setSwitchID(e.target.value)}
                />
            </span>
            <span className='card-home'>
                <h3>HOME ID:</h3>
                <InputMask
                    mask="aaaaaaaaaaaa"
                    maskChar=' '
                    alwaysShowMask='false'
                    value={homeID}
                    onChange={e => setHomeID(e.target.value)}
                />
            </span>
            <select className='edit-pic' onChange={e => setProfilePic(e.target.value)}>
                <option value={user.pic}>select an option</option>
                <option value={3}>red</option>
                <option value={6}>ethan</option>
                <option value={7}>lyra</option>
                <option value={1}>brendan</option>
                <option value={5}>may</option>
                <option value={4}>lucas</option>
                <option value={2}>dawn</option>
            </select>
            <button className='undo-qr' onClick={() => push(`/${user.username}`)}><RiArrowLeftFill /></button>
            <button className='edit-save' onClick={() => handleSave(threedsID, switchID, homeID, profilePic)}><RiSave2Fill /></button>
        </div>
    )
}

export default EditCard