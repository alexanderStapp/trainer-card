// import {useContext} from 'react'
// import {FaUserPlus, FaUserMinus} from 'react-icons/fa'
// import {UserContext} from '../context/UserContext'
// import {BuddyContext} from '../context/BuddyContext'
// import {CardContext} from '../context/CardContext'

// function CardAddRem() {
//     const {buddies, addBuddy, removeBuddy} = useContext(BuddyContext)
//     const {userInfo, editView} = useContext(CardContext)

//     return (
//         <div>
//             {!editView && !buddies.some(e => e.user_buddy === userInfo.user_id) ?
//                 <button className='edit-save' onClick={(e) => {
//                     addBuddy(userInfo.user_id)
//                     e.stopPropagation()
//                 }}><FaUserPlus /></button>
//                 : 
//                 <button className='edit-save' onClick={(e) => {
//                     removeBuddy(userInfo.user_id)
//                     e.stopPropagation()
//                 }}><FaUserMinus /></button>
//             }
//         </div>
//     )
// }

// export default CardAddRem