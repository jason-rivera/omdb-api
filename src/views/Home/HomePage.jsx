import { Button, Card } from 'react-bootstrap';

const HomePage = () => {
  return(
    <>
      <div>
        I am the home page
        <Button variant="primary">Primary</Button>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="" alt="unavailable"/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default HomePage;