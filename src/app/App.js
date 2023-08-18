import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import Header from '../features/Header/Header.js';
import Reddit from '../features/Reddit/Reddit.js';
import Subreddits from '../features/Subreddits/Subreddits';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<h1>Hello There!</h1>} />
    //   </Routes>
    // </BrowserRouter>
    <div className='app'>
      <Header />
      <Reddit />
      <Subreddits />
    </div>
  );
}

export default App;
