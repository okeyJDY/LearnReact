import React from 'react'
import axios from 'axios'

class App extends React.Component {
  state = {
    isLoading: true,
    repoName: '',
    repoURL: '',
    errmsg: ''
  }
  keyWord = 'v'
  async componentDidMount() {
    let url = `https://api.github.com/search/repositories?q=${this.keyWord}&sort=stars`
    let response = await axios.get(url)
    let reopInfo = response.data.items[0]
    this.setState({
      isLoading: false,
      repoName: reopInfo.name,
      repoURL: reopInfo.html_url,
      errmsg: ''
    })
  }
  render() {
    let { repoName, repoURL, isLoading, errmsg } = this.state
    if (isLoading) {
      return <h1>Loading...</h1>
    } else if (errmsg) {
      return <h2>{errmsg}</h2>
    } else {
      return <h2>github上包含【{this.keyWord}】关键字的所有仓库中, 点赞数最多的是:<a href={repoURL}>{repoName}</a></h2>
    }
  }
}

export default App