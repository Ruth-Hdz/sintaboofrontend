import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/User/HomePage';
import Login from './pages/Admin/loginAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginAdmin" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
