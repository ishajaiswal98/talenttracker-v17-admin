import React from 'react'

const Invoicing = () => {
  return (
    <div>
         <Sidebar />
      <NavbarMenu />
      <ToastContainer/>
      <Container className="jd-cont">
            <Form>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Invoice Number</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                </Row>
                </Form>
                </Container>
        
        
    </div>
  )
}

export default Invoicing