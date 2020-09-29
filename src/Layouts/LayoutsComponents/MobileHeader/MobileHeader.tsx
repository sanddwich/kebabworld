import React from 'react'
import { Row } from 'react-bootstrap'
import { Col, Container } from 'react-bootstrap'
import { Link } from 'react-scroll'
import './MobileHeader.scss'

interface Submenu {
  name: string
  active: boolean
}

interface MobileHeaderProps {}

interface MobileHeaderState {
  menu: boolean
  submenus: Submenu[]
}

class MobileHeader extends React.Component<MobileHeaderProps, MobileHeaderState> {
  constructor(props: MobileHeaderProps) {
    super(props)
    this.state = {
      menu: false,
      submenus: [
        {
          name: 'menu',
          active: false,
        },
      ],
    }
  }

  componentDidMount() {}

  closeOpenMenu = (): void => {
    this.setState({ menu: !this.state.menu })
  }

  activateSubMenu = (submenuName: string): void => {
    const submenus = this.state.submenus
    submenus.map((submenu) => {
      if (submenu.name === submenuName) {
        submenu.active = !submenu.active
      }
    })

    this.setState({ submenus })
  }

  renderToggleMenu = (): any => {
    return (
      <Container className="toggleMenu p-0 m-0">
        <Row className="pb-5">
          <Col
            onClick={() => this.activateSubMenu('menu')}
            className="p-0 m-0 pl-4 d-flex align-items-center justify-content-start menu__item"
          >
            <div className="toggleMenu__menuicon">
              <img src="img/menu/menu.svg" alt="" width="17px" />
            </div>
            <div>
              <div className="toggleMenu__title">Меню</div>
            </div>
          </Col>

          {this.state.submenus.map((submenu, index) => {
            if (submenu.active) {
              return (
                <Container key={index} className="toggleMenu__subMenu">
                  <Row>
                    <Col className="toggleMenu__listItemCont">
                      <div className="toggleMenu__listItem">
                        <div className="listElement"></div>
                      </div>
                      <div className="toggleMenu__listItemTitle">Блюда на мангале</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="toggleMenu__listItemCont">
                      <div className="toggleMenu__listItem">
                        <div className="listElement"></div>
                      </div>
                      <div className="toggleMenu__listItemTitle">Первые блюда</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="toggleMenu__listItemCont">
                      <div className="toggleMenu__listItem">
                        <div className="listElement"></div>
                      </div>
                      <div className="toggleMenu__listItemTitle">Вторые блюда</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="toggleMenu__listItemCont">
                      <div className="toggleMenu__listItem">
                        <div className="listElement"></div>
                      </div>
                      <div className="toggleMenu__listItemTitle">Салаты</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="toggleMenu__listItemCont">
                      <div className="toggleMenu__listItem">
                        <div className="listElement"></div>
                      </div>
                      <div className="toggleMenu__listItemTitle">Гарниры</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="toggleMenu__listItemCont">
                      <div className="toggleMenu__listItem">
                        <div className="listElement"></div>
                      </div>
                      <div className="toggleMenu__listItemTitle">Закуски</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="toggleMenu__listItemCont">
                      <div className="toggleMenu__listItem">
                        <div className="listElement"></div>
                      </div>
                      <div className="toggleMenu__listItemTitle">Напитки</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="toggleMenu__listItemCont">
                      <div className="toggleMenu__listItem">
                        <div className="listElement"></div>
                      </div>
                      <div className="toggleMenu__listItemTitle">Соусы</div>
                    </Col>
                  </Row>
                </Container>
              )
            }
          })}
        </Row>

        <Row className="pb-5">
          <Col className="p-0 m-0 pl-4 d-flex align-items-center justify-content-start menu__item">
            <div className="toggleMenu__menuicon">
              <img src="img/menu/car.svg" alt="" width="17px" />
            </div>
            <div>
              <div className="toggleMenu__title">
                <Link activeClass="active" to="delivery" spy={true} smooth={true} offset={0} duration={500}>
                  О доставке
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col className="p-0 m-0 pl-4 d-flex align-items-center justify-content-start menu__item">
            <div className="toggleMenu__menuicon">
              <img src="img/menu/phone.svg" alt="" width="17px" />
            </div>
            <div>
              <div className="toggleMenu__title">777-999</div>
              <div className="toggleMenu__title2">Работаем с 11:00 до 00:00</div>
            </div>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col className="p-0 m-0 pl-4 d-flex align-items-center justify-content-start menu__item">
            <div className="toggleMenu__menuicon">
              <img src="img/menu/address.svg" alt="" width="17px" />
            </div>
            <div>
              <div className="toggleMenu__title">г. Астрахань</div>
              <div className="toggleMenu__title2">ул. Жилая 1</div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }

  render() {
    return (
      <Container fluid className="p-0 m-0 d-block d-md-none ">
        <Row className="MobileHeader p-0 m-0 h-100 d-flex justify-content-center align-items-center">
          <Col xs={4} className="p-0 m-0">
            <div>
              <img src="img/menu/logo.svg" alt="" width="82px" />
            </div>
            <div className="MobileHeader__logotitle">шашлычный мир</div>
          </Col>

          <Col xs={4} className="p-0 m-0"></Col>

          <Col xs={4} className="p-0 m-0 d-flex justify-content-end">
            {this.state.menu ? (
              <div onClick={() => this.closeOpenMenu()} className="MobileHeader__logo timesIcon">
                <img src="img/menu/times.svg" alt="" />
              </div>
            ) : (
              <div onClick={() => this.closeOpenMenu()} className="MobileHeader__logo burgerIcon">
                <img src="img/menu/burger.svg" alt="" />
              </div>
            )}
          </Col>
        </Row>

        {this.state.menu && this.renderToggleMenu()}
      </Container>
    )
  }
}

export default MobileHeader
