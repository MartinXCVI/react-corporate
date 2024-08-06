import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import TestimonialsData from '../data/TestimonialsData'

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client testimonials</h2>
          <div className="subtitle">What clients say about us</div>
        </div>
        <Carousel controls={false}>
          {
            TestimonialsData.map(testimonial => {
              return (
                <Carousel.Item key={testimonial.id}>
                  <blockquote>
                    <p>{testimonial.description}</p>
                    <cite>
                      <span className="name">{testimonial.name}</span>
                      <span className="designation">{testimonial.designation}</span>
                    </cite>
                  </blockquote>
                </Carousel.Item>
              )
            })
          }
          
        </Carousel>
      </Container>
    </section>
  )
}

export default Testimonials