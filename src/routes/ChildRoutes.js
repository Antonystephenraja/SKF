import React from 'react'
import { Outlet} from 'react-router-dom'
import DashMain from './DashMain'

const ChildRoutes = () => 
{
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default ChildRoutes