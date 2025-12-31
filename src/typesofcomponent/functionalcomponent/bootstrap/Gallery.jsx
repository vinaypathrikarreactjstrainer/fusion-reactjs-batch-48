import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Dosa from "../../../assets/img/dosa.jpeg";

const Gallery = ({ name }) => {
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState(name);
  // function
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleName = () => setUserName("Fusion Software Institute");
  return (
    <>
      <Container>
        {/* <Row>
                    <Col >Aditya</Col>
                    <Col>Harsh</Col>
                </Row> */}
        <Row>
          <Col xs={6} sm={12} md={8} lg={4}>
            Aditya
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>
          </Col>
          <Col xs={6} sm={6} md={4} lg={4}>
            Harsh
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            Om
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome {userName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card style={{ width: "24rem" }}>
              <Card.Img variant="top" src={Dosa} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleName}>
              Change Name
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        {/* <Row>
                    <Col>1</Col>
                    <Col>2</Col>
                    <Col>3</Col>
                    <Col>4</Col>
                </Row> */}
        {/* <Row>
                    
                     <Col xs={6} md={4}>
                        <Image src={Dosa} thumbnail/>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={Dosa} roundedCircle/>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={Dosa} thumbnail/>
                    </Col> 
                </Row> */}
      </Container>
    </>
  );
};

export default Gallery;
