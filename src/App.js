import logo from './logo.svg';
import './App.css';
import { Registration } from './component/Registration';
import { Login } from './component/Login';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
