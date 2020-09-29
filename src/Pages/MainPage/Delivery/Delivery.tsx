import React from 'react'
import { Container } from 'react-bootstrap'
import './Delivery.scss'

interface DeliveryProps {}

interface DeliveryState {}

class Delivery extends React.Component<DeliveryProps, DeliveryState> {
  render() {
    return (
      <Container fluid className="delivery m-0 p-0">
        This is delivery
      </Container>
    )
  }
}

export default Delivery
