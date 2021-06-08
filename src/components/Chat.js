import {useState, useEffect, useContext} from 'react'
import {UserContext} from '../context/UserContext'
import io from 'socket.io-client'

const Chat = (props) => {
    const [socket, setSocket] = useState(null)
    const [msg, setMsg] = useState('')
    const [msgs, setMsgs] = useState([])
    const [roomID, setRoomID] = useState('')
    const {user} = useContext(UserContext)

    useEffect(() => {
        setSocket(io.connect())
        return () => {
            socket.disconnect()
            setSocket(null)
        }
    }, [])

    useEffect(() => {
        if(socket) {
            socket.on('relay-msg', (body) => {
                console.log(body)
                setMsgs(m => [...m, body])
            })
            socket.on('broadcast-join-room', (body) => {
                console.log(`${body.username} has joined ${body.roomID}`)
            })
        }
    }, [socket])

    const sendMsg = () => {
        socket.emit('send-msg', {username: user.username, msg})
    }

    const joinRoom = () => {
        socket.emit('join-room', {roomID, username: user.username})
    }

    return (
        <div>
            <input value={roomID} onChange={e => setRoomID(e.target.value)}/>
            <button onClick={joinRoom}>join room</button>
            <input value={msg} onChange={e => setMsg(e.target.value)} />
            <button onClick={sendMsg}>send</button>
            {msgs.map((body) => {
                return (
                    <div className='chat'>
                        <p>{body.username}: {body.msg}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Chat