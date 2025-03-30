import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [auth, setAuth]=useState(false);
  const navigate = useNavigate();
  if(auth){
    navigate('/dashboard');
    }
  return (
    <div>
      <center>
      <h1> these is home page</h1>
      <button onClick={()=> setAuth(true)}>enter</button>
      </center>
    </div>
  )
}

export default Home
