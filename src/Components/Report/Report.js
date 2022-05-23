import React from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer } from 'react-bootstrap'
import { Container, Table, Button,ButtonGroup, Form  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Report = () => {
   
    
  return (
    <div>
         <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container className='myprofile'>
          <div className='top-button'>
       
            <div className='mb-2'>
            
          <ButtonGroup>
            <Button variant='success' as={Link} to='/report-filter'><i className="fa fa-filter me-2" style={{color:'#fff'}} ></i>Filter</Button>
            <Button variant='danger' style={{marginLeft:'4px'}}><i className='fa fa-download'></i></Button>
          </ButtonGroup>
            </div>
            </div>
            <div className='jd-wraper' >
       <Container className='table-data'>
        <Table responsive  className='data-table' hover>
            <thead>
                <tr>
                    <th></th>
                    <th>Candidate ID</th>
                    <th>Client ID</th>
                    <th>Date-Time of adding into offer</th>
                    <th>User Id</th>
                    <th>User name</th>
                    <th>Client Name</th>
                    <th>JD Number</th>
                    <th>Candidate Name</th>
                    <th>Billable CTC</th>
                    <th>Designation</th>
                    <th>DOJ</th>
                    <th>Location</th>
                    <th>Mobile No.</th>
                    <th>Sign Up Rate</th>
                    <th>Base Invoice Value</th>
                    <th>Recruiter's Payout %</th>
                    <th>Recruiter's Payout</th>
                   <th>Recruiter's Payout Value</th>
                    <th>TTC's Share</th>
                    <th>Expected payment receipt month</th>
                     <th>Payment Received</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td><Form.Check type='checkbox'></Form.Check></td>
                    <td>1</td>
                    
                   
                   </tr>
                   <tr>
                <td><Form.Check type='checkbox'></Form.Check></td>
                    <td>1</td>
                    
                   
                   </tr>
                   <tr>
                <td><Form.Check type='checkbox'></Form.Check></td>
                    <td>1</td>
                    
                   
                   </tr>
                   <tr>
                <td><Form.Check type='checkbox'></Form.Check></td>
                    <td>1</td>
                    
                   
                   </tr>
                   </tbody>
        </Table>
        </Container>
        </div>

        </Container>
    </div>
  )
}

export default Report