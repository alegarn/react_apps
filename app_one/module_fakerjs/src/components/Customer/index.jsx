import React from 'react';
import Email from 'components/Email';
import Phone from 'components/Phone'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Customer = (props) => {

  const { id, firstName, lastName, phoneNumber, customerPhoto, occupation } = props.data;
  
  return (
    <Col xs={6} md={4} >

      <Card>

        <Card.Img variant="top" src={customerPhoto} />

        <Card.Body>
          <Card.Title>{firstName} {lastName}</Card.Title>
          <Card.Text>
            {occupation}
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <Container>
            <Row className='align-items-center text-center'>
              <Col xs={6}><Email data={{firstName, lastName}} key={id} /> </Col> 
              {' '}
              <Col xs={6}><Phone data={phoneNumber} key={id} /></Col>
            </Row>
          </Container>
        </Card.Footer>

      </Card>

    </Col>
  );
};

export default Customer;