import React, { Component } from 'react'
import { Login, Home } from '@/views/index.js'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/login" component={Login}></Route>
        </Switch>
      </>
    )
  }
}

export default App
