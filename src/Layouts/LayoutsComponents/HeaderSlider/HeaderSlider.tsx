import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './HeaderSlider.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/swiper.scss'
// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

// install Swiper components
SwiperCore.use([Navigation])

interface Slide {
  name: string
  id: number
}

interface HeaderSliderProps {}

interface HeaderSliderState {
  slides: Slide[]
}

class HeaderSlider extends React.Component<HeaderSliderProps, HeaderSliderState> {
  constructor(props: HeaderSliderProps) {
    super(props)
    this.state = {
      slides: [
        {
          id: Math.random(),
          name: 'slide1.jpg',
        },
        {
          id: Math.random(),
          name: 'slide1.jpg',
        },
        {
          id: Math.random(),
          name: 'slide1.jpg',
        },
        {
          id: Math.random(),
          name: 'slide1.jpg',
        },
        {
          id: Math.random(),
          name: 'slide1.jpg',
        },
      ],
    }
  }

  render() {
    return (
      <Container fluid className="HeaderSlider p-0">
        <Swiper
          loop={true}
          navigation={{
            nextEl: '#nextSlideFull',
            prevEl: '#prewSlideFull',
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
            <Col className="swiperFullElements d-flex justify-content-between">
              <div className="swiperFullElements__lineCont">
                <div className="swiperFullElements__line"></div>
              </div>
              <div id="#nextSlideFull"><img src="img/slider/left.svg" alt=""/></div>
              <div id="#paginationFull"></div>
              <div id="#prewSlideFull"><img src="img/slider/right.svg" alt=""/></div>
              <div className="swiperFullElements__lineCont">
                <div className="swiperFullElements__line"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default HeaderSlider
