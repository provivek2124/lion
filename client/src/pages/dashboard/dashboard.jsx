import React, { useState }  from 'react';
import Header from "../../components/header/header.component";
import RegisterStudent from "../../components/register/registerStudent";

import "./dashboard.css";
import Logout from "../../components/logout/logout";

import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import { Button, ButtonToolbar } from "react-bootstrap";

function Dashboard() {

    const [ modalShow, setModalShow ] = useState(false);

    
    return (
        <div>
            <Header/>
             <Logout/>
          <CardColumns className="cardgroup">
              <Card bg='success' className="text-center p-3">
              <Card.Body>
                
                  <Card.Title>
                    <ButtonToolbar>
                    <Button variant='primary'
                    onClick = {()=> setModalShow(true) }
                    >
                      Add Student
                    </Button>

                    <RegisterStudent show = { modalShow}  onHide = { !modalShow} />
                    </ButtonToolbar>
                    </Card.Title>
              </Card.Body>

          </Card>


  <Card bg='info'  className="text-center p-3">
    
    <Card.Body>
      <Card.Title>Search Student</Card.Title>
    </Card.Body>
    
    
  </Card>
  
  
  <Card bg="warning"  className="text-center p-3">
    
    <Card.Body>
      <Card.Title>Fees Management</Card.Title>

    </Card.Body>

  </Card>
</CardColumns>
            
        </div>
    )
}

export default Dashboard
