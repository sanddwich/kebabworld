import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.scss'

interface FooterProps {}

interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  render() {
    return (
      <Container fluid className="footer">
        <div className="footer__copyright text-center ">
          Сайт разработан -{' '}
          <a className="footer__copyright__link " href="https://deedesign.ru/">
            deedesign
          </a>
        </div>
      </Container>
    )
  }
}

export default Footer
