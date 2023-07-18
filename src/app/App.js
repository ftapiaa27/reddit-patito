import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Hello There!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
