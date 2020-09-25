import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.scss'

interface FooterProps {}

interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  render() {
    return(
      <Container fluid className="Footer">
        Footer
      </Container>
    )
  }
}

export default Footer