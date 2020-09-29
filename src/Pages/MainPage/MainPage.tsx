import React from 'react'
import { Container } from 'react-bootstrap'
import AdditionalFeature from './AdditionalFeature/AdditionalFeature'
import DishMenu from './DishMenu/DishMenu'
import MapBlock from './Map/MapBlock'
import './MainPage.scss'
import FullMenu from './FullMenu/FullMenu'
import Delivery from './Delivery/Delivery'
import { Transition } from 'react-transition-group'

interface MainPageProps {}

interface MainPageState {}

const background: string = 'img/fon/bg.png'

const duration = 1000

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 1,
}

class MainPage extends React.Component<MainPageProps, MainPageState> {
  render() {
    return (
      <Container fluid className="MainPage m-0 p-0" style={{ backgroundImage: `url(${background})` }}>
        <DishMenu />
        <AdditionalFeature />
        <FullMenu />
        <Delivery />
        {/* <Transition in={true} timeout={duration}>
          <div
            style={{
              ...defaultStyle,
            }}
          >
            <Delivery />
          </div>
        </Transition> */}
        <MapBlock />
      </Container>
    )
  }
}

export default MainPage
