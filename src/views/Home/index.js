import React, { Component } from 'react'
import { Checkbox } from '@/components'

export default class Home extends Component {
    change = (e) => {
        console.log(e.target.checked)
    }
    render() {
        return (
            <div>
                <Checkbox onChange={this.change}>hello</Checkbox>
            </div>
        )
    }
}
