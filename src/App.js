import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Chats from './pages/chats';
import TodoReport from './pages/todo';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Footer from './components/footer';
// import Access from './pages/access';
// import MyForm from './components/Post';
// import MyForm from './components/Post';
<>
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
</>

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/chats' component={Chats} />
        <Route path='/todo' component={TodoReport} />
        <Route path='/team' component={Teams} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
