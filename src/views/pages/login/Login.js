import React from 'react'
import { Link } from 'react-router-dom'
// import { Auth } from 'aws-amplify';
import 'crypto-js/lib-typedarrays'; // add this line
import Amplify, {Auth} from 'aws-amplify';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CFormGroup,
  CLabel,
  CForm,
  CText,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import logo from '../../all_icon/logo.svg'
import {loginname} from '../../style'


const Login = () => {
//   const [userame,setPassword]


//  const handleChange =(event)=>{
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState({
//         [name]: value
//     })
// }
 async function signIn() {
  try {
      const user = await Auth.signIn('ojasmajgaonkar445@gmail.com', 'kscthiMato96703;\,.`');
      console.log(user)
  } catch (error) {
      console.log('error signing in', error);
  }
}



  
  return (
    // <div className="c-app c-default-layout flex-row align-items-center">
      // <CContainer>
      <>
        <CRow style={{height:'105px'}}>
          <CCol className="col-2 bg-white"><img src={logo} style={{marginLeft:40,marginTop:10}} /> </CCol>
          <CCol className="bg-white col-10">  </CCol>
        </CRow>
        <CRow className="justify-content-center" style={{height:'80vh',justifyContent:'center'}} >
          <CCol md="4">
            <CCardGroup>
              <CCard style={{marginTop:125}} >
                <CCardHeader style={{height:70,justifyContent:'center'}}> 
                  <CRow style={{marginTop:15}} >

                  <CCol className="col-4" style={loginname} >Logg Inn</CCol>
                  <CCol className="col-6"></CCol>
                  <CCol className="col-2"><img src={logo} style={{width:40}} />   </CCol>
                  </CRow>
                </CCardHeader>
                <CCardBody>
                  <CForm>
                    <CFormGroup row className="my-0">
                      <CCol className="col-2" ></CCol>
                        <CCol xs="12" lg="8">
                        <CFormGroup>
                            <CLabel className="formlabel">Brukernavn</CLabel>
                            {/* <CInput size="xl" type="text" placeholder="Natasha Panjkovic" name="date" className="formtext" /> */}
                            <CInput size="lg" type="text" name="input-large" className="input-lg" />
                        </CFormGroup>
                        </CCol>
                </CFormGroup>
                    <CFormGroup row className="my-0">
                      <CCol className="col-2" ></CCol>
                        <CCol xs="12" lg="8">
                        <CFormGroup>
                            <CLabel className="formlabel">Passord</CLabel>
                            {/* <CInput size="xl" type="text" placeholder="Natasha Panjkovic" name="date" className="formtext" /> */}
                            <CInput size="lg" type="text" name="input-large" className="input-lg" />
                        </CFormGroup>
                        </CCol>
                </CFormGroup>
                    <CFormGroup row className="my-0">
                      <CCol className="col-2" ></CCol>
                        <CCol xs="12" lg="8">
                        <CFormGroup>
                          <CRow  >
                        <CCol xs="12" sm="5"><CButton block className="outlineButton" 
                        style={{height:60, font:'Open Sans',fontWeight:'600',fontSize:'18px',color:'#242526'}} onClick={()=>signIn()} >Logg Inn</CButton></CCol>
                        <CCol xs="12" sm="3"><CButton block style={{height:60,font:'Open Sans',fontWeight:'600',fontSize:'18px',color:'#242526'}}>Klar</CButton></CCol>
                          </CRow>
                        </CFormGroup>
                        </CCol>
                </CFormGroup>
                    <CFormGroup row className="my-0">
                      <CCol className="col-2" ></CCol>
                        <CCol xs="12" lg="8">
                        <CFormGroup>
                          <CRow  >
                            <p style={ {font:'Open Sans',fontWeight:'400',fontSize:'13px',color:'#2C2C2C',marginLeft:20,textDecoration:'underline'}} >Glemt passord?</p>

                          </CRow>
                        </CFormGroup>
                        </CCol>
                </CFormGroup>

                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
   
    </>
  )
}

export default Login
