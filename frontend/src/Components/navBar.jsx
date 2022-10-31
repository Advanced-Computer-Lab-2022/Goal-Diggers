import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FormControl,Select,InputLabel,MenuItem} from "@mui/material";
import coun_curr_code from '../coun-curr-code';


const NavBar = ({handleCountry}) => {
  
    return (  
    <Navbar bg="info" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
            <img src='./video.png' className="mx-2" width='40px'/>
            E-Learning
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto mx-5 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{fontWeight : 'bolder'}} href="/">Home</Nav.Link>
            <Nav.Link style={{fontWeight : 'bolder'}} href="/instructor-courses">My Courses</Nav.Link>
          </Nav>
          <Form className="d-flex mx-5 pr-5" action="/search" method="GET">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{borderRadius : '15px'}}
              name='keyword'
            />
            <Button type="submit" variant="outline-light" style={{borderRadius : '25px'}}><i className="fa fa-search" aria-hidden="true"></i></Button>
          </Form>
          <FormControl className="mx-5 pr-5" sx={{ minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
                defaultValue=""
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={ (e) => {handleCountry(e.target.value) ; console.log("NAV " +e.target.value);} }
                label="Country">
                {coun_curr_code.map(country => <MenuItem key={country.country} value={country.currency_code}>{country.country}</MenuItem>)}
            </Select>
          </FormControl>
          <Nav className="ml-5">
            {/* conditionally rendering */}
          <Button className="btn-light mx-2" style={{borderRadius : '25px'}}>Login <i className="fa fa-sign-in" aria-hidden="true"></i></Button>
          <Button className="btn-dark" style={{borderRadius : '25px'}}>Register <i className="fa fa-user-plus" aria-hidden="true"></i></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
 
export default NavBar;