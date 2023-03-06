import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Landing = () => {
  return (
    <>
      <Form className="form">
        <Row>
          <Col className="Col-Pwd">
          <card>PWD</card>
          </Col>
          <Col className="Col-FS">
          <div>FS</div>
          </Col>
        </Row>
        <Row>
          <Col className="Col-DS">
          <div>DS</div>
          </Col>
          <Col className="Col-SF">
          <div>SF</div>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Landing;
