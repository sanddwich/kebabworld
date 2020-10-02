import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MobileHeader from '../MobileHeader/MobileHeader'
import { Link } from 'react-scroll'
import './Header.scss'
import { displayCategory } from '../../../Utils/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons'

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

    document.addEventListener('scroll', () => {
      const elem = document.querySelector('#ToTopArrow') as HTMLElement
      if (window.pageYOffset > 300) {
        elem.style.display = 'block'
      } else {
        elem.style.display = 'none'
      }
    })

    displayCategory('kebab')
  }

  removeActiveClass = (): void => {
    document.querySelectorAll('.Header__navlink').forEach((element) => {
      element.classList.remove('active')
    })
  }

  render() {
    return (
      <Container fluid className="Header">
        <Link
          activeClass="active"
          to="siteBegin"
          spy={true}
          smooth={true}
          offset={-250}
          delay={50}
          duration={500}
        >
          <div id="ToTopArrow">
            <FontAwesomeIcon icon={faArrowAltCircleUp} size="4x" />
          </div>
        </Link>

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
                      <div className="FullMenuItem__title">
                        <span itemProp="telephone">777-999</span>
                      </div>
                      <div className="FullMenuItem__description">
                        <time itemProp="openingHours" dateTime="Mo, Tu, We, Th, Fr, Sa, Su 11:00-24:00">
                          Работаем с 11:00 до 00:00
                        </time>
                      </div>
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
                    <Link
                      onClick={() => displayCategory('kebab')}
                      activeClass="active"
                      to="kebab"
                      spy={true}
                      smooth={true}
                      offset={-250}
                      delay={50}
                      duration={500}
                    >
                      <div className="FullMenuItem__title2">Меню</div>
                    </Link>
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
                    <Link activeClass="active" to="delivery" spy={true} smooth={true} offset={-250} duration={500}>
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
                  <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                    <div className="FullMenuItem__title">
                      <span itemProp="addressLocality">г.Астрахань</span>
                    </div>
                    <div className="FullMenuItem__description">
                      <span itemProp="streetAddress">ул. Жилая 1</span>
                    </div>
                    <meta itemProp="addressCountry" content="RU" />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="Header__down p-0 m-0">
            <Col className="Header__navlinkcont d-flex justify-content-between">
              <div className="p-0 m-0 Header__navlink">
                <Link
                  onClick={() => displayCategory('kebab')}
                  activeClass="active"
                  to="kebab"
                  spy={true}
                  smooth={true}
                  offset={-250}
                  delay={50}
                  duration={500}
                >
                  <div>Блюда на мангале</div>
                </Link>
              </div>
              <div className="p-0 m-0 Header__navlink">
                <Link
                  onClick={() => displayCategory('firstdish')}
                  activeClass="active"
                  to="firstdish"
                  spy={true}
                  smooth={true}
                  delay={50}
                  offset={-250}
                  duration={500}
                >
                  <div>Первые блюда</div>
                </Link>
              </div>
              <div className="p-0 m-0 Header__navlink">
                <Link
                  onClick={() => displayCategory('seconddish')}
                  activeClass="active"
                  to="seconddish"
                  spy={true}
                  smooth={true}
                  offset={-250}
                  delay={50}
                  duration={500}
                >
                  <div>Вторые блюда</div>
                </Link>
              </div>
              <div className="p-0 m-0 Header__navlink">
                <Link
                  onClick={() => displayCategory('salats')}
                  activeClass="active"
                  to="salats"
                  spy={true}
                  smooth={true}
                  offset={-250}
                  delay={50}
                  duration={500}
                >
                  <div>Салаты</div>
                </Link>
              </div>
              <div className="p-0 m-0 Header__navlink">
                <Link
                  onClick={() => displayCategory('garnirs')}
                  activeClass="active"
                  to="garnirs"
                  spy={true}
                  smooth={true}
                  offset={-250}
                  delay={50}
                  duration={500}
                >
                  <div>Гарниры</div>
                </Link>
              </div>
              <div className="p-0 m-0 Header__navlink">
                <Link
                  onClick={() => displayCategory('snacks')}
                  activeClass="active"
                  to="snacks"
                  spy={true}
                  smooth={true}
                  offset={-250}
                  delay={50}
                  duration={500}
                >
                  <div>Закуски</div>
                </Link>
              </div>
              <div className="p-0 m-0 Header__navlink">
                <Link
                  onClick={() => displayCategory('drinks')}
                  activeClass="active"
                  to="drinks"
                  spy={true}
                  smooth={true}
                  offset={-250}
                  delay={50}
                  duration={500}
                >
                  <div>Напитки</div>
                </Link>
              </div>
              {/* <div className="p-0 m-0 Header__navlink">
                <Link
                  onClick={() => displayCategory('kebab')}
                  activeClass="active"
                  to="kebab"
                  spy={true}
                  smooth={true}
                  offset={-250}
                  delay={50}
                  duration={500}
                >
                  <div>Соусы</div>
                </Link>
              </div> */}
            </Col>
          </Row>
        </Container>

        <MobileHeader />
      </Container>
    )
  }
}

export default Header
