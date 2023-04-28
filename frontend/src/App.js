import {BrowserRouter, Route, Routes} from 'react-route-dom';
import Home from './page/Home';

function App() {
  return (
    <div>
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
