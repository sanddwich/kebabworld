import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './AdditionalFeature.scss'

interface AdditionalFeatureProps {}

interface AdditionalFeatureState {}

export default class AdditionalFeature extends React.Component<AdditionalFeatureProps, AdditionalFeatureState> {
  render() {
    return (
      <Container className="AdditionalFeature">
        <Row className="m-0 p-0">
          <Col md={4} className="p-4">
            <div className="AdditionalFeature__cont">
              <div className="AdditionalFeature__icon">
                <img src="img/addfeature/car.svg" alt="" />
              </div>
              <div className="AdditionalFeature__title">Бесплатная доставка</div>
              <div className="AdditionalFeature__descr">
                В пределах мкр-на Бабаевского При заказе от 1 килограмма<span style={{ color: '#FF2C33' }}>*</span>
              </div>
              <div className="AdditionalFeature__undertext">
                <span style={{ color: '#FF2C33' }}>*</span>Минимальный заказ от 300 грамм
              </div>
            </div>
          </Col>

          <Col md={4} className="p-4">
            <div className="AdditionalFeature__cont">
              <div className="AdditionalFeature__icon">
                <img src="img/addfeature/credit_card.svg" alt="" />
              </div>
              <div className="AdditionalFeature__title">Удобная оплата</div>
              <div className="AdditionalFeature__descr">Оплата наличными или картой курьеру</div>
            </div>
          </Col>

          <Col md={4} className="p-4">
            <div className="AdditionalFeature__cont">
              <div className="AdditionalFeature__icon">
                <img src="img/addfeature/steak.svg" alt="" />
              </div>
              <div className="AdditionalFeature__title">Сразу с огня</div>
              <div className="AdditionalFeature__descr">Готовим сразу для вас не разогревая в духовке</div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
