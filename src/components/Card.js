import axios from 'axios'
import {useContext, useEffect, useState} from 'react'
import {CardContext} from '../context/CardContext'
import {UserContext} from '../context/UserContext'
import {RiPencilFill, RiQrCodeFill} from 'react-icons/ri'

function Card(props) {
    const [userInfo, setUserInfo] = useState(null)
    const [editView, setEditView] = useState(false)
    const [trades, setTrades] = useState({})
    const {handleEdit} = useContext(CardContext)
    const {user} = useContext(UserContext)
    const {username} = props.match.params

    useEffect(() => {
        axios.get(`/api/card/${username}`)
            .then(res => {
                setUserInfo(res.data)
            }).catch(err => console.log(err))
        axios.get(`api/trade/${user.user_id}`)
            .then(res => {
                setTrades(res.data)
                console.log(res.data)
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
                <span className='card-name'>
                    <h3>NAME:</h3>
                    <h3>{userInfo.username}</h3>
                </span>
                <span className='card-threeds'>
                    <h3>3DS ID:</h3>
                    <h3>{userInfo.threeds}</h3>
                </span>
                <span className='card-switch'>
                    <h3>SWITCH ID:</h3>
                    <h3>{userInfo.switch}</h3>
                </span>
                <span className='card-home'>
                    <h3>HOME ID:</h3>
                    <h3>{userInfo.home.toUpperCase()}</h3>
                </span>
                <div>
                    {trades.map(trade => {
                        return (
                            <div className='trade-item'>
                                <h3>looking for {trade.poke_id1} willing to trade {trade.poke_id2}</h3>
                            </div>
                        )
                    })}
                </div>
            </>)}
            <button className='undo-qr'><RiQrCodeFill /></button>
            {editView && <button className='edit-save' onClick={handleEdit}><RiPencilFill /></button>}
        </div>
    )
}

export default Card