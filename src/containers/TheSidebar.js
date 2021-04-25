import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import logo from '../views/all_icon/logo.svg'
import dashboard from '../views/all_icon/dashboard.svg'
import create from '../views/all_icon/create.svg'
import overview from '../views/all_icon/overview.svg'
import wheel from '../views/all_icon/wheel.svg'

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)
  const BG = {background:'white'}
const changeToActive =(event)=>{

} 

  return (
    <CSidebar
      show={show}
      style={{background:'white',width:'120px'}}
      
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none shadow-sm" to="/"  style={{background:'white',border:'none'}}>
        <CIcon
          className="c-sidebar-brand-full my-3 "
          src={logo}
          width="96px"
          height={65}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>

      <CSidebarBrand to='/dashboard' className="mt-3"   style={BG}  onClick={changeToActive} >
           <img src={dashboard}/>
      </CSidebarBrand>
      <CSidebarBrand to='/create' className="mt-3"   style={BG}  onClick={changeToActive} >
           <img src={create}/>
      </CSidebarBrand>
      <CSidebarBrand to='/create' className="mt-3"   style={BG}  onClick={changeToActive} >
           <img src={overview}/>
      </CSidebarBrand>
      <CSidebarBrand to='/create' className="mt-3"   style={BG}  onClick={changeToActive} >
           <img src={wheel}/>
      </CSidebarBrand>

    </CSidebar>
  )
}

export default React.memo(TheSidebar)
