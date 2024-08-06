import { useState, useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 400 
      ? setShowTopButton(true) 
      : setShowTopButton(false)
    })
  }, [])

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Container fluid>
      <div className="copyright">
        &copy; 2022 Corporate Site. All Rights Reserver.
      </div>
      <div className="socials">
        <ul>
          <li>
            <a href="https://www.facebook.com/"><FaFacebookF /></a>
          </li>
          <li>
            <a href="https://x.com/"><FaXTwitter /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
          </li>
        </ul>
      </div>
      {
        showTopButton && (<div className='go-top' onClick={(goToTop)}><IoIosArrowUp className='top-icon' /></div>)
      }
    </Container>
  )
}

export default Footer