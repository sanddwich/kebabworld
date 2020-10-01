import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-scroll'
import './DishMenu.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { displayCategory } from '../../../Utils/utils'

// Import Swiper styles
import 'swiper/swiper.scss'
// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import Slide from '../../../Interfaces/Slide'

// install Swiper components
SwiperCore.use([Navigation, Pagination])

interface DishMenuProps {}

interface DishMenuState {
  slidesMobile: Slide[]
}

export default class DishMenu extends React.Component<DishMenuProps, DishMenuState> {
  constructor(props: DishMenuProps) {
    super(props)
    this.state = {
      slidesMobile: [
        {
          id: Math.random(),
          name: 'mangal.png',
          title: 'Блюда на мангале',
        },
        {
          id: Math.random(),
          name: 'first.png',
          title: 'Первые блюда',
        },
        {
          id: Math.random(),
          name: 'second.png',
          title: 'Вторые блюда',
        },
        {
          id: Math.random(),
          name: 'garnirs.png',
          title: 'Гарниры',
        },
        {
          id: Math.random(),
          name: 'salats.png',
          title: 'Салаты',
        },
        {
          id: Math.random(),
          name: 'zakuson.png',
          title: 'Закуски',
        },
        {
          id: Math.random(),
          name: 'drink.png',
          title: 'Напитки',
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
              <Link
                activeClass="active"
                to="kebab"
                spy={true}
                smooth={true}
                onClick={() => displayCategory('kebab')}
                delay={50}
                offset={-250}
                duration={500}
              >
                <div className="DishMenu__title">Блюда на мангале</div>
              </Link>
            </div>
          </Col>

          <Col md={8} className="DishMenu__litlecatCont p-0">
            <Row className="DishMenu__litlecatContLine DishMenu__litlecatContLineFirst p-0 m-0 h-50">
              <Col md={4} className="DishMenu__litlecat p-0 d-flex justify-content-center align-items-end">
                <div style={{ marginTop: -100, cursor: 'pointer' }}>
                  <img src="img/dish/first.png" alt="" />
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
                    <div className="DishMenu__litlecatTitle">Первые блюда</div>
                  </Link>
                </div>
              </Col>
              <Col md={4} className="DishMenu__litlecat p-0 d-flex justify-content-center align-items-end">
                <div style={{ marginTop: -100, cursor: 'pointer' }}>
                  <img style={{ marginBottom: -25 }} src="img/dish/second.png" alt="" />
                  <Link
                    onClick={() => displayCategory('seconddish')}
                    activeClass="active"
                    to="seconddish"
                    spy={true}
                    smooth={true}
                    delay={50}
                    offset={-250}
                    duration={500}
                  >
                    <div className="DishMenu__litlecatTitle">Вторые блюда</div>
                  </Link>
                </div>
              </Col>
              <Col md={4} className="DishMenu__litlecat p-0 d-flex justify-content-center align-items-end">
                <div style={{ marginTop: -100, cursor: 'pointer' }}>
                  <img src="img/dish/garnirs.png" alt="" />
                  <Link
                    onClick={() => displayCategory('garnirs')}
                    activeClass="active"
                    to="garnirs"
                    spy={true}
                    smooth={true}
                    delay={50}
                    offset={-250}
                    duration={500}
                  >
                    <div className="DishMenu__litlecatTitle">Гарниры</div>
                  </Link>
                </div>
              </Col>
            </Row>

            <Row className="DishMenu__litlecatContLine p-0 m-0 h-50">
              <Col md={4} className="DishMenu__litlecat p-0 d-flex justify-content-center align-items-end">
                <div style={{ marginTop: -100, cursor: 'pointer' }}>
                  <img src="img/dish/salats.png" alt="" />
                  <Link
                    onClick={() => displayCategory('salats')}
                    activeClass="active"
                    to="salats"
                    spy={true}
                    smooth={true}
                    delay={50}
                    offset={-250}
                    duration={500}
                  >
                    <div className="DishMenu__litlecatTitle">Салаты</div>
                  </Link>
                </div>
              </Col>
              <Col md={4} className="DishMenu__litlecat p-0 d-flex justify-content-center align-items-end">
                <div style={{ marginTop: -100, cursor: 'pointer' }}>
                  <img src="img/dish/zakuson.png" alt="" />
                  <Link
                    onClick={() => displayCategory('snacks')}
                    activeClass="active"
                    to="snacks"
                    spy={true}
                    smooth={true}
                    delay={50}
                    offset={-250}
                    duration={500}
                  >
                    <div className="DishMenu__litlecatTitle">Закуски</div>
                  </Link>
                </div>
              </Col>
              <Col md={4} className="DishMenu__litlecat p-0 d-flex justify-content-center align-items-end">
                <div style={{ marginTop: -100, cursor: 'pointer' }}>
                  <img src="img/dish/drink.png" alt="" />
                  <Link
                    onClick={() => displayCategory('drinks')}
                    activeClass="active"
                    to="drinks"
                    spy={true}
                    smooth={true}
                    delay={50}
                    offset={-250}
                    duration={500}
                  >
                    <div className="DishMenu__litlecatTitle">Напитки</div>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="DishMenu__mobile p-0 d-flex d-md-none">
          <Swiper
            loop={true}
            navigation={{
              nextEl: '#nextMenuItem',
              prevEl: '#prevMenuItem',
            }}
            pagination={{ clickable: true, el: '#paginationMenuItem' }}
          >
            {this.state.slidesMobile.map((slide, index) => {
              return (
                <SwiperSlide key={slide.id} virtualIndex={index}>
                  <div style={{ cursor: 'pointer' }}>
                    <img className="image-fluid" src={`img/dish/slider/${slide.name}`} alt="" width="100%" />
                    <div className="DishMenu__mobiletitle">{slide.title}</div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>

          <Container>
            <Row>
              <Col className="swiperFullElements d-flex justify-content-between align-items-center">
                <div className="swiperFullElements__lineCont" style={{ textAlign: 'left' }}>
                  <div className="swiperFullElements__line"></div>
                </div>
                <div id="prevMenuItem">
                  <img src="img/slider/left.svg" alt="" />
                </div>
                <div id="paginationMenuItem"></div>
                <div id="nextMenuItem">
                  <img src="img/slider/right.svg" alt="" />
                </div>
                <div className="swiperFullElements__lineCont d-flex justify-content-end">
                  <div className="swiperFullElements__line"></div>
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    )
  }
}
