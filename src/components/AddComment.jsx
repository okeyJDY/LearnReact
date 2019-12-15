import React from 'react'

class Add extends React.Component {

  handleAddComment = () => {
    let username = this.refs.usernameDOM.value
    let content = this.refs.contentDOM.value
    if (!username.trim() || !content.trim()) {
      alert('请输入合法内容')
      return
    }
    this.props.add({ username, content })
    this.refs.usernameDOM.value = ''
    this.refs.contentDOM.value = ''
  }

  render() {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input
              ref="usernameDOM"
              type="text"
              className="form-control"
              placeholder="用户名" />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea
              ref="contentDOM"
              className="form-control"
              rows="6"
              placeholder="评论内容" />
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button
                type="button"
                className="btn btn-default pull-right"
                onClick={this.handleAddComment}
              >提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Add