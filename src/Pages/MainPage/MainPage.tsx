import React from 'react'
import { Container } from 'react-bootstrap'
import './MainPage.scss'

interface MainPageProps {}

interface MainPageState {}

const background: string = "img/fon/back.img"

class MainPage extends React.Component<MainPageProps, MainPageState> {
  render() {
    return(
      <Container fluid className="MainPage" style={{backgroundImage: `url(${background})`}}>
        MainPage
      </Container>
    )
  }
}

export default MainPage