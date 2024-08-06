import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TeamsData from '../data/TeamsData';
import Image from 'react-bootstrap/Image';

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Teams = () => {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our teams</h2>
          <div className="subtitle">Some of our experts</div>
        </div>
        <Row>
          {
            TeamsData.map(team => {
              return (
                <Col sm={3} key={team.id}>
                  <div className="image">
                    <Image src={team.image} />
                    <div className="overlay">
                      <div className="socials">
                        <ul>
                          <li><a href={team.fbLink}><FaFacebookF /></a></li>
                          <li><a href={team.twitterLink}><FaXTwitter /></a></li>
                          <li><a href={team.linkedinLink}><FaLinkedinIn /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h3>{team.name}</h3>
                    <span className='designation'>{team.designation}</span>
                    <p>{team.description}</p>
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

export default Teams