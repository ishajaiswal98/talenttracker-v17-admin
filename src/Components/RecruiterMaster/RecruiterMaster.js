import React, {useState} from 'react'
import { Container, Table, Modal, Button, Form, Row, Col } from 'react-bootstrap'
import {  ButtonGroup} from 'react-bootstrap';
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import { FaStar } from "react-icons/fa";
import {  Radio, Rating } from "./RatingStyles";
import './MyProfile.css'
import { Link } from 'react-router-dom';
const RecruiterMaster = () => {
  const [rate, setRate] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const notify = () => toast.success("saved");
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
   

    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
   
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container>
          <div className='top-button'>
       
            <div className='mb-2'>
            
          <ButtonGroup>
            <Button variant='success'  as={Link} to='/Filter'><i className="fa fa-filter me-2" style={{color:'#fff'}} ></i>Filter</Button>
            
          </ButtonGroup>
         
          <Button variant='danger' className='mx-5'><i className='fa fa-download'></i></Button>
            </div>
            </div>
            </Container>
            <div className='jd-wraper' >  
       <Container fluid className='table-data'>
       
        <Table responsive className='data-table' hover >
            <thead>
                <tr>
                  <th></th>
                    <th>User Id</th>
                    <th>User name</th>
                    <th>Date Of adddition User</th>
                    <th>Category</th>
                    <th>How Many JS's</th>
                    <th>Cv Quality Check</th>
                    <th>Admin Assigned Information</th>
                    <th>Rating</th>
                    <th>Consultancy or Indivisual</th>
                    <th>Mobile No.</th>
                    <th>Current Location</th>
                    <th>Prefrence It/n On It</th>
                    <th>Personal Information</th>
                    <th>Work Information</th>
                    
                    <th>Bank Details</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td><Form.Check type='checkbox'/></td>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td  onClick={handleShow4} style={{color:'yellow', textDecoration:'underline'}}><i class="fa fa-star" aria-hidden="true"></i></td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'orange', textDecoration:'underline'}}><i class="fa fa-address-book" aria-hidden="true"></i></td>
                    <td onClick={handleShow2} style={{color:'red', textDecoration:'underline'}}><i class="fa fa-briefcase" aria-hidden="true"></i></td>
                    <td onClick={handleShow3} style={{color:'green', textDecoration:'underline'}}><i class="fa fa-home" aria-hidden="true"></i></td>
                    
                   
                </tr>
                <tr>
                <td><Form.Check type='checkbox'/></td>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td  onClick={handleShow4} style={{color:'yellow', textDecoration:'underline'}}><i class="fa fa-star" aria-hidden="true"></i></td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'orange', textDecoration:'underline'}}><i class="fa fa-address-book" aria-hidden="true"></i></td>
                    <td onClick={handleShow2} style={{color:'red', textDecoration:'underline'}}><i class="fa fa-briefcase" aria-hidden="true"></i></td>
                    <td onClick={handleShow3} style={{color:'green', textDecoration:'underline'}}><i class="fa fa-home" aria-hidden="true"></i></td>
                    
                </tr>
                <tr>
                <td><Form.Check type='checkbox'/></td>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td  onClick={handleShow4} style={{color:'yellow', textDecoration:'underline'}}><i class="fa fa-star" aria-hidden="true"></i></td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'plink', textDecoration:'underline'}}><i class="fa fa-address-book" aria-hidden="true"></i></td>
                    <td onClick={handleShow2} style={{color:'red', textDecoration:'underline'}}><i class="fa fa-home" aria-hidden="true"></i></td>
                    <td onClick={handleShow3} style={{color:'green', textDecoration:'underline'}}><i class="fa fa-home" aria-hidden="true"></i></td>
                   
                </tr>
                <tr>
                <td><Form.Check type='checkbox'/></td>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td onClick={handleShow4} style={{color:'yellow', textDecoration:'underline'}}><i class="fa fa-star" aria-hidden="true"></i></td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'orange', textDecoration:'underline'}}><i class="fa fa-address-book" aria-hidden="true"></i></td>
                    <td onClick={handleShow2} style={{color:'red', textDecoration:'underline'}}><i class="fa fa-briefcase" aria-hidden="true"></i></td>
                    
                   
                </tr>
                <tr>
                <td><Form.Check type='checkbox'/></td>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td onClick={handleShow4} style={{color:'yellow', textDecoration:'underline'}}><i class="fa fa-star" aria-hidden="true"></i></td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'orange', textDecoration:'underline'}}><i class="fa fa-address-book" aria-hidden="true"></i></td>
                    <td onClick={handleShow2} style={{color:'red', textDecoration:'underline'}}><i class="fa fa-home" aria-hidden="true"></i></td>
                    
                   
                </tr>
                <tr>
                <td><Form.Check type='checkbox'/></td>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow3} style={{color:'green', textDecoration:'underline'}}><i class="fa fa-home" aria-hidden="true"></i></td>
                   
                </tr>
                <tr>
                <td><Form.Check type='checkbox'/></td>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow3} style={{color:'green', textDecoration:'underline'}}><i class="fa fa-home" aria-hidden="true"></i></td>
                   
                </tr>
                <tr>
                <td><Form.Check type='checkbox'/></td>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow3} style={{color:'green', textDecoration:'underline'}}><i class="fa fa-home" aria-hidden="true"></i></td>
                   
                </tr>
                <tr>
                <td><Form.Check type='checkbox'/></td>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                   
                    <td><Button variant='primary' as={Link} to='/filter'>Edit</Button>
                    <Button variant='primary'>Delete</Button>
                    
                    </td> <td onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                </tr>
                
            </tbody>
        </Table>
        
       
       
         </Container>
         </div>
       
        <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Admin Assigned Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <Row>
                <Col xs={6}>
                    <Form.Label className='fw-bold mb-3'>Category</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                    <option value="4">in-house</option>
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 '>CV Quality Check</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select</option>
                    <option value="1">YES</option>
                    <option value="2">NO</option>
                    </Form.Select>
                    
                    </Col>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'>c.	How many JDs a user can unlock in a day</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">4</option>
                    <option value="4">8</option>
                    <option value="5">16</option>
                    <option value="6">unlimited</option>
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>JD to be shown to user? </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select</option>
                    <option value="1">YES</option>
                    <option value="2">NO</option>
                    </Form.Select>
                    
                    </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Designation</Form.Label>
                <Form.Control type="text" placeholder="  " />
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>System generated Official email ID of user </Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Compulsion</Form.Label>
                <Form.Check type="checkbox" label="Compulsory Use Our Database" />
                <Form.Check type="checkbox" label=". Compulsory Use Own Database (Naukri, Monster, Timesjobs etc)" />
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Candidate mobile number </Form.Label>
                <Form.Check type="checkbox" label="Allow user to remove candidate mobile number from the tracker sheet" />
                </Col>
            </Row>
            <Row>
            <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Special remarks by user </Form.Label>
                <Form.Check type="checkbox" label="Allow user to write special remarks, comments in the tracker sheet" />
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Allow one candidate submission by user?  </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select</option>
                    <option value="1">YES</option>
                    <option value="2">NO</option>
                    </Form.Select>
                </Col>
            </Row>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={notify}>Save</Button>
        </Modal.Footer>
      </Modal>
      
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Personal Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={6}>
        <Form.Label className='fw-bold mb-3 mt-3'>First Name </Form.Label>
          <Form.Control type='text' value='Isha'/>
          </Col>
          <Col xs={6}>
          <Form.Label className='fw-bold mb-3 mt-3'>Last Name </Form.Label>
          <Form.Control type='text' Value='jaiswal'/>
          </Col>
          </Row>
          <Row>
            <Col xs={6}>
          <Form.Label className='fw-bold mb-3 mt-3'>Personal Email</Form.Label>
          <Form.Control type='text' value='eshajaiswal98@gmail.com'/>
          </Col>
          <Col xs={6}>
          <Form.Label className='fw-bold mb-3 mt-3'>Mobile Number</Form.Label>
          <Form.Control type='text' value='7654328965'/>
          </Col>
          </Row>
          <Row>
            <Col xs={6}>
            <Form.Label className='fw-bold mb-3 mt-3'>Current Location-City,State</Form.Label>
          <Form.Control type='text' value='patna , Bihar'/>
          </Col>
          <Col xs={6}>
          <Form.Label className='fw-bold mb-3 mt-3'>Password</Form.Label>
          <Form.Control type='password' value='7654328965'/>
          </Col>
          </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Work Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>Highest Qualification</Form.Label>
        <Form.Control type='text'  value='Mca'/>
              </Col>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>Graduation</Form.Label>
        <Form.Control type='text' value='Bca'/>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>Date of Birth</Form.Label>
        <Form.Control type='text' value='17-oct-1998'/>
              </Col>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>Languages Known</Form.Label>
        <Form.Control type='text' value='Hindi,English'/>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>No. of Years Recruitment Experience (india/International)</Form.Label>
        <Form.Control type='text' value='4'/>
              </Col>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>preferred sectors to JDs? - IT/non IT/ Both</Form.Label>
        <Form.Control type='text' value='IT'/>
              </Col>
            </Row>
            <Row>
              
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>Currently employed for some organization as a full time employee?</Form.Label>
        <Form.Control type='text' value='YES'/>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>Are you a consultancy or an individual?</Form.Label>
        <Form.Control type='text' value='Individual'/>
              </Col>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>Own portal available? (Naukri, Monsterkkb  Times jobs etc)</Form.Label>
        <Form.Control type='text' value='yes'/>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>preferred industries to take JDs? (dropdown of industry sectors)
</Form.Label>
        <Form.Control type='text' value='services'/>
              </Col>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>handle PAN India JDs or only regional?</Form.Label>
        <Form.Control type='text' value='yes'/>
              </Col>
           </Row>
                              
              
        </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>User Bank Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <Row>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Name as per bank account</Form.Label>
                        <Form.Control type="text" value=' isha '></Form.Control>
                    </Col>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Bank Name</Form.Label>
                        <Form.Control type="text" value='central bank of india '></Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Account Number</Form.Label>
                        <Form.Control type="text" value='3461027255 '></Form.Control>
                    </Col>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> IFSC</Form.Label>
                        <Form.Control type="text" value=' CBIN0283353'></Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Account Type</Form.Label>
                        <Form.Control type="text" value=' saving'></Form.Control>
                    </Col>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Branch Location</Form.Label>
                        <Form.Control type="text" value=' hanuman nagar'></Form.Control>
                    </Col>
                </Row>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      <Modal show={show4} onHide={handleClose4}>
        <Modal.Header closeButton>
          <Modal.Title>Rating</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <form>
                    <Row>
                        <Col xs={6}>
                        <Form.Label className='fw-bold mb-3'>Category</Form.Label>
                        <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                    </Form.Select>

                        </Col>
                        <Col xs={6}>
                        <Form.Label className='fw-bold mb-3'>User ID</Form.Label>
                        <Form.Control type='text' placeholder='Enter your user Id'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                        <Form.Label className='fw-bold mb-3'>Months & Year</Form.Label>
                        <Form.Control type='text' placeholder=' Enter Months & Year'/>
                        </Col>
                        <Col xs={6}>
                        <Form.Label className='fw-bold mb-3'>Rating Parameter</Form.Label>
                        <Form.Control type='text' placeholder=' Out of 10'/>
                        <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    {/* <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' /> */}
                    <Button variant="primary" onClick={handleClose4}>
            Save 
          </Button> 
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                        <Form.Label className='fw-bold mb-3'>Final Rating</Form.Label>
                        
                        <Container>
      {[...Array(10)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
                alert(`Are you sure you want to give ${givenRating} stars ?`);
              }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ? "FFDF00"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
                   
          
                        </Col>
                    </Row>
                </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        
    </div>
  )
}

export default RecruiterMaster