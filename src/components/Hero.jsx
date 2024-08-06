import './Hero.css'
import Carousel from 'react-bootstrap/Carousel';
import HeroData from '../data/HeroData'

import { IoInformationCircleOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section id="home" className="hero-block">
      <Carousel className="hero-carousel">
        {
          HeroData.map(hero => {
            return (
              <Carousel.Item key={hero.id}>
                <img
                  className='d-block w-100' 
                  src={hero.image}
                  alt={"Slide " + hero.id} />
                <Carousel.Caption>
                  <h3>{hero.title}</h3>
                  <p>{hero.description}</p>
                  <a href={hero.link} className="btn btn-primary">Learn More <IoInformationCircleOutline style={{fontSize: "1.25rem"}} /></a>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })
        }

      </Carousel>
    </section>
  )
}

export default Hero