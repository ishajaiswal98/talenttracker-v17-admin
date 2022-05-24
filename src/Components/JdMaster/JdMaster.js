import React, {useState} from 'react'
import { Container, Table,Row,Col,Button,Modal, Form } from 'react-bootstrap'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

import {CSVLink} from "react-csv"
import './JdMaster.css'



const JdMaster = () => {
  // const csvData = [
  //   ["	JD number", "Assured Delivery Date-Time", "Client details", "JD status", "User name who accepted the JD", "Category", "Force to use our database?", "Exclusivity", "Cvs quality check", "priority tag(P)", "JD details", "Company", "Job description", "Terms of JD	", "remarks/comments", "Client Coordination", "Admin spoc", "Allow one candidate submission by user?", "JD Acceptance", "Submission Date", "Feedback from client updated by user", "Feedback from admin", "Cvs quality approval", "Status as per User	" ,"Offer", "JD upload date-time"],
  //   ["1232456", "5-5-22", "yes", "na", "isha", "A", "yes","yes", "na","na","na","na","yes","na","na","na","na","na","na","na"]
  // ];
  const Studentlist = [
    {id:1, Date:"2", Clientname:"prashant Kumar",JDtitle:"Automobile",JDlocation:"Patna",RecruiterID:"A",Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null", LastAppraisal:"18-may-2022"},
    {id:2, Date:"003", Clientname:"neeraj Kumar", JDtitle:"Automobile",JDlocation:"Ranchi", RecruiterID:"B",Candidatename:"no", Currentdesignation:"n/a", Currentsalary:"null",LastAppraisal:"19-may-2022"},
    {id:3, Date:"33", Clientname:"prashant Kumar", JDtitle:"Automobile",JDlocation:"Haryana",RecruiterID:"C", Candidatename:"yes", Currentdesignation:"n/a", Currentsalary:"null", LastAppraisal:"20-may-2022"},
    {id:4, Date:"33", Clientname:"dd Kumar", JDtitle:"Automobile",JDlocation:"Delhi", RecruiterID:"in-house", Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null",LastAppraisal:"21-may-2022"}
]
const headers = [
    {lable:"JD number ", key:"id"},
    {label:"Assured Delivery Date-Time ", key:"Date"},
    {label:"Client details", key:"Clientname"},
    {label:"JD status", key:"JDtitle"},
    {label:"User name who accepted the JD", key:"JDlocation"},
    {label:"Category", key:"RecruiterID"},
    {label:"Force to use our database?", key:"Candidatename"},
    {label:"Exclusivity", key:"Currentdesignation"},
    {label:"Cvs quality check", key:"Currentsalary"},
    {label:"priority tag(P", key:"priority tag(P"},
    {label:"remarks", key:"remarks"},
    {label:"Job description", key:"Jobdescription"},
    {label:"Client cordination", key:"clientcordination"},
    {label:"Allow one candidate submission by user?", key:"Allow one candidate submission by user?"},
    {label:"Submission Date", key:"SubmissionDate"},
    {label:"Feedback from client updated by user", key:"jdtitle"},
    {label:"Feedback from admin", key:""},
    {label:"Cvs quality approval", key:""},
    {label:"Status as per User", key:""},
    {label:"JD upload date-time", key:"Date"}
   

]
const csvReport = {
  filename: 'Studentlist.csv',
  headers: headers,
  data: Studentlist
}
  
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

  const [show5, setShow5] = useState(false);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);
  const [show6, setShow6] = useState(false);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        
        <Container className='myprofile' >
          <Button variant='success' as={Link} to='/filter-jd-master'><i className='fa fa-filter'>Filter</i></Button>
          <Button className='mb-2 mx-5' variant='danger'><CSVLink {...csvReport} style={{textDecoration:"none", color:"white"}}><i className='fas fa-download' /></CSVLink></Button>
         </Container>
         
         <div className='jd-wraper' >  
       <Container fluid className='table-data'>
       
        <Table responsive className='data-table' hover >
            <thead>
                <tr>
                  <th></th>
                <th>JD number</th>
                            <th>Assured Delivery Date-Time </th>
                            <th>Client details</th>
                            <th>JD status </th>
                            <th>User name who accepted the JD</th>
                            <th>Category</th>
                            <th>Force to use our database? </th>
                            <th>Exclusivity</th>
                            <th> Cvs quality check</th>
                          
                            <th>priority tag(P) </th>
                            <th>JD details</th>
                           
                            <th>Company</th>
                            
                            <th>Job description </th>
                            <th>Terms of JD</th>
                            <th>remarks/comments</th>
                            <th>Client Coordination </th>
                            <th>Admin spoc </th>
                            
                            <th>Allow one candidate submission by user?  </th>
                            <th>JD Acceptance</th>
                            <th>Submission Date</th>
                            <th>Feedback from client updated by user</th>
                            <th>Feedback from admin </th>
                            <th>Cvs quality approval</th>
                            <th>Status as per User</th>
                            <th>Offer</th>
                            <th>JD upload date-time</th>
                            <th>Action</th>
                    
                </tr>
            </thead>
            <tbody>
            <tr>
               <td><Form.Check type='checkbox'></Form.Check></td>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td >n/a</td>
                    <td>na</td>
                      <td>na</td>
                      <td>Na</td>
                    <td  onClick={handleShow1} style={{color:'green', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                    <td  onClick={handleShow4} className='position'> company Name<td className='absolute'> <span className='d-flex'> 
            
            <i className="fas fa-globe me-2"  ></i> | <i className="fab fa-linkedin ms-2 me-2"></i> | <i className="fas fa-info-circle ms-2"></i>  </span></td></td>
                    
                   
                    <td >n/a</td>
                    <td onClick={handleShow5} style={{color:'orange', textDecoration:'underline'}}><i className='fa fa-eye'></i></td>
                   
                    <td>n/a</td>
                    
                    
                    <td>Indivisual</td>
                    <td onClick={handleShow6} style={{color:'brown' ,textDecoration:'underline'}}><i className='fa fa-user'></i></td>
                    <td>patna</td>
                    <td  onClick={handleShow3} style={{color:'red', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td >n/a</td>
                    <td >n/a</td>
                    <td >na</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td>Na</td>
                    <td>  <Button variant='primary' as={Link} to='/edit-jd-master'><i className='fa fa-edit'></i></Button></td>
                    
                   <td> <Button variant='danger'><i className='fa fa-trash'></i></Button></td>    
                </tr>
                <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td >n/a</td>
                    <td>na</td>
                      <td>na</td>
                      <td>Na</td>
                    <td  onClick={handleShow1} style={{color:'green', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                   
                    <td >n/a</td>
                    <td onClick={handleShow5} style={{color:'orange', textDecoration:'underline'}}><i className='fa fa-eye'></i></td>
                   
                    <td>n/a</td>
                    
                    
                    <td>Indivisual</td>
                    <td onClick={handleShow6} style={{color:'brown' ,textDecoration:'underline'}}><i className='fa fa-user'></i></td>
                    <td>patna</td>
                    <td  onClick={handleShow3} style={{color:'red', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td >n/a</td>
                    <td >n/a</td>
                    <td >na</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td>Na</td>
                    <td><Button variant='primary' as={Link} to='/edit-jd-master'><i className='fa fa-edit'></i></Button></td>
                    
                    <td><Button variant='danger'><i className='fa fa-trash'></i></Button></td>               
                </tr>
                <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td >n/a</td>
                    <td>na</td>
                      <td>na</td>
                      <td>Na</td>
                    <td  onClick={handleShow1} style={{color:'green', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                   
                    <td >n/a</td>
                    <td onClick={handleShow5} style={{color:'orange', textDecoration:'underline'}}><i className='fa fa-eye'></i></td>
                   
                    <td>n/a</td>
                    
                    
                    <td>Indivisual</td>
                    <td onClick={handleShow6} style={{color:'brown' ,textDecoration:'underline'}}><i className='fa fa-user'></i></td>
                    <td>patna</td>
                    <td  onClick={handleShow3} style={{color:'red', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td >n/a</td>
                    <td >n/a</td>
                    <td >na</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td>Na</td>
                    <td><Button variant='primary' as={Link} to='/edit-jd-master'><i className='fa fa-edit'></i></Button></td>
                    
                    <td><Button variant='danger'><i className='fa fa-trash'></i></Button></td>               
                </tr>
                <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td >n/a</td>
                    <td>na</td>
                      <td>na</td>
                      <td>Na</td>
                    <td  onClick={handleShow1} style={{color:'green', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                   
                    <td >n/a</td>
                    <td onClick={handleShow5} style={{color:'orange', textDecoration:'underline'}}><i className='fa fa-eye'></i></td>
                   
                    <td>n/a</td>
                    
                    
                    <td>Indivisual</td>
                    <td onClick={handleShow6} style={{color:'brown' ,textDecoration:'underline'}}><i className='fa fa-user'></i></td>
                    <td>patna</td>
                    <td  onClick={handleShow3} style={{color:'red', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td >n/a</td>
                    <td >n/a</td>
                    <td >na</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td>Na</td>
                    <td><Button variant='primary' as={Link} to='/edit-jd-master'><i className='fa fa-edit'></i></Button></td>
                    
                    <td><Button variant='danger'><i className='fa fa-trash'></i></Button></td>               
                </tr>
                <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td >n/a</td>
                    <td>na</td>
                      <td>na</td>
                      <td>Na</td>
                    <td  onClick={handleShow1} style={{color:'green', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                   
                    <td >n/a</td>
                    <td onClick={handleShow5} style={{color:'orange', textDecoration:'underline'}}><i className='fa fa-eye'></i></td>
                   
                    <td>n/a</td>
                    
                    
                    <td>Indivisual</td>
                    <td onClick={handleShow6} style={{color:'brown' ,textDecoration:'underline'}}><i className='fa fa-user'></i></td>
                    <td>patna</td>
                    <td  onClick={handleShow3} style={{color:'red', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td >n/a</td>
                    <td >n/a</td>
                    <td >na</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td>Na</td>
                    <td><Button variant='primary' as={Link} to='/edit-jd-master'><i className='fa fa-edit'></i></Button></td>
                    
                    <td><Button variant='danger'><i className='fa fa-trash'></i></Button></td>               
                </tr>
                <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td >n/a</td>
                    <td>na</td>
                      <td>na</td>
                      <td>Na</td>
                    <td  onClick={handleShow1} style={{color:'green', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                   
                    <td >n/a</td>
                    <td onClick={handleShow5} style={{color:'orange', textDecoration:'underline'}}><i className='fa fa-eye'></i></td>
                   
                    <td>n/a</td>
                    
                    
                    <td>Indivisual</td>
                    <td onClick={handleShow6} style={{color:'brown' ,textDecoration:'underline'}}><i className='fa fa-user'></i></td>
                    <td>patna</td>
                    <td  onClick={handleShow3} style={{color:'red', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td >n/a</td>
                    <td >n/a</td>
                    <td >na</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td>Na</td>
                    <td><Button variant='primary' as={Link} to='/edit-jd-master'><i className='fa fa-edit'></i>
                    </Button></td>
                    
                    <td><Button variant='danger'><i className='fa fa-trash'></i></Button></td>               
                </tr>
                <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td >n/a</td>
                    <td>na</td>
                      <td>na</td>
                      <td>Na</td>
                    <td  onClick={handleShow1} style={{color:'green', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                   
                    <td >n/a</td>
                    <td onClick={handleShow5} style={{color:'orange', textDecoration:'underline'}}><i className='fa fa-eye'></i></td>
                   
                    <td>n/a</td>
                    
                    
                    <td>Indivisual</td>
                    <td onClick={handleShow6} style={{color:'brown' ,textDecoration:'underline'}}><i className='fa fa-user'></i></td>
                    <td>patna</td>
                    <td  onClick={handleShow3} style={{color:'red', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td >n/a</td>
                    <td >n/a</td>
                    <td >na</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td>Na</td>
                    <td><Button variant='primary' as={Link} to='/edit-jd-master'><i className='fa fa-edit'></i></Button></td>
                    
                    <td><Button variant='danger'><i className='fa fa-trash'></i></Button></td>               
                </tr>
            </tbody>
            </Table>
            
            
            
            </Container>
            </div>
            <Modal show={show1} onHide={handleClose1} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-suitcase me-3" ></i>Jd Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
                <h6 className='fw-bold mt-5 mx-3'> <i className="fab fa-firefox me-2"></i> Website: </h6>
            <a href="https://example.com" className='mx-3'>https://example.com</a>
            <h6 className='fw-bold mt-5 mx-3'> <i className="fab fa-linkedin me-2"></i> LinkedIn: </h6>
            <a href="https://linkedin.com" className='mx-3'>https://linkedin.com</a>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Client company name to be disclosed to the candidate?: <span className='text-muted'> No</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Experience: <span className='text-muted'> 2 years</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> Salary: <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-book me-2"></i> Education: <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-map-marked-alt"></i> Work Location: <span className='text-muted'> Patna, Bihar , India</span></h6>
            </Col>
            <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fab fa-intercom"></i> Rounds of an interview: <span className='text-muted'> 13</span></h6>

            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-book me-2"></i> JD Tittle: <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-map-marked-alt"></i> Mininum number of submissions required: <span className='text-muted'> Patna, Bihar , India</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fab fa-intercom"></i>Audio JD: <span className='text-muted'> 13</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-sticky-note"></i> Notice period preference given by the client: <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-user"></i> admin spoc)
: <span className='text-muted'> n/a</span></h6>
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" ></i>Offer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
                <h6 className='fw-bold mt-5 mx-3'> Candidate ID </h6>
            
            <h6 className='fw-bold mt-5 mx-3'>  Offer Candidate Name </h6>
            
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Offered Designation :<span className='text-muted'> 100</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Candidate Work Location: <span className='text-muted'> Delhi</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> Offered CTC: <span className='text-muted'> 20,000</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Sign up Rate :<span className='text-muted'> 20%</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Base Invoice Value: <span className='text-muted'> 6788</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> Offer Accepted?: <span className='text-muted'> yes</span></h6>
            
            </Col>
            <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> DOJ :<span className='text-muted'> 12-march-2021</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Resigned?: <span className='text-muted'> NO</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> Copy Of Resignation Received?: <span className='text-muted'> No</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> User Incentives :<span className='text-muted'> 10000</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Joined?: <span className='text-muted'> No</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> User comments/remarks: <span className='text-muted'> good</span></h6>
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show3} onHide={handleClose3} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" ></i>JD Acceptance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
                         
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> User ID who accepted the JD :<span className='text-muted'> 100</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-user me-2"></i>  User name who accepted the JD: <span className='text-muted'> Delhi</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i>Date time of accepting : <span className='text-muted'> 20,000</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Assured delivery date-time :<span className='text-muted'> 20%</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i>Own portal/our portal : <span className='text-muted'> 6788</span></h6>
            
            </Col>
            <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Assured delivery date-time :<span className='text-muted'> 20%</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i>User has chosen to use Own portal/our portal : <span className='text-muted'> 6788</span></h6>
           
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show4} onHide={handleClose4} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" ></i>Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
                         
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Tittle :<span className='text-muted'> 100</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-user me-2"></i>  Client Name: <span className='text-muted'> Delhi</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-browser me-2"></i>Client Company Website : <span className='text-muted'> 20,000</span></h6>
            
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show5} onHide={handleClose5} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" >Terms Of JD</i></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
                         
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Notice Period preference given by client :<span className='text-muted'> 100</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-user me-2"></i>  Sign up rate with client: <span className='text-muted'> Delhi</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i>Payment term : <span className='text-muted'> 20,000</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Replacement period :<span className='text-muted'> 20%</span></h6>
           
            
            </Col>
            <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i>Number of submission required : <span className='text-muted'> 5</span></h6>
            {/* <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i>  Your Payout :<span className='text-muted'> 20%</span></h6> */}
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i>Assured delivery required by the client(TAT): <span className='text-muted'> 6788</span></h6>
           
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose5}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show6} onHide={handleClose6} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" ></i>Admin Spoc</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
            <Col xs={6}>
               <Form.Label className=''>Admin Spoc Name</Form.Label>  
               <Form.Control type='text'/>        
          
            
            </Col>
            </Row>
            <Row>
            <Col xs={6}>
               <Form.Label className=''>Admin Spoc Email</Form.Label>  
               <Form.Control type='text'/>        
          
            
            </Col>
            </Row>
            <Row>
            <Col xs={6}>
               <Form.Label className=''>Admin Spoc Mobile Number</Form.Label>  
               <Form.Control type='text'/>        
          
            
            </Col>
            </Row>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose6}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default JdMaster