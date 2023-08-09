import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
const Getbundles=(props)=>{
  return(
    <>
    <tr>
      <td>{props.sno}</td>
      <td>{props.userid}</td>
      <td>{props.college}</td>
      <td>{props.location}</td>
      <td>{props.bundlescount}</td>
      <td>{props.bundlesrecieved}</td>
      <td>{props.remarks}</td>
    </tr>
    </>
  )
}
const Ubundles = () => {
  const props={
    username:localStorage.getItem('username'),
    roll:localStorage.getItem('roll')
  }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[values,setValues]= useState({ubundles:'yes',username:props.username,roll:props.roll});
    const [results,setResults]=useState([])
    const handleSubmit=async()=>{
      handleClose();  
      try{
   const response=await fetch("http://localhost:8009/bundlesp",{
    method:"POST",
    body:JSON.stringify(values),
    headers:{
       "Content-Type":"application/json"
      
    } 
  
   });
  console.log(response);
  }
      catch(err){
       console.log('err');
      }
      handleClose();
   }
  
   const getUsers = async () => {
    try {
      const response = await fetch('http://localhost:8009/bundlesg/'+props.username, {
        method: 'GET'
      });
      const result = await response.json();
   
    setResults(result);
  
     
    } 
    catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getUsers();
  
  });
  
  
    const handleChange = (event)=>{
      setValues({
          ...values,
          [event.target.name]: event.target.value,    
               });
         console.log(values);
      }
  return (
    
    <>
     <div className='row'>
     <div className='header col-md-12' style={{backgroundColor:"#333"}}>
        <h1>Resource Allocator</h1>
        </div>
     </div>
          
          <div style={{ display: 'flex', height: '90vh' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#333"  className='col-md-2'>
              <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                <h3 className="text-decoration-none" style={{ color: 'inherit' }}>
                  Menu
                </h3>
              </CDBSidebarHeader>

              <CDBSidebarContent className="sidebar-content">
                <CDBSidebarMenu>
                  <NavLink exact to="/userdashboard" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/Ubundles" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="table"> Bundles Info</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/Urepairs" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="user">Repairs & Maintanance</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/Ureports" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="chart-line">User Reports</CDBSidebarMenuItem>
                  </NavLink>
                  <CDBSidebarMenuItem icon="arrow-left"><a href='/'>Logout</a></CDBSidebarMenuItem>
                </CDBSidebarMenu>
              </CDBSidebarContent>

              
            </CDBSidebar >&nbsp;&nbsp;&nbsp;
            <div className='col-md-9'>
              <div className='row' style={{paddingTop:'2%'}}>
               
                <div className='col-md-2 offset-md-5'><center><h4 className='tab'>Bundles Info</h4></center></div>
                </div>
                <br/>
                <div className='container' style={{borderRadius:'10px',boxShadow:'4px 4px 8px',paddingTop:'2%',marginLeft:'4%'}}>

                <div className='row' >
                  <div className='col-md-4 offset-md-4'>
            <h3><center style={{paddingRight:'25%'}}>Bundles Information</center></h3>
            <br/>
                  </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-2 offset-md-10'>
                    <div><Button variant="primary" style={{float:'right',fontSize:'20px'}} onClick={handleShow}>
                    ADD
                  </Button></div>
                    <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>ADD DATA</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                   
                    <div>
                      <label style={{fontSize:'20px'  ,fontWeight:'600'}}>User ID</label><br/>
                      <input type="text"  placeholder='User Id' name='userid' onChange={handleChange} style={{width:'75%'}}/>  
                    </div><br/>
                    <div>
                      <label style={{fontSize:'20px'  ,fontWeight:'600'}}>College</label><br/>
                      <input type="text"  placeholder='College Name' name='college' onChange={handleChange} style={{width:'75%'}}/>  
                    </div><br/>
                    <div>
                      <label style={{fontSize:'20px'  ,fontWeight:'600'}}>Location</label><br/>
                      <input type="text"  placeholder='Location' name='location'   onChange={handleChange} style={{width:'75%'}}/>  
                    </div><br/>
                    <div>
                      <label style={{fontSize:'20px'  ,fontWeight:'600'}}>No of Bundels</label><br/>
                      <input type="text"  placeholder='Bundles' name='bundlescount' onChange={handleChange} style={{width:'75%'}}/>  
                    </div><br/>
                    <div>
                      <label style={{fontSize:'20px'  ,fontWeight:'600'}}>Bundels Recieved</label><br/>
                      <input type="text"  placeholder='Recieved' name='bundlesrecieved'  onChange={handleChange} style={{width:'75%'}}/>  
                    </div><br/>
                    <div>
                      <label style={{fontSize:'20px'  ,fontWeight:'600'}}>Remarks</label><br/>
                      <input type="text"  placeholder='Remarks' name='remarks' onChange={handleChange} style={{width:'75%'}}/>  
                    </div><br/>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                      Submit
                    </Button>
                  </Modal.Footer>
                </Modal>
                    </div>
                  </div><br/>
                  <div className='container-fluid'>
                 <div className='row'>
                  <div className='col-md-12'>
                    




                    <div className='App tbl-container'>
                      <div className='tbl-fixed'>
                    <Table responsive bordered='true' >
                      <thead>
                        <tr >
                          <th>S.No</th>
                          <th>UserID</th>
                          <th>College</th>
                          <th>Location</th>
                          <th>No of Bundels</th>
                          <th>Bundels Recived</th>
                          <th>Remarks</th>
                        </tr>
                      </thead>
                      <tbody >
                         {results.map((result,i)=>{return(<Getbundles  sno={i+1} userid={result.userid} college={result.college} location={result.location} bundlescount={result.bundlescount} bundlesrecieved={result.bundlesrecieved}  remarks={result.remarks}/>)})} 
                      </tbody>
                    </Table>
       </div>
        </div>
                  </div>
                 </div>
                  </div>

                </div>

            </div>
         
          </div>
     
    </>
  )
}

export default Ubundles;