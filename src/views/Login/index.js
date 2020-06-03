import React, { Component } from 'react'
import './login.less'

export default class Login extends Component {
    state = {
        username: '',
        password: '',

        isUsernameInputPromptVisible: false,
        isPasswordInputPromptVisible: false,
    }

    changeUsername = (e) => {
        this.setState({
            username: e.currentTarget.value,
            isUsernameInputPromptVisible: e.currentTarget.value ? false : true
        })
    }

    changePassword = (e) => {
        this.setState({
            password: e.currentTarget.value,
            isPasswordInputPromptVisible: e.currentTarget.value ? false : true
        })
    }

    onLogin = () => {
        const { username, password } = this.state
        if (!username && !password) {
            this.setState({
                isUsernameInputPromptVisible: true,
                isPasswordInputPromptVisible: true
            })
            return;
        }
        if (!username) {
            this.setState({
                isUsernameInputPromptVisible: true
            })
            return;
        }
        if (!password) {
            this.setState({
                isPasswordInputPromptVisible: true
            })
            return;
        }
        this.props.history.push('/')
    }

    onKeyDownchange = (e) => {
        if (e.keyCode === 13) {
            this.onLogin();
        }
    }

    render() {
        return (
            <>
                <div className="login-page">
                    <div className="login-box">
                        <div className="login-title"></div>
                        <div className="input-item">
                            <input
                                id="username"
                                required
                                onChange={this.changeUsername}
                                value={this.state.username}
                                type="text"
                                onKeyDown={e => this.onKeyDownchange(e)} />
                            <label htmlFor="username">用户名</label>
                            <div className="bottom-line"></div>
                            <span style={{ visibility: this.state.isUsernameInputPromptVisible ? 'visible' : 'hidden' }}>请输入用户名</span>
                        </div>
                        <div className="input-item">
                            <input
                                id="password"
                                required
                                onChange={this.changePassword} v
                                alue={this.state.password}
                                type="password"
                                onKeyDown={e => this.onKeyDownchange(e)} />
                            <label htmlFor="password">密码</label>
                            <div className="bottom-line"></div>
                            <span style={{ visibility: this.state.isPasswordInputPromptVisible ? 'visible' : 'hidden' }}>请输入密码</span>
                        </div>
                        <div className="btn-submit">
                            <button onClick={this.onLogin}>登 录</button>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
