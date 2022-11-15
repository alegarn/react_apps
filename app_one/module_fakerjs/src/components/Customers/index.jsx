import React from 'react';
import { faker } from '@faker-js/faker';
import Customer from 'components/Customer';
import Row from 'react-bootstrap/Row';

const customersList = Array.from({ length: 100 }, () => {

  const firstName= faker.name.firstName();
  const lastName= faker.name.lastName();
  const mailAddress= `${lastName.toLowerCase()}.${firstName.toLowerCase()}@gmail.com`;

  return({
    firstName: firstName,
    lastName: lastName,
    phoneNumber: faker.phone.number(),
    mailAddress: mailAddress,
    customerPhoto: faker.image.avatar(),
    occupation: faker.name.jobTitle()
  });

});

const Customers = () => {

    console.log(customersList);
    return (
      <Row className="g-4">
        {customersList.map((customerData) => (
          <Customer data={customerData} key={customerData.id} />  
        ))};
      </Row>
    )
    


};

export default Customers;