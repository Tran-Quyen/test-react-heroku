import './App.scss';
import Header from '../src/components/Header/Header.jsx'
import Routers from './Routers/index.jsx';
import { BrowserRouter as Router } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        <Header />

        <Routers />

        {/* footer */}
      </Router>
    </div>
  );
}

export default App;


//khi mình call api, thì cái api này rất nặng, phải mất tầm 2p mới trả về kết quả