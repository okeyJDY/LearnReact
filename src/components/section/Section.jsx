import React, { Component } from 'react'
import axios from 'axios'

class Section extends Component {

  keyWordRef = React.createRef()

  search = () => {
    let { updateAppState } = this.props
    let keyWord = this.keyWordRef.current.value.trim()
    updateAppState({
      isFirst: false,
      isLoading: true,
      users: [],
      errMsg: ''
    })
    const url = `https://api.github.com/search/users?q=${keyWord}`
    axios.get(url)
      .then(res => {
        let users = res.data.items
        updateAppState({
          isFirst: false,
          isLoading: false,
          users,
          errMsg: ''
        })
        this.keyWordRef.current.value = ''
      })
      .catch(err => {
        updateAppState({
          isFirst: false,
          isLoading: false,
          users: [],
          errMsg: err.toString()
        })
      })
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref={this.keyWordRef} />
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}

export default Section
