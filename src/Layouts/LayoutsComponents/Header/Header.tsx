import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MobileHeader from '../MobileHeader/MobileHeader'
import { Link } from 'react-scroll'
import './Header.scss'

interface HeaderProps {}

interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props)
  }

  componentDidMount() {
    document.querySelectorAll('.Header__navlink').forEach((element) => {
      element.addEventListener('click', () => {
        this.removeActiveClass()
        element.classList.add('active')
      })
    })
  }

  removeActiveClass = (): void => {
    document.querySelectorAll('.Header__navlink').forEach((element) => {
      element.classList.remove('active')
    })
  }

  render() {
    return (
      <Container fluid className="Header">
        <Container className="Header__pcmenu p-0 d-none d-md-block">
          <Row className="Header__up p-0 m-0 d-flex justify-content-between align-items-center">
            <Col md={3} className="p-0 m-0">
              <a href="tel:88512777999">
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
              </a>
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
                <div className="FullMenuItem__logotitle">шашлычный мир</div>
              </div>
            </Col>

            <Col md={2} className="p-0 m-0 FullMenuItem__prelastitem">
              <Row className="p-0 m-0">
                <Col xs={5} className="p-0 m-0 pr-3 d-flex align-items-center justify-content-end">
                  <div className="FullMenuItem__menuicon">
                    <img src="img/menu/address.svg" alt="" />
                  </div>
                </Col>
                <Col xs={7} className="p-0 m-0 d-flex align-items-center justify-content-start">
                  <div>
                    <Link activeClass="active" to="delivery" spy={true} smooth={true} offset={0} duration={500}>
                      <div className="FullMenuItem__title2">О доставке</div>
                    </Link>
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
            <Col className="Header__navlinkcont d-flex justify-content-between">
              <div className="p-0 m-0 Header__navlink">
                <div>Блюда на мангале</div>
              </div>
              <div className="p-0 m-0 Header__navlink">
                <div>Первые блюда</div>
              </div>
              <div className="p-0 m-0 Header__navlink">
                <div>Вторые блюда</div>
              </div>
              <div className="p-0 m-0 Header__navlink">
                <div>Салаты</div>
              </div>
              <div className="p-0 m-0 Header__navlink">
                <div>Гарниры</div>
              </div>
              <div className="p-0 m-0 Header__navlink">
                <div>Закуски</div>
              </div>
              <div className="p-0 m-0 Header__navlink">
                <div>Напитки</div>
              </div>
              <div className="p-0 m-0 Header__navlink">
                <div>Соусы</div>
              </div>
            </Col>
          </Row>
        </Container>

        <MobileHeader />
      </Container>
    )
  }
}

export default Header
