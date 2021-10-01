import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Delivery.scss'

interface DeliveryProps {}

interface DeliveryState {}

const background: string = 'img/fon/bg_car.png'

class Delivery extends React.Component<DeliveryProps, DeliveryState> {
  render() {
    return (
      // <div className="delivery "  style={{ backgroundImage: `url(${background})` }}>

      <Container id="delivery" className="delivery ml-3 mr-3 ml-md-auto mr-md-auto">
        <div className="row m-0 p-0">
          <div className="col-lg-7 m-0 p-0 delivery__info">
            <h3 className="delivery__title">Захотели есть, но нет желания выходить из дома?</h3>
            <p>Выход есть всегда! Просто закажите доставку на дом</p>
            <p>Совершите 4 простых действия:</p>
            <div className="row">
              <div className="col-lg-6 delivery__action">
                <div className="delivery__cirlcle">1</div>
                <div className="delivery__action__text">Сделайте выбор блюда</div>
              </div>
              <div className="col-lg-6 delivery__action">
                <div className="delivery__cirlcle">2</div>
                <div className="delivery__action__text">Позвоните нам и сделайте заказ</div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 delivery__action">
                <div className="delivery__cirlcle">3</div>
                <div className="delivery__action__text">Ожидайте курьера</div>
              </div>
              <div className="col-lg-6 delivery__action">
                <div className="delivery__cirlcle">4</div>
                <div className="delivery__action__text">Насладитесь вкусной и горячей едой </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 delivery__string delivery__conditions">
                Стоимость доставки: 100р. При заказе от 2000р. - БЕСПЛАТНО
              </div>
              <div className="dddddd w-100">Минимальный заказ от 300гр.</div>
            </div>
          </div>
          <div className="col-lg-5">
            <img className="delivery__background image-fluid" style={{ zIndex: 10 }} src="img/fon/bg_car.png"></img>
          </div>
        </div>

        <div className="row   delivery__invite">
          <div className="col-xl-4">
            <h3 className="delivery__title">Или вы всегда можете придти к нам</h3>
          </div>
        </div>
        <div className="row m-0 p-0 d-flex justify-content-between">
          <div className="delivery__descr col-lg-4 m-0 mt-4 mb-4 p-0">
            <div className="delivery__descr row">
              <div className="delivery__descrimg col-xs-2">
                <img className="mr-4" src="img/smily-face.png" />
              </div>
              <div className="delivery__descrtitle col-xs-10">Вкусно поесть</div>
            </div>
          </div>
          <div className="delivery__descr col-lg-4  m-0  mt-4 mb-4 p-0 ">
            <div className="delivery__descr row">
              <div className="delivery__descrimg col-xs-2">
                <img className="mr-4" src="img/stars.png" />
              </div>
              <div className="delivery__descrtitle col-xs-10">Отдохнуть в приятной обстановке</div>
            </div>
          </div>
          <div className="col-lg-4  m-0  mt-4 mb-4 p-0 ">
            <div className="delivery__descr row">
              <div className="delivery__descrimg col-xs-2">
                <img className="mr-4" src="img/music.svg" style={{ marginTop: -5 }} />
              </div>
              <div className="delivery__descrtitle col-xs-10">Музыкальное сопровождение до 23:00</div>
            </div>
          </div>
        </div>

        <div className="row m-0 p-0 delivery__address ">
          {/* <div className="col-sm-4 m-0 p-0 ">
            <div className="delivery__address__title pt-4 pb-4">Мы находимся</div>
            <div>
              <img className="mr-3" src="img/marker.png" />
              мкр-он Бабаевского, ул. Жилая 1
            </div>
          </div>
          <div className="col-sm-8 m-0 p-0 ">
            <div className="delivery__address__title pt-4 pb-4">Зона доставки</div>
            <div>
              <img className="mr-3" src="img/map.png" /> мкр-он Бабаевского, Астрахань-2
            </div>
          </div> */}
          <Container fluid className="p-0">
            <Row className="delivery__string m-0">
              <Col className="delivery__address__title p-0">Мы находимся</Col>
              <Col className="delivery__address__title p-0">Зона доставки</Col>
            </Row>
            <Row className="delivery__string m-0">
              <Col className="p-0">
                <div className="d-flex justify-content-start align-items-center">
                  <img className="delivery__img" src="img/marker.png" />
                  <span>мкр-он Бабаевского, ул. Жилая 1</span>
                </div>
                <div className="delivery_descr">Время работы: 11:00 - 0:00</div>
              </Col>
              <Col className="p-0">
                <div className="d-flex justify-content-start align-items-center">
                  <img className="delivery__img" src="img/map.png" />
                  <span>мкр-он Бабаевского, Астрахань-2</span>
                </div>
              </Col>
            </Row>

            <Row className="delivery__string m-0">
              <Col className="p-0">
                <div className="d-flex justify-content-start align-items-center">
                  <img className="delivery__img" src="img/marker.png" />
                  <span>ул.Куликова 50в</span>
                </div>
                <div className="delivery_descr">Время работы: 10:00 - 23:00</div>
              </Col>
              <Col className="p-0">
                <div className="d-flex justify-content-start align-items-center">
                  <img className="delivery__img d-flex align-items-center" src="img/map.png" />
                  <span>по городу</span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    )
  }
}

export default Delivery
