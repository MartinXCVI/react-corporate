import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { IoInformationCircleOutline } from "react-icons/io5";
import BlogData from '../data/BlogData'


const Blog = () => {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Latest from blog</h2>
          <div className="subtitle">Get our latest news</div>
        </div>
        <Row>
          {
            BlogData.map(blogpost => {
              return (
                <Col sm={4} key={blogpost.id}>
                  <div className="holder">
                  <Card>
                    <Card.Img variant="top" src={blogpost.image} />
                    <Card.Body>
                      <time>{blogpost.time}</time>
                      <Card.Title>{blogpost.title}</Card.Title>
                      <Card.Text>
                        {blogpost.description}
                      </Card.Text>
                      <a href={blogpost.link} className="btn btn-primary">Read more <IoInformationCircleOutline style={{fontSize: "1.25rem"}} /></a>
                    </Card.Body>
                  </Card>
                  </div>
                </Col>
              )
            })
          }

        </Row>
      </Container>
    </section>

  )
}

export default Blog