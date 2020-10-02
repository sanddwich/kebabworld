import React from 'react'
import { Container } from 'react-bootstrap'
import MainPage from '../../Pages/MainPage/MainPage'
import Footer from '../LayoutsComponents/Footer/Footer'
import Header from '../LayoutsComponents/Header/Header'
import HeaderSlider from '../LayoutsComponents/HeaderSlider/HeaderSlider'
import './MainLayout.scss'

interface MainLayoutProps {}

interface MainLayoutState {}

class MainLayout extends React.Component<MainLayoutProps, MainLayoutState> {
  render() {
    return (
      <Container fluid className="MainLayout p-0 m-0"  id="siteBegin">
        <Header />
        <HeaderSlider />
        <MainPage />
        <Footer />
      </Container>
    )
  }
}

export default MainLayout
