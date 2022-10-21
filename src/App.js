import './App.css';
import OrderItems from './components/Information/OrderItems';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="header">
        <h1 className="header_text">Siuntos užsakymas</h1>
      </div>
      <div>
        <OrderItems />
      </div>
    </div>
  );
}

export default App;
