import React,{useState} from 'react'
import { Container,Row, Col, Form ,Modal,Button, Table} from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { ToastContainer,toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Invoicing = () => {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const notify = () => toast.success("saved");
  return (
    <div>
         <Sidebar />
      <NavbarMenu />
      <ToastContainer/>
      <Container className='myprofile'>
            <Button variant='primary' onClick={handleShow}>Add Invoice </Button>&nbsp;
            <Button variant='danger'><i className='fa fa-download'></i></Button>
        </Container>
        <Container className='myprofile'>
        <Table >
                    <thead>
                        <tr>
                            <th></th>
                <th>Invoice Number</th>
                
                <th>Date</th>
                <th>Client Name </th>
                <th>Client Address</th>
                <th>Client Address-Line 1</th>
                <th>Client Address-Line 2</th>
                <th>Client Address - City</th>
                <th>Client Address - State</th>
                <th>Client GST </th>
                <th>Kind attn </th>
                <th>Candidate Name</th>
                <th>Designation</th>
                <th>Date of joining </th>
                <th>Sign up rate </th>
                <th>CTC</th>
                <th>Inoice Base value </th>
                <th>Subtota</th>
                <th>CGST</th>
                <th>SGST</th>
                <th>IGST</th>
                <th>Total invoice value </th>
                <th>Amount in words </th>
                <th>Action</th>
                <th></th>
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
                       <td>NO</td>
                       <td>na</td>
                       <td><td><Button variant='success' as={Link} to='/'>Edit Invoice</Button></td>
                       <td><Button variant='primary' as={Link} to='/'> save</Button></td></td>
                       <td><Button variant='primary' as={Link} to='/'>Create Invoices</Button></td>
                   </tr>
                   </tbody>
               </Table>
            </Container> 
            <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Invoice Number</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Invoice Date</Form.Label>
                 <Form.Control type="date" />
                </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                  <Form.Label  className='fw-bold mb-3 mt-3'>User ID</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                  </Col>
                  <Col xs={6}>
                  <Form.Label  className='fw-bold mb-3 mt-3'>Candidate  ID</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                  </Col>
                </Row>
                <Row>
                <Col xs={6}>
                  <Form.Label  className='fw-bold mb-3 mt-3'>JD Number</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                  </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client ID</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Name</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address</Form.Label>
                <Form.Control type='number' placeholder='Line 1'></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address</Form.Label>
                 <Form.Control type="text" placeholder='Line 2' />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address - City</Form.Label>
                <Form.Control type='number' placeholder='City'></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address - State</Form.Label>
                 <Form.Control type="text" placeholder='State'/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client GST</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Kind attn</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Candidate Name</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Designation</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Sign up rate</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Date Of Joining</Form.Label>
                 <Form.Control type="date" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>CTC</Form.Label>
                <Form.Control type='text' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Invoice Base Value</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Subtotal</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>CGST</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>IGST</Form.Label>
                <Form.Control type='text' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>SGST</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Total Invoice Value</Form.Label>
                <Form.Control type='text' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Amount In Words</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                </Form>

                </Modal.Body>
                <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={notify}>Save</Button>
        </Modal.Footer>
                </Modal>
        
        
    </div>
  )
}

export default Invoicing