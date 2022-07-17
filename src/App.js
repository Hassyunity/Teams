import React from 'react';
// import 'firebase/auth';

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

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
// import Access from './pages/access';
// import MyForm from './components/Post';
// import MyForm from './components/Post';

// firebase.initializeApp({
//   apiKey: "AIzaSyBwvWm6GQ5Ia-CO8UwuUfmdvz6B2aMts4Q",
//   authDomain: "teams-6c7a4.firebaseapp.com",
//   projectId: "teams-6c7a4",
//   storageBucket: "teams-6c7a4.appspot.com",
//   messagingSenderId: "806891016650",
//   appId: "1:806891016650:web:5cfe771cb9e12c554d3f33",
//   measurementId: "G-ZCVK1F21SL"
// })
// const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();

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
    // >
    // <div>
    //    <header>
    //     <h1>⚛️🔥💬</h1>
    //     <SignOut />
    //   </header>

    //   <section>
    //      <ChatRoom /> : <SignIn />
    //   </section>
    // </div>
  );
}

// function SignIn() {

//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   }

//   return (
//     <>
//       <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
//       <p>Do not violate the community guidelines or you will be banned for life!</p>
//     </>
//   )

// }

// function SignOut() {
//   return auth.currentUser && (
//     <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
//   )
// };

// function ChatRoom() {
//   const dummy = useRef();
//   const messagesRef = firestore.collection('messages');
//   const query = messagesRef.orderBy('createdAt').limit(25);

//   const [messages] = useCollectionData(query, { idField: 'id' });

//   const [formValue, setFormValue] = useState('');


//   const sendMessage = async (e) => {
//     e.preventDefault();

//     const { uid, photoURL } = auth.currentUser;

//     await messagesRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL
//     })

//     setFormValue('');
//     dummy.current.scrollIntoView({ behavior: 'smooth' });
//   }

//   return (<>
//     <main>

//       {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

//       <span ref={dummy}></span>

//     </main>

//     <form onSubmit={sendMessage}>

//       <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

//       <button type="submit" disabled={!formValue}>🕊️</button>

//     </form>
//   </>)
// };

// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//   return (<>
//     <div className={`message ${messageClass}`}>
//       <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
//       <p>{text}</p>
//     </div>
//   </>)
// };

export default App;
