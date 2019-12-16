import React from 'react'

import AddComment from './components/AddComment'
import CommentList from './components/CommentList'

import './app.css'

class App extends React.Component {
  state = {
    commentArr: [
      { userName: '山西人', content: '我们有煤矿' },
      { userName: '雄安人', content: '我在雄安有两亩地' }
    ]
  }
  add = (commentObj) => {
    let commentArr = [commentObj, ...this.state.commentArr]
    this.setState({ commentArr })
  }
  del = (index) => {
    let { commentArr } = this.state
    commentArr.splice(index, 1)
    this.setState({ commentArr })
  }
  render() {
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <AddComment add={this.add} />
          <CommentList commentArr={this.state.commentArr} del={this.del} />
        </div>
      </div>
    )
  }
}

export default App