import './App.css';
import React from 'react';
// import RecatFormSubmit from './Components/recatFormSubmit';
// import Calculation from './Components/calculationApp';
// import Fetch from './Components/Fetch';
// import Axios from './Components/Axios';

import NavBar from './Components/routing/navBar';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Components/routing/Home';
import Dashboard from './Components/routing/Dashboard';
import About from './Components/routing/About';

 export const userContext=React.createContext();

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <userContext.Provider value={"data sended to Dashboard from app.js using useContext"}>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
        </userContext.Provider>
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
