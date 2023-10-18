import './App.css';
import Post from './components/post';
import Comment from './components/comment';
import Like from './components/like';
import User from './components/user';
import CustomComponent from './components/customComponent';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Instagram</title>
      </Helmet>
      <Routes>
        <Route path="/" element={< CustomComponent />} />
        <Route exact route="/user/:userId" element={<User />} />
      </Routes>
    </div>
  );
}

// "proxy": "http://localhost:8080" 
// Mysql çalışıyorken package.json sonuna ekle

export default App;
