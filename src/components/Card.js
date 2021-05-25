import {useContext, useState} from 'react'
import {CardContext} from '../context/CardContext'

function Card(props) {
    const [card, setCard] = useState([])
    const {edit, toggleEdit} = useContext(CardContext)
    return (
        <div>
        </div>
    )
}

export default Card