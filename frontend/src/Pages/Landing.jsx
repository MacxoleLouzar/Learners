import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Landing = () => {
  return (
    <>
      <div className="form">
        <Row className="Row">
            <div className="Card" style={{ width: "25rem"}}>
              <Card.Img
               className="Img"
               src="https://images.unsplash.com/photo-1573495626828-c43042e94374?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"                
              />
              <Card.Body>
                <Card.Title>PWD</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </div>

            <div className="Card" style={{ width: "25rem"}}>
              <Card.Img
               className="Img"
                src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0ODYzMTY2M3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
              <Card.Body>
                <Card.Title>Full Stack</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </div>
        </Row>

        <Row className="Row">
            <div className="Card" style={{ width: "25rem"}}>
              <Card.Img
                className="Img"
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0ODYzMTY2M3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
              <Card.Body>
                <Card.Title>Data Science</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </div>
      
          
            <div className="Card" style={{ width: "25rem"}}>
              <Card.Img className="Img"
                src="https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8NDg2MzE2NjN8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Graduate Elite</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </div>
        </Row>
      </div>
    </>
  );
};

export default Landing;
