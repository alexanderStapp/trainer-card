import {useState, useEffect, useContext} from 'react'
import {UserContext} from '../context/UserContext'
import io from 'socket.io-client'

const Chat = (props) => {
    const [socket, setSocket] = useState(null)
    const {user} = useContext(UserContext)

    useEffect(() => {
            setSocket(io.connect())
    }, [])

    return (
        <div></div>
    )
}

export default Chat