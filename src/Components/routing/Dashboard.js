import React,{useContext} from 'react';
import { userContext } from '../../App';

const Dashboard = () => {
  //useContext
  const value=useContext(userContext);

  
  return (
    <div>
      <div>{value}</div>
      <h1> these is Dashboard page</h1>
    </div>
  )
}

export default Dashboard
