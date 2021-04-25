import React, { lazy,useState,createRef} from 'react'
import {
  CBadge,
  CButton,
  CFormGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CProgress,
  CRow,
  CInput,
  CLabel
  
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'
// import { tablehead, tablepara, tabletitle } from '../style.js'
import New from './Create'
import Edit from './Edit'
import Remove from '../Stretgry/Remove'
import rightarrow from '../all_icon/rightarrow.svg'
import downarrow from '../all_icon/downarrow.svg'
import usersData from '../users/UsersData'
import { element } from 'prop-types'
import search from '../all_icon/search.svg'
import Create from '../Stretgry/Create.js'



const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const User = () => {

  return (
    <>
    <CRow>
        <CCol xs="3"><p className="mainhead">Ny bruker</p>  </CCol>
        <CCol xs="8"></CCol>
        <CCol xs="1"> <CButton block className="outlineButton">Ny mål</CButton></CCol>
    </CRow>

     <CRow>
        <CCol>
          <CCard className="mb-0" >
                <CCardBody>
                <CFormGroup row className="my-0">
                        <CCol xs="6" sm="1"><New /></CCol>
                       
                </CFormGroup>
                <p className="subhead">Bydels direktør strategisk mål</p>
                <CFormGroup row className="my-0">
                            <CCol xs="12" sm="6" lg="3">
                                <CFormGroup>
                                    <CLabel className="formlabel">Søk * </CLabel>
                                    <CInput type="text" className="formtext" placeholder="Natasha Panjkovic|" />
                                </CFormGroup>
                            </CCol>
                            <CCol xs="0" sm="1" lg="1">
                                <CFormGroup>
                                <img  htmlFor="mulselect" src={search} className="normalicon2 d-none d-sm-block"  alt="Logo" /> 
                                </CFormGroup>
                                </CCol>
                </CFormGroup>
                <table className="table table-hover ">
                <thead className="tablehead" >
                        <tr>
                          <th>Brukernavn</th>
                          <th>Ansatt ID</th>
                          <th>E-post</th>
                          <th>Rolle</th>
                          <th>Avdeling</th>
                          <th>Veileder</th>     
                          <th >Handling</th>
                        </tr>
                      </thead>
                      <tbody className="tablepara" >
      
                        {usersData.map((list,index)=>(
                        <tr  key={index} >  
                            <td className="usertitle">Lorem ipsum dolor sit amet</td>
                            <td>Høy{list.name}</td>
                            <td>Aktiv</td>
                            <td>01/03/2020</td>
                            <td>01/09/2020</td>
                            <td>Natasha Panjkovic</td>
                            <td > 54 </td>
                            <td>
                                <CRow className="align-items-center row">
                                  <CCol sm="1"> <Edit/></CCol>
                                  <CCol sm="1"><Remove /></CCol>
                                </CRow>
                            </td>   
                          </tr>

                          ))}
                          </tbody>
                    </table>
                  </CCardBody>
              </CCard>
        </CCol>
      </CRow>
     
    </>
  )
}

export default User
