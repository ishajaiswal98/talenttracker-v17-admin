import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Col,Row, Form} from 'react-bootstrap'
import { ToastContainer  } from 'react-toastify'

const FilterReport = () => {
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container className='myprofile'>
            <Form>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Enter year</Form.Label>
                <Form.Control type='text' placeholder='Enter  Year'/>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Enter Month</Form.Label>
                <Form.Control type='text' placeholder='Enter  Month'/>
                </Col>
            </Row>
            </Form>
        </Container>
    </div>
  )
}

export default FilterReport