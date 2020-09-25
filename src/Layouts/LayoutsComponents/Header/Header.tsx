import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Header.scss'

interface HeaderProps {}

interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    return (
      <Container fluid className="Header">

        <Container className="p-0 d-none d-md-block">

          <Row className="Header__up p-0 m-0 d-flex justify-content-between align-items-center">
            <Col md={3} className="p-0 m-0">
              <Row className="p-0 m-0">
                <Col xs={3} className="p-0 m-0 pr-3 d-flex align-items-center justify-content-end">
                  <div className="FullMenuItem__menuicon">
                    <img src="img/menu/phone.svg" alt="" />
                  </div>
                </Col>
                <Col xs={9} className="p-0 m-0 d-flex align-items-center justify-content-start">
                  <div>
                    <div className="FullMenuItem__title">777-999</div>
                    <div className="FullMenuItem__description">Работаем с 11:00 до 00:00</div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col md={2} className="p-0 m-0">
              <Row className="p-0 m-0">
                <Col xs={5} className="p-0 m-0 pr-3 d-flex align-items-center justify-content-end">
                  <div className="FullMenuItem__menuicon">
                    <img src="img/menu/menu.svg" alt="" />
                  </div>
                </Col>
                <Col xs={7} className="p-0 m-0 d-flex align-items-center justify-content-start">
                  <div>
                    <div className="FullMenuItem__title2">Меню</div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col md={2} className="p-0 m-0 d-flex justify-content-center">
              <div>
                <div className="FullMenuItem__logo">
                  <img src="img/menu/logo.svg" alt="" />
                </div>
                <div className="FullMenuItem__logotitle">
                  шашлычный мир
                </div>
              </div>
            </Col>

            <Col md={2} className="p-0 m-0">
              <Row className="p-0 m-0">
                <Col xs={5} className="p-0 m-0 pr-3 d-flex align-items-center justify-content-end">
                  <div className="FullMenuItem__menuicon">
                    <img src="img/menu/address.svg" alt="" />
                  </div>
                </Col>
                <Col xs={7} className="p-0 m-0 d-flex align-items-center justify-content-start">
                  <div>
                    <div className="FullMenuItem__title2">О доставке</div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col md={3} className="p-0 m-0 FullMenuItem__lastitem">
              <Row className="p-0 m-0">
                <Col xs={3} className="p-0 m-0 pr-3 d-flex align-items-center justify-content-end">
                  <div className="FullMenuItem__menuicon">
                    <img src="img/menu/car.svg" alt="" />
                  </div>
                </Col>
                <Col xs={9} className="p-0 m-0 d-flex align-items-center justify-content-start">
                  <div>
                    <div className="FullMenuItem__title">г.Астрахань</div>
                    <div className="FullMenuItem__description">ул. Жилая 1</div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="Header__down p-0 m-0">
            <Col className="p-0 m-0"></Col>
          </Row>

        </Container>

      </Container>
    )
  }
}

export default Header
