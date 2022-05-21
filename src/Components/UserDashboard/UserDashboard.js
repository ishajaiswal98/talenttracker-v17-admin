import React  from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import { Form  , Container , Row , Col , Button ,Table} from 'react-bootstrap';

const UserDashboard = () => {
   
  return (
    <div>
         <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container className='myprofile'  >
            <div>
                <Button variant='outline-secondary'  className='mx-2'>Today</Button>
                <Button variant='outline-secondary' className='mx-2'>This Week</Button>
                <Button variant='outline-secondary'  className='mx-2'>This Month</Button>
                <Button variant='outline-secondary'  className='mx-2'>Last Month</Button>
                <Button variant='outline-secondary'  className='mx-2'>Last Quarter</Button>
                <Button variant='outline-secondary'  className='mx-2'>Last Year</Button>
            </div>
            <Form>
            <Row>
                <Col xs={4}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User ID </Form.Label>
                <Form.Control type='text' placeholder='Enter User ID'/>
                <Button variant='primary' >Search</Button>
                </Col>
                <Col xs={4}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User Name </Form.Label>
                <Form.Control type='text' placeholder='Enter User Name'/>
                
                </Col>
                <Col xs={4}>
                
                <Button variant='danger' ><i className='fa fa-download'></i></Button>
                </Col>
                </Row>
                    </Form>
                    </Container>
                       
            <Container className='myprofile'>
                <Table >
                    <thead>
                        <tr>
                            <th></th>
                <th>User Id</th>
                <th>User Name </th>
                <th>Location</th>
                <th>Category</th>
                <th>No. of mobile numbers/emails viewed /downloaded</th>
                <th>No. of JDs locked </th>
                <th>No. of JDs at interview stag </th>
                <th>No. of successful closures</th>
                <th>No. of JDs at offer stage </th>
                <th>No. of JD delivered/submitted but feedback pending from client</th>
                <th>No.of pending delivery submissions by user after locking the JDs</th>
                <th>No. of JD rework </th>
                <th>My user rating</th>
                <th>My total payouts/incentives</th>
               </tr>
               </thead>
               <tbody>
                   <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                       <td>1</td>
                       <td>abc</td>
                       <td>patna</td>
                       <td>A</td>
                       <td>7654387654</td>
                       <td>ghasjg</td>
                       <td>6</td>
                       <td>yh</td>
                       <td>8</td>
                       <td>8 </td>
                       <td>4</td>
                       <td>6</td>
                       <td>5</td>
                       
                   </tr>
                   <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                       <td>1</td>
                       <td>abc</td>
                       <td>patna</td>
                       <td>A</td>
                       <td>7654387654</td>
                       <td>ghasjg</td>
                       <td>6</td>
                       <td>yh</td>
                       <td>8</td>
                       <td>8</td>
                       <td>4</td>
                       <td>6</td>
                       <td>5</td>
                       
                   </tr>
                   <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                       <td>1</td>
                       <td>abc</td>
                       <td>patna</td>
                       <td>A</td>
                       <td>7654387654</td>
                       <td>ghasjg</td>
                       <td>6</td>
                       <td>yh</td>
                       <td>8</td>
                       <td>8</td>
                       <td>4</td>
                       <td>6</td>
                       <td>5</td>
                       
                   </tr>
                   <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                       <td>1</td>
                       <td>abc</td>
                       <td>patna</td>
                       <td>A</td>
                       <td>7654387654</td>
                       <td>ghasjg</td>
                       <td>6</td>
                       <td>yh</td>
                       <td>8</td>
                       <td>8</td>
                       <td>4</td>
                       <td>6</td>
                       <td>5</td>
                       
                   </tr>
                   <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                       <td>1</td>
                       <td>abc</td>
                       <td>patna</td>
                       <td>A</td>
                       <td>7654387654</td>
                       <td>ghasjg</td>
                       <td>6</td>
                       <td>yh</td>
                       <td>8</td>
                       <td>8</td>
                       <td>4</td>
                       <td>6</td>
                       <td>5</td>
                       
                   </tr>
               </tbody>
               </Table>
               </Container>
               
            
    
    </div>
  )
}

export default UserDashboard