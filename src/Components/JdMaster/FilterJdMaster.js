import React, {useState} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row, Col,Form , Button} from 'react-bootstrap'
import { ToastContainer  } from 'react-toastify';
import Select from 'react-select'
const FilterJdMaster = () => {
  const [checked, Setchecked]=useState(false)
  const handleCheck = () => Setchecked(!checked)
  const [checked1, Setchecked1]=useState(false)
  const handleCheck1 = () => Setchecked1(!checked1)
  const options = [
    { value: 'Services', label: 'Services' },
    { value: 'Manufacturing', label: 'Manufacturing' },
    { value: 'IT- Information Technology', label: 'IT- Information Technology' },
    { value: 'Education', label: 'Education' },
    { value: 'Real estate/Construction', label: 'Real estate/Construction' },
    { value: 'Finance/BFSI', label: 'Finance/BFSI' },
    { value: 'Healthcare/Pharm', label: 'Healthcare/Pharm' },
    { value: 'Retail', label: 'Retail' },
    { value: 'Hospitality', label: 'Hospitality' },
    { value: 'Public Sector/Philonthropy/Associations', label: 'Public Sector/Philonthropy/Associations' },
    { value: 'FMCG', label: 'FMCG' },
    { value: 'Textile', label: 'Textile' },
    { value: 'Telecom', label: 'Telecom' },
    { value: 'logistics/supply chain', label: 'logistics/supply chain' },
    { value: 'Media/Publishing/Entertainment', label: 'Media/Publishing/Entertainment' },
    { value: 'Others', label: 'Others' },
    { value: 'Create', label: 'Create' }
  
  ]
  const option2 = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'In-House', label: 'In-House' }
   
  ]
  const option1 = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '10', label: '10' },
    { value: 'Unlimited', label: 'Unlimited' }
  ]
  const option3 = [
    { value: 'open (not accepted by any user)', label: 'open (not accepted by any user)' },
    { value: 'delivery (accepted but not yet delivered)', label: 'delivery (accepted but not yet delivered)' },
    { value: 'delivery done-await client feedback', label: 'delivery done-await client feedback' },
    { value: 'interview stage', label: 'interview stage' },
    { value: 'offer stage', label: 'offer stage' },
    { value: 'JD successfully closed', label: 'JD successfully closed' },
    { value: 'Joined', label: 'Joined' },
    { value: 'rework', label: 'rework' }
  ]
  
  return (
    <div className='dashboard'>
      <Sidebar />
      <NavbarMenu />
      <ToastContainer/>
      <Container className="jd-cont">
            <form>
             
              <Row>
              <Row>
                    <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>JD upload date  </Form.Label>
                <Form.Control type="date" />
                </Col>
                <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>JD upload time </Form.Label>
                  <Form.Control type="time" />
                </Col>
                </Row>
                <Col xs={6}>
                  <Row>
                    <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Assured delivery date</Form.Label>
                <Form.Control type="date" />
                </Col>
                <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>Assured delivery time</Form.Label>
                  <Form.Control type="time" />
                </Col>
                </Row>
                </Col>
              </Row>
             
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> Submission dates</Form.Label>
                <Form.Control type='date' />
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Status as per admin </Form.Label>
                <Select isMulti options={option3} />
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Status as per user</Form.Label>
                <Select isMulti options={option3} />  
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> Category</Form.Label>
                <Select isMulti options={option2} />                
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Exclusivity</Form.Label>
                <Select isMulti options={option1} />                
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User Id </Form.Label>
                <Form.Control type='text' placeholder=' '/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User Name</Form.Label>
                <Form.Control type='text' placeholder='  '/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Industry</Form.Label>
                <Select isMulti options={options} />
                </Col>
              </Row>
              <Row>
              <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Priority Tag</Form.Label>
                <Form.Control type='text' placeholder='  '/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>CVs quality check is required or not?</Form.Label>
                <Form.Control type='text' placeholder='  '/>
                </Col>
              </Row>
              <Row>
              <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Name</Form.Label>
                <Form.Control type='text' placeholder='  '/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Salary</Form.Label>
                <Form.Control type='text' placeholder='  '/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>work location  </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">Delhi</option>
                    <option value="2">Gurgaon</option>
                    <option value="3">Noida</option>
                    <option value="4">Mumbai</option>
                    <option value="5">Pune</option>
                    <option value="6">Ahmedabad</option>
                    <option value="7">Chennai</option>
                    <option value="8">Kolkata</option>
                    <option value="9">Hyderabad</option>
                    <option value="10">Banglore</option>
                    <option value="11">Jaipur</option>
                   
                    </Form.Select>
                </Col>
               
              </Row>
                <Row>
                   
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Payment Terms</Form.Label>
                    <Form.Select aria-label="Default 30days example">
                    <option>select</option>
                    <option value="1">Immediate</option>
                    <option value="1">30 days</option>
                    <option value="2">45 days</option>
                    <option value="1">60 days</option>
                    <option value="2">90 days</option>
                    </Form.Select>

                    </Col>
                </Row>
                <Row>
                 
                  <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>Sign Up Rate </Form.Label>
                    <Form.Control type="text" placeholder=''></Form.Control>
                    </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                    
                    <Form.Select aria-label="Default select example">
                    <option>create</option>
                    <option value="1">- 8.33%</option>
                    <option value="2">7.5%</option>
                    <option value="3">7%</option>
                    <option value="4">10%</option>
                    <option value="5">6%</option>
                    <option value="6">12%</option>
                    </Form.Select>
                  </Col>
                 
                </Row>
                <Row>
                  <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>Your Payout</Form.Label>
                  <Form.Check type="checkbox" label="% payout If you use Talent Tracker’s database. " onClick={handleCheck} />
                  {checked?<Form.Select className="mt-2 mb-2"><option value="if consultancy">if consultancy</option><option value="If individual">If individual</option></Form.Select>: <></>}
                    <Form.Check type="checkbox" label=" % payout if you use your own portal- naukri/monster/times job etc " onClick={handleCheck1} />
                    {checked1?<Form.Select className="mt-2 mb-2"><option value="if consultancy">if consultancy</option><option value="If individual">If individual</option></Form.Select>: <></>}
                    <Form.Check type="checkbox" label=" absolute value payout if use your own portal (Naukri/Monster/Timesjob etc) " />
                    <Form.Check type="checkbox" label=" absolute value payout---if use Talent Trackers database. " />
                  </Col>

                </Row>
                <Row>
                  <Col xs={12}>
                    <Form.Group className="mt-3">
                      <Form.Label className="fw-bold">Client coordination to be done by whom?- </Form.Label>
                      <Form.Select aria-label="Default select example">
                    <option>Select</option>
                    <option value="1">Admin</option>
                    <option value="2">User</option>
                    
                    </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="success" className="mt-3">Apply filter</Button>
                <Button variant="primary" className="mt-3">Reset</Button>
                <Button variant="danger" className="mt-3">
            <i className="fas fa-close me-3"></i>Close 
          &nbsp;&nbsp;</Button> 

            </form>
        </Container>
    </div>
  )
}

export default FilterJdMaster