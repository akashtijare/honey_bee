import './App.css';
import Navbar from './Components/Navbar';
import { ProductDetails } from './Pages/ProductDetails';
import { Products } from './Pages/Products';
import Address from './Pages/address/Address';
import { Allroutes } from './Routes/Allroutes';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Allroutes/> 
    {/* <Address/> */}
    </div>
  );
}
export default App;
