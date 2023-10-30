import './App.css';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/Index';

function App() {
  return (
    <div className="App">
      <Header className="z-5"/>
      <Home className="z-1"/>
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;
