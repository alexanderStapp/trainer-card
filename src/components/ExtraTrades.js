import {useContext} from 'react'
import {TradeContext} from '../context/TradeContext'
import {RiCloseCircleFill} from 'react-icons/ri'

function ExtraTrades(props) {
    const {tradesExtra, handleDelete} = useContext(TradeContext)

    return (
        <div className='trade-extra'>
            {tradesExtra.map(trade => {
                return (
                    <div key={trade.trade_id} className='trade-item-extra'>
                        <div className='icon-wrapper'>
                            <img className='looking-icon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${trade.poke_id1}.png`} alt={trade.name1}/>
                        </div>
                        <span className='trade-message'>
                            <h3 className='looking-for'>looking for {trade.name1}</h3>
                            <h3 className='willing-to'>willing to trade {trade.name2}</h3>
                        </span>
                            {props.editView && <button className='delete-trade' onClick={(e) => {
                                handleDelete(trade.trade_id)
                                e.stopPropagation()
                            }}><RiCloseCircleFill /></button>}
                            <div className='icon-wrapper'>
                                <img className='willing-icon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${trade.poke_id2}.png`} alt={trade.name2}/>
                            </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ExtraTrades