import Metamask from './pages/metamask'
import Bg from './assets/hospitalbg3.jpg'
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Install from './pages/install';

function App() {
  return (
    <div>
      <img src={Bg} alt="background" className='videoTag' />
      <Router>
        <Routes>
          <Route path='/' element={<Metamask />} />
          <Route path='/install' element={<Install />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
