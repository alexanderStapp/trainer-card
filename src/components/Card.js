import axios from 'axios'
import {useContext, useEffect, useState} from 'react'
import {CardContext} from '../context/CardContext'
import {UserContext} from '../context/UserContext'
import {TradeContext} from '../context/TradeContext'
import ExtraTrades from './ExtraTrades'
import {RiPencilFill, RiQrCodeFill} from 'react-icons/ri'
import {useSpring, useTrail, animated} from 'react-spring'
import {Link} from 'react-router-dom'

function Card(props) {
    const [userInfo, setUserInfo] = useState(null)
    const [editView, setEditView] = useState(false)
    const [flipped, setFlip] = useState(false)
    const {handleEdit} = useContext(CardContext)
    const {user} = useContext(UserContext)
    const {initTrades, setInitTrades, tradesMain, setTradesMain, tradesExtra, setTradesExtra, handleDelete} = useContext(TradeContext)
    const {username} = props.match.params
    const {transform, opacity} = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(2000px) rotateY(${flipped ? 180 : 0}deg)`,
    })

    useEffect(() => {
        axios.get(`/api/card/${username}`)
            .then(res => {
                setUserInfo(res.data)
            }).catch(err => console.log(err))
    }, [username])

    useEffect(() => {
        if(userInfo) {
            axios.get(`api/trade/${userInfo.user_id}`)
                .then(res => {
                    setInitTrades(res.data)
                }).catch(err => console.log(err))
        }
    }, [userInfo])

    useEffect(() => {
        if(initTrades) {
            if(initTrades.length > 2) {
                setTradesMain(initTrades.slice(2, initTrades.length))
                setTradesExtra(initTrades.splice(0, 2))
            } else {
                setTradesMain(initTrades)
            }
        }
    }, [initTrades])

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
        <div onClick={() => setFlip(flipped => !flipped)} className='trainer-card extra-card'>
            <animated.div className="front trainer-card" style={{opacity: opacity.to(o => 1 - o), transform}} >
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
                </>)}
            </animated.div>
            <animated.div className="back trainer-card" style={{opacity, transform: transform.to(t => `${t} rotateY(180deg)`)}}>
                {tradesMain.map(trade => {
                    return (
                        <div key={trade.trade_id} className='trade-item-main'>
                            <img className='looking-pic' src={trade.sprite1} alt={trade.name1}/>
                            <span className='trade-message'>
                                <h3 className='looking-for'>looking for {trade.name1}</h3>
                                <h3 className='willing-to'>willing to trade {trade.name2}</h3>
                            </span>
                            {editView && <button className='delete-trade' onClick={(e) => {
                                handleDelete(trade.trade_id)
                                e.stopPropagation()
                            }}>remove trade</button>}
                            <img className='willing-pic' src={trade.sprite2} alt={trade.name2}/>
                        </div>
                    )
                })}
                <ExtraTrades editView={editView}/>
                {editView && <Link to='/pokemon' className='add-trade'>add a trade</Link>}
            </animated.div>
            <button className='undo-qr'><RiQrCodeFill /></button>
            {editView && <button className='edit-save' onClick={handleEdit}><RiPencilFill /></button>}
        </div>
    )
}

export default Card