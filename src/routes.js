import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import Dash from './components/Dash'
import Card from './components/Card'
import EditCard from './components/EditCard'
import Search from './components/Search'
import Pokemon from './components/Pokemon'
import Chat from './components/Chat'
import QR from './components/QR'

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/dash' component={Dash} />
        <Route path='/search' component={Search} />
        <Route path='/editcard' component={EditCard} />
        <Route path='/pokemon' component={Pokemon} />
        <Route path='/chat' component={Chat} />
        <Route path='/qr/:username' component={QR} />
        <Route path='/:username' component={Card} />
    </Switch>
)