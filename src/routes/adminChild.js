import React from 'react'
import { Outlet} from 'react-router-dom'

import DashAdmin from './DashAdmin'
const adminChild = () => {
  return (
    <div>
      <Outlet/>
      <DashAdmin/>
    </div>
  )
}

export default adminChild

