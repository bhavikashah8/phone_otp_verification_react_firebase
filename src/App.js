import './App.css';
import Navbar from './components/Navbar';
import OtpVerify from './components/OtpVerify';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <OtpVerify/>
    </div>
  );
}

export default App;