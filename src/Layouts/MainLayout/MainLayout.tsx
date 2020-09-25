import { Grid } from '@material-ui/core'
import React from 'react'
import MainPage from '../../Pages/MainPage/MainPage'
import Footer from '../LayoutsComponents/Footer/Footer'
import Header from '../LayoutsComponents/Header/Header'
import './MainLayout.scss'

interface MainLayoutProps {}

interface MainLayoutState {}

class MainLayout extends React.Component<MainLayoutProps, MainLayoutState> {
  render() {
    return (
      <Grid className="MainLayout">
        <Header />
        <MainPage />
        <Footer />
      </Grid>
    )
  }
}

export default MainLayout