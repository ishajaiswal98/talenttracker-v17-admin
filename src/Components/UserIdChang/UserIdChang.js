import React from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import { Form  , Container , Row , Col , Button ,Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './UserId.css'

const UserIdChang = () => {
    
    
  return (
    <div>
         <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container className='myprofile'  >
            <Form>
            <Row>
                <Col xs={4}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User ID </Form.Label>
                <Form.Control type='text' placeholder='Enter User ID'/>
                <Button variant='primary' >Search</Button>
                <Button variant='danger' ><i className='fa fa-download'></i></Button>
                </Col>
                <Col xs={4}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User Name </Form.Label>
                <Form.Control type='text' placeholder='Enter User ID'/>
                
                </Col>
                
            
                </Row>
                    </Form>
                    </Container>
                    {/* <div className={show? 'show2':'show'}>      */}
            <Container className='myprofile'>
                <Table responsive>
                    <thead>
                        <tr>
                            <th></th>
                <th>User Category</th>
                
                <th>How many JDs a user can unlock in a day?</th>
                <th>CVs quality check required for this user ID? </th>
                <th>Detail JD (doc, pdf file sent by client) to be shown to a particular user even if he or she is  accepting the JD?  </th>
                <th>Password</th>
                <th>Suspension of user account</th>
                <th>Allow user to remove candidate’s mobile number from the tracker sheet</th>
                <th>Allow user to write special remarks, comments in the tracker shee</th>
                <th>Admin can make it compulsory for user to use own / our database</th>
                <th>Don't allow user to edit the status</th>
                <th>Action</th>
               </tr>
               </thead>
               <tbody>
                   <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                       <td>A</td>
                       <td>8</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td  >yes</td>
                       <td>YES</td>
                       <td>yes</td>
                       <td>na</td>
                       <td>Na</td>
                       <td><Button as={Link} to='/edit-user-id-level' variant='primary'>Edit</Button></td>
                   </tr>
               </tbody>
               </Table>
               </Container>
               
               {/* </div> */}
            </div>    
  )
}

export default UserIdChang