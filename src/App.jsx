import React, { Component } from 'react'

import Section from './components/section/Section'
import List from './components/list/List'

class App extends Component {
  state = {
    isFirst: true,
    isLoading: false,
    users: [],
    errMsg: ''
  }
  updateAppState = ({ isFirst, isLoading, users, errMsg }) => {
    this.setState({
      isFirst,
      isLoading,
      users,
      errMsg
    })
  }

  render() {
    return (
      <div className="container">
        <Section updateAppState={this.updateAppState} />
        <List appState={this.state} />
      </div>
    )
  }
}

export default App
