import { Grid } from '@material-ui/core'
import React from 'react'
import './MainPage.scss'

interface MainPageProps {}

interface MainPageState {}

class MainPage extends React.Component<MainPageProps, MainPageState> {
  render() {
    return(
      <Grid className="MainPage">
        MainPage
      </Grid>
    )
  }
}

export default MainPage