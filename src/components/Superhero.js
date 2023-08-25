import { Card, Col, Container, Row, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightYearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="moveiWrapper" id="superhero">
            <Card className="text-white  movieImage">
              <Image src={duneImage} alt="Card image" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="moveiWrapper">
            <Card className="text-white  movieImage">
              <Image src={everythingImage} alt="Card image" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="moveiWrapper">
            <Card className="text-white  movieImage">
              <Image src={jokerImage} alt="Card image" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="moveiWrapper">
            <Card className="text-white  movieImage">
              <Image src={lightYearImage} alt="Card image" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="moveiWrapper">
            <Card className="text-white  movieImage">
              <Image src={morbiusImage} alt="Card image" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="moveiWrapper">
            <Card className="text-white  movieImage">
              <Image src={infiniteImage} alt="Card image" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SuperHero;
