import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import PricingData from '../data/PricingData';


const Pricing = () => {
  return (
    <section id="pricing" className='block pricing-block'>
      <Container fluid>
        <div className="title-holder">
          <h2>Pricing &amp; Plans</h2>
          <div className="subtitle">Check our pricing &amp; plans</div>
        </div>
        <Row>
          {
           PricingData.map(pricing => {
            return (
              <Col sm={4} key={pricing.id}>
                <div className="heading">
                  <h3>{pricing.plan}</h3>
                  <span className="price">{pricing.price}</span>
                </div>
                <div className="content">
                <ListGroup as="ul">
                  {
                    pricing.features.map((feature, index)=> {
                      return (
                        <ListGroup.Item as="li" key={index}>
                          {feature}
                        </ListGroup.Item>
                      )
                    })
                  }
                </ListGroup>
                </div>
                <div className="btn-holder">
                  <a href={pricing.link} className='btn btn-primary'>Order now</a>
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

export default Pricing