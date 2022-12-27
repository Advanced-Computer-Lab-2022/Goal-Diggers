import React,{ useContext }  from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FormControl,Select,InputLabel,MenuItem} from "@mui/material";
import coun_curr_code from '../coun-curr-code';
import { Link } from "react-router-dom";
import AuthContext, { AuthContextProvider } from"../context/AuthContext";
import LogoutBtn from "./Auth/LogoutBtn";
import img from './logo.png';

const NavBar = ({handleCountry}) => {
  const {loggedIn,id,type}=useContext(AuthContext);
    return (  
      <div>
      {/* conditionally rendering */}
      <div id="loginRegister">
      
      <div id='info'>
      <p>Phone: +201001004070</p>
      <p>Email: info@cancham.org.eg</p>
      </div>
      </div>
    <Navbar className="nav-color navbar-custom mr-auto"  expand="lg">
      <Container fluid>
        <Navbar.Brand id="brand" href="/">
            <img id="img" src={img} className="mx-2" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
        <div id="nav-itemss">
          <Nav
            className=" ml-auto mx-5 my-2 my-lg-0 nav-links "
            id=""
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Nav.Link id="nav-item1" style={{color:'#252525',fontWeight : 'bolder'}} className='nav-links' href="/">Home</Nav.Link>

          {type=="student"&& 
            <> 
            <Nav.Link id="nav-item2" style={{color:'#252525',fontWeight : 'bolder'}} className='nav-links' href="/student-profile">Profile</Nav.Link>
            </>
          }

            {type=="administrator"&&<> 
            <Nav.Link id="nav-item2" style={{color:'#252525',fontWeight : 'bolder'}} className='nav-links' href="/admin-profile">Profile</Nav.Link>
            </>
            }
            {type=="corporatetrainees "&&<> 
            <Nav.Link id="nav-item2" style={{color:'#252525',fontWeight : 'bolder'}} className='nav-links' href="/student-profile">Profile</Nav.Link>
            </>
            }
            {type=="instructor"&&<> 
            <Nav.Link id="nav-item2" style={{color:'#252525',fontWeight : 'bolder'}} className='nav-links' href="/instructor-profile">Profile</Nav.Link>
            <Nav.Link id="nav-item3" style={{color:'#252525',fontWeight : 'bolder'}} className='nav-links' href="/instructor-courses">My courses</Nav.Link>
            </>
            }
            {/* <Nav.Link id="nav-item3" style={{color:'#252525',fontWeight : 'bolder'}} className='nav-links' href="/instructor-courses">Most Popular</Nav.Link> */}
            {/* <Nav.Link id="nav-item3" style={{color:'#252525',fontWeight : 'bolder'}} className='nav-links' href="/instructor-courses">Most Viewed</Nav.Link> */}

            
            {
              loggedIn&&<>
            <Nav.Link id="nav-item7" style={{color:'#252525',fontWeight : 'bolder'}} className='nav-links' href="/login"> <LogoutBtn></LogoutBtn></Nav.Link>
           
            </>
            }

        
          </Nav>
        
        
          </div>
 

         
      
    
        </Navbar.Collapse>
        <Form id="nav-item6" className="d-flex mx-5 pr-5" action="/search" method="GET">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{borderRadius : '15px'}}
              name='keyword'
            />
          </Form>

      </Container>
      <FormControl id="nav-item5" className="mx-5 pr-5" sx={{ minWidth: 120 }} size="small">
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
          

        

    </Navbar>
    
   
        
         
          </div>
   
    );
}
 
export default NavBar;