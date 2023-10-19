import './App.css';
import Proflie from './pages/profile'
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
