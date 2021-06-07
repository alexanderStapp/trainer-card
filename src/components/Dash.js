import axios from 'axios'
import {useEffect, useContext} from 'react'
import {BuddyContext} from '../context/BuddyContext'
import {Link} from 'react-router-dom'
import TradesList from './TradesList'

function Dash() {
    const {buddies, setBuddies, removeBuddy} = useContext(BuddyContext)
    
    useEffect(() => {
        axios.get('/api/dash')
            .then(res => {
                setBuddies(res.data)
            }).catch(err => console.log(err))
    }, [])

    return buddies.length === 0 ? (
        <div>
            <h2>buddies</h2>
            <p>search a user and hit 'add buddy' to add them to your buddies list</p>
        </div>
    ) : (
        <div className='buddies-view'>
            <h2>buddies</h2>
            {buddies.map(buddy => {
                return (
                    <span className='buddy-item' key={buddy.user_buddy}>
                        <span className='buddy-profile'>
                            <img src={buddy.chibi} alt={buddy.username} key={buddy.pic} />
                            <Link to={`/${buddy.username}`} key={buddy.username}>{buddy.username}</Link>
                            <button onClick={() => removeBuddy(buddy.buddy_id)}>remove buddy</button>
                        </span>
                        <TradesList buddy_id={buddy.user_buddy} />
                    </span>
                )
            })}
        </div>
    )
}

export default Dash