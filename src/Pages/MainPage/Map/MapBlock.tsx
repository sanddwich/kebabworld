import React from 'react'
import { Container } from 'react-bootstrap'
import { YMaps, Map } from 'react-yandex-maps'
import './MapBlock.scss'

interface MapBlockProps {}

interface MapBlockState {}

class MapBlock extends React.Component<MapBlockProps, MapBlockState> {
  render() {
    return (
      <Container fluid className="map m-0 p-0">
        <YMaps>
          <Map className="map__yandex" defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </YMaps>
      </Container>
    )
  }
}

export default MapBlock
