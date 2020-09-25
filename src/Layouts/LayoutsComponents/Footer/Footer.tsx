import { Grid } from '@material-ui/core'
import React from 'react'
import './Footer.scss'

interface FooterProps {}

interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  render() {
    return(
      <Grid className="Footer">
        Footer
      </Grid>
    )
  }
}

export default Footer