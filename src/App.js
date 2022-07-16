import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import TodoReport from './pages/todo';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
        <Route path='/todo' component={TodoReport} />
        <Route path='/team' component={Teams} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;


// import React from 'react';
// import Navbar from './Navbar';
// import './App.css';

// import DatatablePage from './components/Table';
// import TodoList from './components/TodoList';
// import renderForm from './components/Login';
// // import MyForm from './components/Post';



// function App() {
//   return (

//     <div className="App">
//       <Navbar />
//       <TodoList />
//       <DatatablePage />
//       <renderForm />
//       {/* <MyForm /> */}
//       <div className="form">
//         <form>
//           <div className="input-container">
//             <label>Username </label>
//             <input type="text" name="uname" required />
//             {/* {renderErrorMessage("uname")} */}
//           </div>
//           <div className="input-container">
//             <label>Password </label>
//             <input type="password" name="pass" required />
//             {/* {renderErrorMessage("pass")} */}
//           </div>
//           <div className="button-container">
//             <input type="submit" />
//           </div>
//         </form>
//       </div>
//     </div>

//   );
// }




// export default App;

