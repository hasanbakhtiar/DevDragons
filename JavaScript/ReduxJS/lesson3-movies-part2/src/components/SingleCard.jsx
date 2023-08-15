import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SingleCard({photo,title,price,rate}) {
  return (
    <Col sm={12} md={3}>
      <Card >
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {price}$
          </Card.Text>
          <Card.Text>
            {rate} IMDB
          </Card.Text>
          <Button variant="primary">Read more</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleCard;