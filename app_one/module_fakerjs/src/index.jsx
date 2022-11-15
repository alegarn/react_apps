import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Customers from './components/Customers';
import Container from 'react-bootstrap/Container';

const App = () => (
  <div>
    <Container className='text-center'>
      <h1>Hello Customers!</h1>
    </Container>
    
    <Container>
      <Customers />
    </Container>
  </div>
  
  

);

ReactDOM.render(<App />, document.getElementById('root'));