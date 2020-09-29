import React from 'react'
import { Container } from 'react-bootstrap'
import AdditionalFeature from './AdditionalFeature/AdditionalFeature'
import DishMenu from './DishMenu/DishMenu'
import './MainPage.scss'

interface MainPageProps {}

interface MainPageState {}

const background: string = "img/fon/bg.png"

class MainPage extends React.Component<MainPageProps, MainPageState> {
  render() {
    return(
      <Container fluid className="MainPage" style={{backgroundImage: `url(${background})`}}>
        <DishMenu />
        <AdditionalFeature />
      </Container>
    )
  }
}

export default MainPage