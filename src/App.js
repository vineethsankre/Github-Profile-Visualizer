import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import ProfilePage from './components/ProfilePage'
import NotFound from './components/NotFound'
import {UserProvider} from './context/UserContext'

import './App.css'

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:user/profile" component={ProfilePage} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </BrowserRouter>
    </UserProvider>
    
  )
}
