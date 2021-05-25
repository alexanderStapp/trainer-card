import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import Dash from './components/Dash'
import Card from './components/Card'
// import {UserContext} from './context/UserContext'
// import {useContext} from 'react'

// const {user} = useContext(UserContext)

export default (
    <Switch>
        <Route exact path='/' component={Dash} />
        <Route path='/auth' component={Auth} />
        <Route path='/card' component={Card}/>
        {/* <Route path={`/${user}`} component={Card}/> */}
    </Switch>
)