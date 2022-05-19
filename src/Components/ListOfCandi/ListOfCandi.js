import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { ToastContainer } from 'react-toastify'
import { Container,Button,Table ,Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const ListOfCandi = () => {
  return (
    <div>
        <Sidebar />
      <NavbarMenu />
      <ToastContainer/>
      <Container className="jd-cont">
          <Button variant='success' as={Link} to='/filter-of-candidate'><i className='fa fa-filter'></i>Filter</Button>
          <Button variant='danger' as={Link} to='/' className='mx-5'><i className=' fa fa-download'></i></Button>
      </Container>
      <Container>
                <Table responsive>
                    <thead>
                        <tr>
                            <th></th>
                <th>Jd number</th>
                
                <th>Client Name</th>
                <th>JD title </th>
                <th>JD location </th>
                <th>Recuriter ID</th>
                <th>Candidate name</th>
                <th>Current Designation</th>
                <th>Current salary</th>
                <th>Expected salary</th>
                <th>Experience</th>
                <th>Education</th>
                <th>Current organisation</th>
                <th>Current location</th>
                <th>Candidate mobile number</th>
                <th>Notice period</th>
                <th>JD sent to candidate?</th>
                <th>Candidate availability for the interview</th>
                <th>Recuriter remarks</th>
                <th>Date and time of adding a candidate </th>
                <th>Special comments</th>
                <th>candidate ID</th>
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
                       <td>YES</td>
                       <td>yes</td>
                       <td>A</td>
                       <td>8</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                   </tr>
                   <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                       <td>A</td>
                       <td>8</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                       <td>A</td>
                       <td>8</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                   </tr>
                   <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                       <td>A</td>
                       <td>8</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                       <td>A</td>
                       <td>8</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                   </tr>
                   <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                       <td>A</td>
                       <td>8</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                       <td>A</td>
                       <td>8</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                   </tr>
                   <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                       <td>A</td>
                       <td>8</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                       <td>A</td>
                       <td>8</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                   </tr>
                   <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                       <td>A</td>
                       <td>8</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                       <td>A</td>
                       <td>8</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                   </tr>
                   <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                       <td>A</td>
                       <td>8</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                       <td>A</td>
                       <td>8</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td>NO</td>
                       <td>YES</td>
                       <td>yes</td>
                   </tr>
               </tbody>
               </Table>
               </Container>

    </div>
  )
}

export default ListOfCandi