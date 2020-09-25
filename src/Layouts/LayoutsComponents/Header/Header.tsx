import { Grid } from '@material-ui/core'
import React from 'react'
import './Header.scss'

interface HeaderProps {}

interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    return(
      <Grid xs={12} direction="row" alignItems="center" className="Header">
        <Grid xs={1} direction="column"></Grid>

        <Grid lg={2} direction="column" className="FullMenuItem">
          
        </Grid>

        <Grid lg={2} direction="column" className="FullMenuItem"></Grid>
        <Grid lg={2} direction="column" className="FullMenuItem"></Grid>
        <Grid lg={2} direction="column" className="FullMenuItem"></Grid>
        <Grid lg={2} direction="column" className="FullMenuItem"></Grid>

        <Grid xs={1} direction="column"></Grid>
      </Grid>
    )
  }
}

export default Header