import axios from 'axios'
import {useContext, useEffect, useState} from 'react'
import {CardContext} from '../context/CardContext'
import {UserContext} from '../context/UserContext'

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
            })
            .catch(err => console.log(err))
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
        <div>
            {userInfo && (
                <>
                    <h1>{userInfo.username}</h1>
                    <h2>{userInfo.threeds.slice(0, 4)}-{userInfo.threeds.slice(4, 8)}-{userInfo.threeds.slice(8, 12)}</h2>
                    <h2>{userInfo.switch.slice(0, 4)}-{userInfo.switch.slice(4, 8)}-{userInfo.switch.slice(8, 12)}</h2>
                    <img src={userInfo.profile_pic} alt={userInfo.username} />
                </>
            )}
            {editView && <button onClick={handleEdit}>Edit</button>}
        </div>
    )
}

export default Card