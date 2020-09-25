import React from 'react'
import { connect } from 'react-redux'
// import logo from './logo.svg';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './Layouts/MainLayout/MainLayout'
import { RootState } from './Redux'
import { AppState } from './Redux/interfaces/interfaces'

interface AppProps {
  app: AppState
}

class App extends React.Component<AppProps, AppState> {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <MainLayout children={this.props.children} />
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
