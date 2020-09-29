import React from 'react'
import { Container } from 'react-bootstrap'
import './Delivery.scss'

interface DeliveryProps {}

interface DeliveryState {}

const background: string = 'img/fon/bg_car.png'

class Delivery extends React.Component<DeliveryProps, DeliveryState> {
  render() {
    return (
      // <div className="delivery "  style={{ backgroundImage: `url(${background})` }}>

      <Container className="delivery ml-3 mr-3 ml-md-auto mr-md-auto">
        <div className="row m-0 p-0">
          <div className="col-lg-7 m-0 p-0 delivery__info">
            <h3 className="delivery__title">Захотели есть, но нет желания выходить из дома?</h3>
            <p>Выход есть всегда! Просто закажите доставку на дом</p>
            <p>Совершите 4 простых действия:</p>
            <div className="row">
              <div className="col-lg-6 delivery__action">
                <div className="delivery__cirlcle">1</div>
                <div className="delivery__action__text">Сделайте выбор товара</div>
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
          </div>
          <div className="col-lg-5">
            <img className="delivery__background image-fluid" src="img/fon/bg_car.png"></img>
          </div>
        </div>

        <div className="row   delivery__invite">
          <div className="col-xl-4">
            <h3 className="delivery__title">Или вы всегда можете придти к нам</h3>
          </div>
        </div>
        <div className="row m-0 p-0">
          <div className="col-lg-4 m-0 mt-4 mb-4 p-0">
            <img className="mr-4" src="img/smily-face.png" />
            Вкусно поесть
          </div>
          <div className="col-lg-4  m-0  mt-4 mb-4 p-0 ">
            <img className="mr-4" src="img/stars.png" />
            Отдохнуть в приятной обстановке
          </div>
          <div className="col-lg-4 m-0 p-0"></div>
        </div>

        <div className="row m-0 p-0 delivery__address ">
          <div className="col-sm-4 m-0 p-0 ">
            <div className="delivery__address__title pt-4 pb-4">Мы находимся</div>
            <div>
              <img className="mr-3" src="img/marker.png" />
              мкр-он Бабаевского, ул. Жилая 1
            </div>
          </div>
          <div className="col-sm-8 m-0 p-0 ">
            <div className="delivery__address__title pt-4 pb-4">Зона доставки</div>
            <div>
              <img className="mr-3" src="img/map.png" /> мкр-он Бабаевского, поселок Свободный, поселок Янго-Аул,
              Астрахань-2
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default Delivery
