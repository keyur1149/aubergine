import logo from './logo.svg';
import './App.css';
import ListofUsers from './components/ListofUsers';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OneUser from './components/OneUser';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListofUsers/>}></Route>
        <Route path="/Oneuser" element={<OneUser/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
