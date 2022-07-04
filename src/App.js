import './App.scss';
import Topbar from './components/topbar/Topbar.jsx';
import Listvalue from './components/listvalue/Listvalue.jsx';

function App() {
  return (
    <div className='app'>
        <Topbar/>
        <div className='sections'>
          <Listvalue/>
        </div>       
    </div>
    
  );
}

export default App;
