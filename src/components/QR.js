import {QRCode} from 'react-qr-svg'

function QR(props) {
    const {username} = props.match.params

    return (
        <QRCode 
            className='qr-code'
            value={`https://trainer-card.com/${username}`}
            bgColor='#FFFFFF'
            fgColor='#000000'
        />
    )
}

export default QR