import React from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer } from 'react-bootstrap'
import { Container, Table, Button,ButtonGroup, Form ,Dropdown, Tooltip,OverlayTrigger } from 'react-bootstrap'

const Report = () => {
    function refreshPage(){ 
        window.location.reload(); 
    }
  return (
    <div>
         <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container>
          <div className='top-button'>
        <div className='d-flex text'>
            <p>No of jd (123)</p><span className='mx-3'>|</span>
            <p >No of contacts (23)</p>
            </div>
            <div className='mb-2'>
            <ButtonGroup className="btn btn-light">
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Save Jd</Tooltip>}>
            <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
            <i className="far fa-save"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>

  </Dropdown.Menu>
            </Dropdown>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Add List</Tooltip>}>
            <Dropdown className='mx-2'>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
            <i className="fas fa-plus"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <h5 className='mt-3 mb-3 text-center'>Add JDs List</h5>
    <Form>
      <Form.Group className='mb-3'>
        <Form.Control placeholder='Title'type='text' name="title"/>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control placeholder='Industry' type='text' name="industry"/>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control placeholder='Client Name' type='text' name="client"/>
      </Form.Group>
      <div className='d-flex justify-content-center'>
      <Button>Save</Button>
      
      
      </div>
    </Form>
  </Dropdown.Menu>
            </Dropdown>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Reload Page</Tooltip>}>
            <Button className="btn btn-light mx-2" onClick={refreshPage}><i className="fas fa-redo-alt"></i></Button>
            </OverlayTrigger>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant='success'  href='/report-filter'><i className="fa fa-filter me-2" style={{color:'#fff'}} ></i>Filter</Button>
            <Button variant='danger' style={{marginLeft:'40rem'}}><i className='fa fa-download'></i></Button>
          </ButtonGroup>
            </div>
            </div>
       <Container className='myprofile-cont'>
        <Table >
            <thead>
                <tr>
                    <th></th>
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

        </Container>
    </div>
  )
}

export default Report