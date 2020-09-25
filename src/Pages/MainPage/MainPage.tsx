import React from 'react'
import { Container } from 'react-bootstrap'
import './MainPage.scss'

interface MainPageProps {}

interface MainPageState {}

class MainPage extends React.Component<MainPageProps, MainPageState> {
  render() {
    return(
      <Container fluid className="MainPage">
        MainPage
      </Container>
    )
  }
}

export default MainPage