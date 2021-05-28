import axios from 'axios'
import {useContext, useEffect, useState} from 'react'
import {CardContext} from '../context/CardContext'
import {UserContext} from '../context/UserContext'
import {RiPencilFill} from 'react-icons/ri'

function Card(props) {
    const [userInfo, setUserInfo] = useState(null)
    const [editView, setEditView] = useState(false)
    const {handleEdit} = useContext(CardContext)
    const {user} = useContext(UserContext)
    const {username} = props.match.params

    useEffect(() => {
        axios.get(`/api/card/${username}`)
            .then(res => {
                setUserInfo(res.data)
            }).catch(err => console.log(err))
    }, [username])

    useEffect(() => {
        if(user) {
            if(user.username === username) {
                setEditView(true)
            }
        } else {
            setEditView(false)
        }
    }, [username])

    return (
        <div className='trainer-card'>
            {userInfo && (<>
                <img className='card-pic' src={userInfo.profile_pic} alt={userInfo.username} />
                <span className='card-item'>
                    <h2>NAME: </h2>
                    <h2>{userInfo.username}</h2>
                </span>
                <span className='card-item'>
                    <h3>3DS ID: </h3>
                    <h3>{userInfo.threeds.slice(0, 4)}-{userInfo.threeds.slice(4, 8)}-{userInfo.threeds.slice(8, 12)}</h3>
                </span>
                <span className='card-item'>
                    <h3>SWITCH ID: </h3>
                    <h3>{userInfo.switch.slice(0, 4)}-{userInfo.switch.slice(4, 8)}-{userInfo.switch.slice(8, 12)}</h3>
                </span>
            </>)}
            {editView && <button className='edit-save' onClick={handleEdit}><RiPencilFill /></button>}
        </div>
    )
}

export default Card