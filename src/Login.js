import "bootstrap/dist/css/bootstrap.min.css"
import "./login.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from "./Auth"

import './pages/styles/Todo.css';

function Log() {
  return (
    <Router>
      <Switch>
      <Route path='/' exact component={Auth} />
      </Switch>
    </Router>
  )
}

export default Log