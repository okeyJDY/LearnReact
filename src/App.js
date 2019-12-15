import React from 'react'
import axios from 'axios'

class App extends React.Component {
  componentDidMount() {
    let url = `https://api.github.com/search/repositories?q=r&sort=stars`
    axios({ url })
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
}

export default App