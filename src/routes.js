import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import Dash from './components/Dash'
import Card from './components/Card'
import EditCard from './components/EditCard'
import Search from './components/Search'

export default (
    <Switch>
        <Route exact path='/' component={Dash} />
        <Route path='/auth' component={Auth} />
        {/* <Route path='/card' component={Card} /> */}
        <Route path='/search' component={Search} />
        <Route path='/:username' component={Card} />
        <Route path='/edit-card' component={EditCard} />
    </Switch>
)