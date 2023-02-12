import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Home } from './views/Home'
import { About } from './views/About'
import { Description } from './views/Description'
import { PostDetails } from './containers/PostDetails';
import { Posts } from './views/Posts';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/about" element={<About />}/>
          <Route path="/description" element={<Description />}/>
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
