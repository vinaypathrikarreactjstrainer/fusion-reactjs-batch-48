import React from "react";
import { Button, Alert } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const BootStrap = () => {
  // const students = ['Harsh', 'Aditya', 'Akansha', 'Aaishwarya'];
  // map looping
  // students.map((user) => console.log('My name is ',user));
  // // for looping
  // for(let x = 0; x < students.length; x++){
  //     console.log('in for loop => ', students[x]);
  // }
  const students = [
    { name: "Harsh", phone: 4564654, email: "harsh@gmail.com" },
    { name: "Aditya", phone: 4564654, email: "aditya@gmail.com" },
    { name: "Akansha", phone: 4564654, email: "akansha@gmail.com" },
    { name: "Aishwarya", phone: 4564654, email: "aishwarya@gmail.com" },
  ];
  return (
    <>
      <h1>React - Bootstrap</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((list, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{list.name}</td>
                <td>{list.phone}</td>
                <td>{list.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* <Alert>
          This is a alert—check it out!
        </Alert>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button> */}
    </>
  );
};

export default BootStrap;
