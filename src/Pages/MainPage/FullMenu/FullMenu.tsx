import React from 'react'
import { Container } from 'react-bootstrap'
import './FullMenu.scss'

interface FullMenuProps {}

interface FullMenuState {}

class FullMenu extends React.Component<FullMenuProps,FullMenuState> {
  render() {
    return (
      <Container className="FullMenu">
        <h1>FullMenu</h1>
      </Container>
    )
  } 
}

export default FullMenu