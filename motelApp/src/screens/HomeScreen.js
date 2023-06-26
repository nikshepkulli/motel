import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
const alertClicked = () => {
  alert("You clicked the third ListGroupItem");
};
const HomeScreen = () => {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <Card className="text-justify bg-light">
            <Card.Body>
              <Card.Text style={{textAlign: "justify"}}>
                Welcome to Cheshire Welcome Inn in Cheshire, Connecticut, where
                your money goes farther. No matter if you're in the area for
                business or pleasure, you'll find large, clean rooms and great
                amenities at a price that fits any budget. We feature 24-hour
                front desk service so you can check in and out whenever you
                like, free wifi, guest laundry facilities and more.
              </Card.Text>

              <Card.Text style={{textAlign: "justify"}}>
                In-room amenities that will make your stay great include a
                refrigerator, microwave, coffeemaker, hair dryer and television
                with premium channels. You'll especially like our premium beds
                designed to give you a comfortable night's sleep so you can wake
                up to a great morning. We're pleased to be a 100 percent
                smoke-free hotel for the enjoyment of all our guests.
              </Card.Text>

              <Card.Text style={{textAlign: "justify"}}>
                Our convenient location off Route 10 means it's equally easy to
                get to New Haven or Hartford and to experience attractions like
                Sleeping Giant State Park and the well-regarded Cheshire
                Historic District. We're also near several educational
                facilities, including Yale and Quinnipiac University. Plus,
                there's more to do here in the Constitution State, including
                boat rentals, golfing and other outdoor recreational activities.
                We are also a great stop along the way when you're visiting the
                history and culture of Boston or busy New York City.
              </Card.Text>

              <Card.Text style={{textAlign: "justify"}}>
                Book a room with us now at the Cheshire Welcome Inn, a great
                place to stay where you'll feel right at home. From the moment
                you step inside, you'll know you're someplace special; that
                you're someplace where your pocketbook will be as comfortable as
                you are. We're here for you when you need a great travel
                experience in a great state, and we hope we can serve you soon.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <ListGroup as="ul">
            <ListGroup.Item action onClick={alertClicked}>
              Area Attractions
            </ListGroup.Item>
            <ListGroup.Item action onClick={alertClicked}>
              Nearby Businesses
            </ListGroup.Item>
            <ListGroup.Item action onClick={alertClicked}>
              Local Colleges & Universities
            </ListGroup.Item>
            <ListGroup.Item action onClick={alertClicked}>
              Convenient Restaurants
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
