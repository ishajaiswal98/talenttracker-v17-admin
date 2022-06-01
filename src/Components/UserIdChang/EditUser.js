import React,{useState} from 'react'

import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer ,toast} from 'react-toastify';
import { Form  , Container , Row , Col , Button ,Modal,Dropdown} from 'react-bootstrap';

const EditUser = () => {
    const [checked, Setchecked]=useState(false)
    const handleCheck = () => Setchecked(!checked)
    const [checked1, Setchecked1]=useState(false)
    const handleCheck1 = () => Setchecked1(!checked1)
    const [checked2, Setchecked2]=useState(false)
    const handleCheck2 = () => Setchecked2(!checked2)
    const [checked3, Setchecked3]=useState(false)
    const handleCheck3 = () => Setchecked3(!checked3)
    const [show, setShow] = useState(false);

    const [selected, Setselected]=useState(false)
    const handleselected = () => Setselected(!selected)
    const [selected1, Setselected1]=useState(false)
    const handleselected1 = () => Setselected1(!selected1)
    const [selected2, Setselected2]=useState(false)
    const handleselected2 = () => Setselected2(!selected2)
    const [selected3, Setselected3]=useState(false)
    const handleselected3 = () => Setselected3(!selected3)
    const [selected4, Setselected4]=useState(false)
    const handleselected4 = () => Setselected4(!selected4)
    const [selected5, Setselected5]=useState(false)
    const handleselected5 = () => Setselected5(!selected5)
    const [selected6, Setselected6]=useState(false)
    const handleselected6 = () => Setselected6(!selected6)
    const [selected7, Setselected7]=useState(false)
    const handleselected7 = () => Setselected7(!selected7)
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const notify = () => toast.success("Based on your request, we have allowed you to remove candidate mobile number from the tracker sheet. However, this is not the best practice we follow with our clients");
    const notify1 = () => toast.success("You are allowed to add special comments/remarks in the tracker sheet.");


    return (
    <div>
          <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container className='myprofile'  >
            <Form>
                
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> JD should be shown to which User Category?</Form.Label>
                <Form.Select aria-label="Default A example">
                    
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                    <option value="4">A&B</option>
                    <option value="5">B&C</option>
                    <option value="6">C&A</option>
                    <option value="7">A,B&C</option>
                    <option value="8">In house</option>
                    <option value="9">A,B,C&In house</option>
                    <option value="8"> A & In house</option>
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>How many JDs a user can unlock in a day</Form.Label>
                <Form.Select aria-label="Default Aexample">
                    
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="16">16</option>
                    <option value="32">32</option>
                    <option value="unlimited">unlimited</option>
                    </Form.Select>
                
                </Col>
              
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>CVs quality check required for this user ID? </Form.Label>
                <Form.Select aria-label="Default example">
                    
                    <option value="Yes">Yes</option>
                    <option value="No">NO</option>
                   
                    </Form.Select>
                
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Detail JD (doc, pdf file sent by client) to be shown to a particular user even if he or she is not accepting the JD? </Form.Label>
                <Form.Select aria-label="Default example">                    
                    <option value="Yes">Yes</option>
                    <option value="No">NO</option>                   
                    </Form.Select>                
                </Col>
               

                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Spoc mobile number to be shown to this user? </Form.Label>
                <Form.Select aria-label="Default example">                    
                    <option value="Yes">Yes</option>
                    <option value="No">NO</option>                   
                    </Form.Select>                
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>The user is a consultancy or individual?  </Form.Label>
                <Form.Select aria-label="Default example">                    
                    <option value="Yes">Consultancy</option>
                    <option value="No">Individual</option>                   
                    </Form.Select>                
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                    <Row>
                <Form.Label  className='fw-bold mb-3 mt-3'>Password</Form.Label>                           
                    <Form.Control type='password' placeholder='change login password'/>
                    <Form.Control type='password' placeholder='confirm password'/>
                    </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'>Unsubscribe :</Form.Label>
                    <Button variant='danger' className='my-5' onClick={handleShow} >Suspend</Button>
                    </Col>
                    <Col xs={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'></Form.Label> 
                        <Form.Check type='checkbox' label='allow user to remove candidate’s mobile number from the tracker sheet' onClick={notify}/>
                        <Form.Select aria-label="Default example">                    
                    <option value="Yes">Allow</option>
                    <option value="No">Don't Allow</option>                   
                    </Form.Select>                
                </Col>
                    
                </Row>
                <Row>
                <Col xs={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'></Form.Label> 
                        <Form.Check type='checkbox' label='allow user to write special remarks, comments in the tracker sheet' onClick={notify1}/>
                        <Form.Select aria-label="Default example">                    
                    <option value="Yes">Allow</option>
                    <option value="No">Don't Allow</option>                   
                    </Form.Select>                
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'>Admin can make it compulsory for user to use own / our database</Form.Label> 
                        <Form.Select aria-label="Default example">                    
                    <option value="Compulsory to use our database">Compulsory to use our database</option>
                    <option value="Compulsory to use own database (Naukri/Monster/Timesjobs etc)">Compulsory to use own database (Naukri/Monster/Timesjobs etc)</option>                   
                    <option value="No compulsion">No compulsion</option>
                    </Form.Select>                
                </Col>
                <Col xs={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'>Number of mobile numbers user can unlock per day</Form.Label> 
                        <Form.Control type='text' />
                        </Col>
                </Row>
                <Row>
                <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>Your Payout</Form.Label>
                  <Form.Check type="checkbox" label="% payout If you use Talent Tracker’s database. " onClick={handleCheck} />
                  {checked? <div>
                   <Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    Select
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item  onClick={handleselected}>If consultancy</Dropdown.Item>
    <Dropdown.Item  onClick={handleselected1} >If Individual</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
                   </div>:<></>}
                  {selected? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    
                  {selected1? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    <Form.Check type="checkbox" label=" % payout if you use your own portal- naukri/monster/times job etc " onClick={handleCheck1} />
                    {checked1? <div>
                   <Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    Select
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item  onClick={handleselected2}>If consultancy</Dropdown.Item>
    <Dropdown.Item  onClick={handleselected3} >If Individual</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
                   </div>:<></>}
                  {selected2? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    
                  {selected3? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}

                    <Form.Check type="checkbox" label=" absolute value payout if use your own portal (Naukri/Monster/Timesjob etc) " onClick={handleCheck2} />
                    {checked2? <div>
                   <Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    Select
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item  onClick={handleselected4}>If consultancy</Dropdown.Item>
    <Dropdown.Item  onClick={handleselected5} >If Individual</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
                   </div>:<></>}
                  {selected4? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    
                  {selected5? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    <Form.Check type="checkbox" label=" absolute value payout---if use Talent Trackers database. " onClick={handleCheck3}/>
                    {checked3? <div>
                   <Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    Select
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item  onClick={handleselected6}>If consultancy</Dropdown.Item>
    <Dropdown.Item  onClick={handleselected7} >If Individual</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
                   </div>:<></>}
                  {selected6? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    
                  {selected7? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                  </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'>Designation</Form.Label>
                    <Form.Control type='text'></Form.Control>
                    </Col>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'>System generated Official email ID of user </Form.Label>
                    <Form.Control type='email'></Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'>Allow one candidate submission by user?</Form.Label>
                    <Form.Select aria-label="Default example">                    
                    <option value="Yes">Yes</option>
                    <option value="No">NO</option>                   
                    </Form.Select>  
                    </Col>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'>Allow user to update the “status” field in “My Workspace </Form.Label>
                    <Form.Select aria-label="Default example">                    
                    <option value="Yes">Yes</option>
                    <option value="No">NO</option>                   
                    </Form.Select>  
                    </Col>
                    <Row>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'>Client Coordination</Form.Label>
                    <Form.Select aria-label="Default example">                    
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>                   
                    </Form.Select>  
                    </Col>
                   
                </Row>
                </Row>
            </Form>
        </Container>
        <Modal
            show={show}
            size="lg"
            onHide={handleClose}
            backdrop="static"
            keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title>“Permanently delete the user account from Master”?
</Modal.Title>
            </Modal.Header>
            
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            yes
          </Button>
          </Modal.Footer>
          </Modal>
    </div>
  )
}

export default EditUser