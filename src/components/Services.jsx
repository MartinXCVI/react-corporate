import ServicesData from '../data/ServicesData'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Services = () => {
  return (
    <section id='services' className='block services-block'>
      <Container fluid>
        <div className="title-holder">
          <h2>Our services</h2>
          <div className="subtitle">Services we provide</div>
        </div>
        <Row>
          {
            ServicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className='icon'>
                    {services.icon}
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default Services