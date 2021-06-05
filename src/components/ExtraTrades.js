import {useContext} from 'react'
import {TradeContext} from '../context/TradeContext'

function ExtraTrades(props) {
    const {tradesExtra, setTradesExtra, handleDelete} = useContext(TradeContext)
    console.log(tradesExtra)
    return (
        <div className='trade-extra'>
            {tradesExtra.map(trade => {
                return (
                    <div key={trade.trade_id} className='trade-item-extra'>
                        <img className='looking-pic' src={trade.sprite1} alt={trade.name1}/>
                        <span className='trade-message'>
                            <h3 className='looking-for'>looking for {trade.name1}</h3>
                            <h3 className='willing-to'>willing to trade {trade.name2}</h3>
                        </span>
                        {props.editView && <button className='delete-trade-extra' onClick={(e) => {
                            handleDelete(trade.trade_id)
                            e.stopPropagation()
                        }}>remove trade</button>}
                        <img className='willing-pic' src={trade.sprite2} alt={trade.name2}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ExtraTrades