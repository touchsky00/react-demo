import React, { Component } from 'react'
import './loginInput.less'


export default class LoginInput extends Component {
  render() {
    return (
        <div className="input-item">
            <input id="username" required onChange={this.changeUsername} value={this.state.username} type="text"></input>
            <label htmlFor="username">用户名</label>
            {
                this.state.username?null:(
                    <div className="input-tip">的肌肤时刻的风景</div>
                )
            }
        </div>
    )
  }
}
