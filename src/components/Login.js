import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
const Getusers=(props)=>{
  return(
    <>
    <tr>
      <td>{props.sno}</td>
      <td>{props.userid}</td>
      <td>{props.username}</td>
      <td>{props.email}</td>
      <td>{props.password}</td>
      
    </tr>
    </>
  )
}
const Login = () => {
  const [users,setUsers]=useState([]);
  const getUsers=async()=>{
try{
const result=await fetch('http://localhost:8009/users',{
  method:'GET'
})
const userss=await result.json();
setUsers(userss);
}
catch(err)
{
  console.log(err);
}
  }
useEffect(()=>{
  getUsers();
})
return (
  <div>
  <div className='header col-md-12' style={{backgroundColor:'#333'}}>
      <h1>Resource Allocator</h1>
      
      </div>
    <div className='row' style={{ display: 'flex', height: '110vh' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#333"  className='col-md-2'>
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <h3 className="text-decoration-none" style={{ color: 'inherit' }}>
                Menu
              </h3>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink exact to="/admindashboard" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/Login" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="chart-line">Logins Info</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/Bundles" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="table"> Bundles Info</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/Repairs" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="user">Repairs & Maintanance</CDBSidebarMenuItem>
                </NavLink>
               
                <NavLink exact to="/User" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="chart-line">User Reports</CDBSidebarMenuItem>
                </NavLink>
                <CDBSidebarMenuItem icon="arrow-left"><a href='/'>Logout</a></CDBSidebarMenuItem>
              </CDBSidebarMenu>
            </CDBSidebarContent>

            
          </CDBSidebar >
          <div className='col-md-9'>
<div className='col-md-3 offset-md-4' style={{padding:'2%',textAlign:'center'}}><h6 style={{backgroundColor:'crimson',color:'white',padding:'3%',borderRadius:'10px'}}>Current Users Count   : &nbsp;&nbsp;{users.length}</h6></div>



<div className='col-md-9 ' style={{marginLeft:'10%'}}>
<div className='col-md-2 ' style={{color:'white',backgroundColor:'crimson',textAlign:'center',padding:'.5%',borderRadius:'10px'}}>
            User Information
           
          </div>
          <br/>
    <div className='row'>
    
          
      <div className='col-md-12  boxinfo '>
      <br/>
         <div className='row'>
          
         <div className='col-md-12 '>
          <div className='row tbl-fixed'>
           
            <Table responsive  style={{textAlign:'left'}} bordered='true'>
            <thead>
              <tr>
                <th>Sno</th>
                <th>UserID</th>
                <th>username</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
           </thead>
           <tbody>
           {users.map((ele,i)=>{
               return(<Getusers sno={i+1} userid={ele._id} username={ele.username} password={ele.password} email={ele.email}/> )
              })}
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
 </div>
   )
}
export default Login;