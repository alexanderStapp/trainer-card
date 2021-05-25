import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import Dash from './components/Dash'
import Card from './components/Card'

export default (
    <Switch>
        <Route exact path='/' component={Dash} />
        <Route path='/auth' component={Auth} />
        <Route path='/card' component={Card}/>
    </Switch>
)