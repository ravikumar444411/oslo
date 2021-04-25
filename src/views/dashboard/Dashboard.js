import React, { lazy,useState,createRef} from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'
// import { tablehead, tablepara, tabletitle } from '../style.js'
import Edit from '../Stretgry/Edit'
import Remove from './Remove'
import rightarrow from '../all_icon/rightarrow.svg'
import downarrow from '../all_icon/downarrow.svg'
import usersData from '../users/UsersData'
import { element } from 'prop-types'
import { tablehead, tablepara,tabletitle } from '../style.js'



const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const [visible, setVisible] = useState(false)
  const [show, setArrow] = useState(true)
  // setVisible(!visible)

  const selectRow  = createRef(null);
  // const [userList,setUser] = useState([]);
  // console.log(usersData)

const element =`<td >
                  &nbsp; &nbsp; &nbsp; &nbsp; my data Lorem ipsum dolor sit amet</td>
                <td >Høy</td>
                <td >Aktiv</td>
                <td>01/03/2020</td>
                <td>01/09/2020</td>
                <td>Natasha Panjkovic</td>
                <td >  <CProgress
                      className="progress-xs mt-2"
                      precision={1}
                
                      color="success"
                      value={40}
                    />
                  <span >40%</span> </td>
                <td>
                   
                </td>
              </tr>`



// console.log(showElement)
// var test = [];
// test.push(<p>hello</p>)

// selectRow.current.parentNode.appendChild('tr');
// fe
// console.log(show)
const showMore =(event)=>{
  
  // console.log(event.target.parentElement.nextSibling)
  
  if(show){
    event.target.firstChild.src = downarrow
    event.target.parentElement.nextSibling.innerHTML = element  
  }
  else{
    event.target.firstChild.src = rightarrow
    event.target.parentElement.nextSibling.remove()
    
  }
  
  setArrow(!show)
  
}


  return (
    <>
    <CRow>
        <CCol xs="3"><p className="mainhead">Strategi, Tiltak og mål</p>  </CCol>
        <CCol xs="8"></CCol>
        <CCol xs="1"> <CButton block className="outlineButton">Ny mål</CButton></CCol>
    </CRow>

     <CRow>
        <CCol>
          <CCard className="mb-0" >
                <CCardBody>
                <table className="table table-hover ">
                <thead className="tablehead" >
                        <tr style={tablehead}>
                          <th>Strategi</th>
                          <th>Prioritering</th>
                          <th>Status</th>
                          <th>Startdato</th>
                          <th>Sluttdato</th>
                          <th>Eier</th>
                          <th>% Fullført</th>       
                          <th >Handling</th>
                        </tr>
                      </thead>
                      <tbody className="tablehead " ref={selectRow} id="accesspoint">
      
                        {usersData.map((list,index)=>(
                        <tr  key={index} >  
                            <td onClick={(e)=>showMore(e)} style={tabletitle}>
                              <img src={rightarrow}/>All skal kunne bo trygt i egnet hjem</td>
                            <td>Høy{list.name}</td>
                            <td>Aktiv</td>
                            <td>01/03/2020</td>
                            <td>01/09/2020</td>
                            <td>Natasha Panjkovic</td>
                            <td > 
                             <CProgress
                                  className="progress-xs mt-2"
                                  precision={1}
                                  color="success"
                                  value={40}
                                />
                               <span >40%</span> </td>
                            <td>
                                <CRow>
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

export default Dashboard
