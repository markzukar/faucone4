import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Page/Home';
import OurBrands from './components/Page/OurBrands';
import Industries from './components/Page/Industries';
import Services from './components/Page/Services';
import Insight from './components/Page/Insight';
import ContactUs from './components/Page/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ourbrands' element={<OurBrands />} />
          <Route path='/industries' element={<Industries />} />
          <Route path='/services' element={<Services />} />
          <Route path='/insights' element={<Insight />} />
          <Route path='//contact-us' element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
