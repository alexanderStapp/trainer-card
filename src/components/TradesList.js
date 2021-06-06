import axios from 'axios'
import {useEffect, useState} from 'react'

function TradesList(props) {
    const [budTrades, setBudTrades] = useState([])

    useEffect(() => {
        axios.get(`api/trade/${props.buddy_id}`)
            .then(res => {
                setBudTrades(res.data)
            }).catch(err => console.log(err))
    }, [props.buddy])

    return (
        <div>
            <p>TRADES</p>
            {budTrades.map(e => {
                return(
                    <div className='bud-trade-item' key={e.trade_id}>
                        <div>looking for {e.name1}</div>
                        <div>willing to trade {e.name2}</div>
                    </div>
                )
            })}
        </div>
    )

}

export default TradesList