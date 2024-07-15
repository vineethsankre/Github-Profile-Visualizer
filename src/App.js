import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
