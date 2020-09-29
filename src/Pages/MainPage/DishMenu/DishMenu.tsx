import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './DishMenu.scss'

interface DishMenuProps {}

interface DishMenuState {}

export default class DishMenu extends React.Component<DishMenuProps, DishMenuState> {
  constructor(props: DishMenuProps) {
    super(props)
    this.state = {
      slidesMobile: [
        {
          id: Math.random(),
          name: 'slide1_mob.jpg',
        },
        {
          id: Math.random(),
          name: 'slide1_mob.jpg',
        },
        {
          id: Math.random(),
          name: 'slide1_mob.jpg',
        },
        {
          id: Math.random(),
          name: 'slide1_mob.jpg',
        },
        {
          id: Math.random(),
          name: 'slide1_mob.jpg',
        },
      ],
    }
  }

  render() {
    return (
      <Container className="DishMenu p-0">
        <Row className="DishMenu__full p-0 d-none d-md-flex">
          <Col md={4} className="DishMenu__bigcat h-100 p-0 d-flex justify-content-center align-items-center">
            <div style={{ marginTop: -100, cursor: 'pointer' }}>
              <img src="img/dish/mangal.png" alt="" />
              <div className="DishMenu__title">Блюда на мангале</div>
            </div>
          </Col>

          <Col md={8} className="DishMenu__litlecatCont p-0">
            <Row className="DishMenu__litlecatContLine DishMenu__litlecatContLineFirst p-0 m-0 h-50">
              <Col md={4} className="DishMenu__litlecat p-0 d-flex justify-content-center align-items-end">
                <div style={{ marginTop: -100, cursor: 'pointer' }}>
                  <img src="img/dish/first.png" alt="" />
                  <div className="DishMenu__litlecatTitle">Блюда на мангале</div>
                </div>
              </Col>
              <Col md={4} className="DishMenu__litlecat p-0 d-flex justify-content-center align-items-end">
                <div style={{marginTop:-200, cursor: 'pointer' }}>
                  <img style={{marginBottom:-25}} src="img/dish/second.png" alt="" />
                  <div className="DishMenu__litlecatTitle">Вторые блюда</div>
                </div>
              </Col>
              <Col md={4} className="DishMenu__litlecat p-0 d-flex justify-content-center align-items-end">
                <div style={{ marginTop: -100, cursor: 'pointer' }}>
                  <img src="img/dish/garnirs.png" alt="" />
                  <div className="DishMenu__litlecatTitle">Гарниры</div>
                </div>
              </Col>
            </Row>

            <Row className="DishMenu__litlecatContLine p-0 m-0 h-50">
              <Col md={4} className="DishMenu__litlecat p-0 d-flex justify-content-center align-items-end">
                <div style={{ marginTop: -100, cursor: 'pointer' }}>
                  <img src="img/dish/salats.png" alt="" />
                  <div className="DishMenu__litlecatTitle">Салаты</div>
                </div>
              </Col>
              <Col md={4} className="DishMenu__litlecat p-0 d-flex justify-content-center align-items-end">
                <div style={{ marginTop: -100, cursor: 'pointer' }}>
                  <img src="img/dish/zakuson.png" alt="" />
                  <div className="DishMenu__litlecatTitle">Закуски</div>
                </div>
              </Col>
              <Col md={4} className="DishMenu__litlecat p-0 d-flex justify-content-center align-items-end">
                <div style={{ marginTop: -100, cursor: 'pointer' }}>
                  <img src="img/dish/drink.png" alt="" />
                  <div className="DishMenu__litlecatTitle">Напитки</div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="DishMenu__mobile p-0 d-flex d-md-none">

        </Row>
      </Container>
    )
  }
}
