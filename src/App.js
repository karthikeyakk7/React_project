import './App.css';
// import RecatFormSubmit from './Components/recatFormSubmit';
// import Calculation from './Components/calculationApp';
// import Fetch from './Components/Fetch';
// import Axios from './Components/Axios';

import NavBar from './Components/routing/navBar';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Components/routing/Home';
import Dashboard from './Components/routing/Dashboard';
import About from './Components/routing/About';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/dashboard" exact Component={Dashboard}/>
          <Route path="/about" exact Component={About}/>
        </Routes>
      </BrowserRouter>
      <center>
        {/* <RecatFormSubmit /> */}
        {/* <Calculation/> */}
        {/* <Fetch/> */}
        {/* <Axios/> */}
      </center>
    </div>
  );
};

export default App;
