import React, { Component } from 'react'

class App extends Component {
  state = {
    isLoading: true,
    repoName: '',
    repoUrl: '',
    errMsg: ''
  }
  keyWord = 'r'
  componentDidMount() {
    const url = `https://api.github.com/search/repositories?q=${this.keyWord}&sort=stars`
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          return Promise.reject('请求资源不存在')
        }
      })
      .then(res => {
        console.log('成功了')
        let repoInfo = res.items[0]
        this.setState({
          isLoading: false,
          repoName: repoInfo.name,
          repoUrl: repoInfo.html_url,
          errMsg: ''
        })
      })
      .catch(err => {
        console.log('失败了')
        this.setState({
          isLoading: false,
          repoName: '',
          repoUrl: '',
          errMsg: err.toString()
        })
      })
  }
  render() {
    let { isLoading, repoName, repoUrl, errMsg } = this.state
    if (isLoading) {
      return <h3>loading...</h3>
    } else if (errMsg) {
      return <h3>{errMsg}</h3>
    } else {
      return <h3>github上包含【{this.keyWord}】关键字的所有仓库中，点赞数量最多的是<a href={repoUrl}>{repoName}</a></h3>
    }
  }
}

export default App