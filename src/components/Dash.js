import axios from 'axios'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Dash() {
    const [buddies, setBuddies] = useState([])
    const [budTrades, setBudTrades] = useState([])
    
    useEffect(() => {
        axios.get('/api/dash')
            .then(res => {
                setBuddies(res.data)
                console.log(res.data)
            }).catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if(buddies) {
            buddies.forEach(bud => {
                axios.get(`api/trade/${bud.user_buddy}`)
                    .then(res => {
                        setBudTrades(current => [...current, res.data])
                    }).catch(err => console.log(err))
            })
        }
    }, [buddies])

    console.log(budTrades)

    return buddies.length === 0 ? (
        <div>
            <h2>buddies</h2>
            <p>search a user and hit 'add buddy' to add them to your buddies list</p>
        </div>
    ) : (
        <div className='buddies-view'>
            <h2>buddies</h2>
            <div className='buddy-list'>
                {buddies.map(buddy => {
                    return (
                        <span className='buddy-item' key={buddy.user_buddy}>
                            <span className='buddy-profile'>
                                <img src={buddy.chibi} alt={buddy.username} key={buddy.pic} />
                                <Link to={`/${buddy.username}`} key={buddy.username}>{buddy.username}</Link>
                            </span>
                            {budTrades.filter(trade => trade.user_id === buddy.user_buddy).map(trade => {
                                return (
                                    <div className='buddy-trade' key={trade.trade_id}>
                                        <p>{trade.name1}</p>
                                    </div>
                                )
                            })}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default Dash