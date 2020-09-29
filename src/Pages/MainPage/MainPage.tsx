import React from 'react'
import { Container } from 'react-bootstrap'
import AdditionalFeature from './AdditionalFeature/AdditionalFeature'
import DishMenu from './DishMenu/DishMenu'
import MapBlock from './Map/MapBlock'
import './MainPage.scss'

interface MainPageProps {}

interface MainPageState {}

const background: string = 'img/fon/bg.png'

class MainPage extends React.Component<MainPageProps, MainPageState> {
  render() {
    return (
      <Container fluid className="MainPage m-0 p-0" style={{ backgroundImage: `url(${background})` }}>
        <DishMenu />
        <AdditionalFeature />
        <MapBlock />
      </Container>
    )
  }
}

export default MainPage
