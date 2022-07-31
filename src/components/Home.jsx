import React,{useEffect} from 'react';
import isAuthenticated from '../utils/isAuthenticated';
import { useNavigate } from 'react-router-dom';

import Layouts from "./Layout";

export default function Home(props) {

  const navigate = useNavigate();

  const checkLoginStatus=()=>{
    if(!isAuthenticated()){
      navigate("/")
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <Layouts>
      <div style={{display:'flex',flex:1, justifyContent:'center', alignItems:'center'}}>
        <p style={{fontSize:150}}>Home</p>
        </div>
    </Layouts>
    
  )
}
