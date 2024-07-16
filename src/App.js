import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import ProfilePage from './components/ProfilePage'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:user/profile" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  )
}
