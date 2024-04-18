import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
  
    let tokenVariable = localStorage.getItem('token');
    if(tokenVariable)
    {
      const value = JSON.parse(localStorage.getItem('token'));
      const role = value.role;

      return{
        auth: true,
        role: role,
      };
    }
    else
    {
      return{
        auth: false,
        role: null,
      };
    }
  };

  const ProtectedRoutes = (props) =>
  {
    let tokenVariable = localStorage.getItem('token');
    if(tokenVariable){
      return <Outlet/>
    }else{
      return <Navigate to ={'/login'}/>
    }
  }

export default ProtectedRoutes;