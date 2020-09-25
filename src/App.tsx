import React from 'react'
import { connect } from 'react-redux'
// import logo from './logo.svg';
import './App.css'
import { RootState } from './Redux'
import { AppState } from './Redux/interfaces/interfaces'

interface AppProps {
  app: AppState
}

class App extends React.Component<AppProps, AppState> {
  componentDidMount() {
    console.log(this.props.app)
  }

  render() {
    return (
      <div className="App">
        <h1>KebabWorld</h1>
      </div>
    )
  }
}



const mapDispatchToProps = {}

const mapStateToProps = (state: RootState) => {
  return {
    app: state.app
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
