import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CButton,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
  CRow,
  CCol
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from '../routes'
import '../views/style.css'

import { 
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from './index'

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  return (
    <CHeader withSubheader style={{height:'98px'}} className="shadow-sm ourmainheader" >
      {/* <div style={{borderLeft:'2px solid black',height:'30px',marginTop:'30px'}}></div> */}
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none "
        onClick={toggleSidebarMobile}
      />
      {/* <CToggler
        inHeader 
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand> */}

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" >
        <p className="mainhead mt-4">Bydelsdirektør, Bydel Bjerke</p>
        </CHeaderNavItem>
        {/* <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/users">Users</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Settings</CHeaderNavLink>
        </CHeaderNavItem> */}
      </CHeaderNav>

      <CHeaderNav className="px-3">
        {/* <TheHeaderDropdownNotif/>
        <TheHeaderDropdownTasks/>
        <TheHeaderDropdownMssg/> */}

        <CRow>
          <CCol>   <CButton block className="outlineButton2 mt-2 mr-5" style={{height:'51px'}}>Kontakt</CButton></CCol>
          <CCol> <p className="adminpara">Min side</p></CCol>
        </CRow>

      
       
        <TheHeaderDropdown/>
      </CHeaderNav>

     
    </CHeader>
  )
}

export default TheHeader
