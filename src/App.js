import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import Users from './components/Users';
import User from './components/User';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App">
        <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/users/:user_id' component={User} />
          <Route exact path='/posts/:post_id' component={Post} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
