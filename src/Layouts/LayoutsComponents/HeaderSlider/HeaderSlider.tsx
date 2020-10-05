import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './HeaderSlider.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/swiper.scss'
// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import Slide from '../../../Interfaces/Slide'

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay])

interface HeaderSliderProps {}

interface HeaderSliderState {
  slides: Slide[]
  slidesMobile: Slide[]
}

class HeaderSlider extends React.Component<HeaderSliderProps, HeaderSliderState> {
  constructor(props: HeaderSliderProps) {
    super(props)
    this.state = {
      slides: [
        {
          id: Math.random(),
          name: 'баран.png',
          tags: ''
        },
        {
          id: Math.random(),
          name: 'кура.png',
          tags: ''
        },
        {
          id: Math.random(),
          name: 'свинья.png',
          tags: ''
        },
      ],
      slidesMobile: [
        {
          id: Math.random(),
          name: 'баран.png',
          tags: ''
        },
        {
          id: Math.random(),
          name: 'кура.png',
          tags: ''
        },
        {
          id: Math.random(),
          name: 'свинья.png',
          tags: ''
        },
      ],
    }
  }

  render() {
    return (
      <Container fluid className="p-0 m-0">
        <Container fluid className="HeaderSlider d-none d-sm-block p-0">
          <Swiper
            loop={true}
            autoplay={{delay:5000}}
            navigation={{
              nextEl: '#nextSlideFull',
              prevEl: '#prevSlideFull',
            }}
            pagination={{ clickable: true, el: '#paginationFull' }}
          >
            {this.state.slides.map((slide, index) => {
              return (
                <SwiperSlide key={slide.id} virtualIndex={index}>
                  <img className="image-fluid" src={`img/slider/${slide.name}`} alt="" width="100%" />
                </SwiperSlide>
              )
            })}
          </Swiper>

          <Container>
            <Row>
              <Col className="swiperFullElements d-flex justify-content-between align-items-center p-0">
                <div className="swiperFullElements__lineCont" style={{ textAlign: 'left' }}>
                  <div className="swiperFullElements__line"></div>
                </div>
                <div id="prevSlideFull">
                  <img src="img/slider/left.svg" alt="" />
                </div>
                <div id="paginationFull"></div>
                <div id="nextSlideFull">
                  <img src="img/slider/right.svg" alt="" />
                </div>
                <div className="swiperFullElements__lineCont d-flex justify-content-end">
                  <div className="swiperFullElements__line"></div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>

        <Container fluid className="HeaderSlider d-block d-sm-none p-0">
          <Swiper
            loop={true}
            navigation={{
              nextEl: '#nextSlideMob',
              prevEl: '#prevSlideMob',
            }}
            autoplay={{delay:5000}}
            pagination={{ clickable: true, el: '#paginationMob' }}
          >
            {this.state.slidesMobile.map((slide, index) => {
              return (
                <SwiperSlide key={slide.id} virtualIndex={index}>
                  <img className="image-fluid" src={`img/slider/mob/${slide.name}`} alt="" width="100%" />
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
                <div id="prevSlideMob">
                  <img src="img/slider/left.svg" alt="" />
                </div>
                <div id="paginationMob"></div>
                <div id="nextSlideMob">
                  <img src="img/slider/right.svg" alt="" />
                </div>
                <div className="swiperFullElements__lineCont d-flex justify-content-end">
                  <div className="swiperFullElements__line"></div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    )
  }
}

export default HeaderSlider
