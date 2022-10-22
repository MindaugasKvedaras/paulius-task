import './App.css';
import Form from './components/Form/Form';
import OrderItems from './components/Information/OrderItems';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="header">
        <h1 className="header_text">Siuntos užsakymas</h1>
      </div>
      <div className='order-details'>
        <OrderItems />
        <Form />
      </div>
    </div>
  );
}

export default App;
