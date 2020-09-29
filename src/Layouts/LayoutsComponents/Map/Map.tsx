import React from 'react'
import { Container } from 'react-bootstrap'
import './Map.scss'

interface MapProps {}

interface MapState {}

class Map extends React.Component<MapProps, MapState> {
  render() {
    return <Container fluid className="map"></Container>
  }
}

export default Map
