import React from 'react'

class CommentItem extends React.Component {
  handleDelComment = () => {
    if (window.confirm(`你确定删除${this.props.commentItem.userName}的评论吗?`)) {
      this.props.del(this.props.index)
    }
  }
  render() {
    let { commentItem } = this.props
    return (
      <li className="list-group-item">
        <button className="handle"
          onClick={this.handleDelComment}>删除</button>
        <p className="user">
          <span >{commentItem.userName}</span>
          <span>说:</span>
        </p>
        <p className="centence">{commentItem.content}</p>
      </li>
    )
  }
}

export default CommentItem
