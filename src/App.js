import './App.css';
import Post from './components/post';
import Comment from './components/comment';
import Like from './components/like';
import User from './components/user';
import CustomComponent from './components/customComponent';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< CustomComponent />} />
        <Route exact route="/user/:userId" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
