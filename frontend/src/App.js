import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './page/Home';
import Roulette from './page/Roulette';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Roulette" element={<Roulette />} />
      </Routes>
    </Router>
  );
}

export default App;
