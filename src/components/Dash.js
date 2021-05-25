import {useContext} from 'react'
import {UserContext} from '../context/UserContext'

function Dash() {
    const {user} = useContext(UserContext)
    console.log(user)
    return (
        <div>
            feed
        </div>
    )
}

export default Dash