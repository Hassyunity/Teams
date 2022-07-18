import "bootstrap/dist/css/bootstrap.min.css"
import "./login.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from "./Auth"

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