import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TDBar from './TDBar';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TDBar />} />
      </Routes>
    </Router>
  );
}
