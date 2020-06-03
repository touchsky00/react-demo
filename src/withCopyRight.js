import React, { Component } from 'react'

const withCopyRight = (Conponent) => {
    return class WithCopyRight extends Component {
        render() {
            return (
                <>
                    <Conponent  {...this.props}/>
                    <div>&copy;这个是高阶组件</div>
                </>
            )
        }
    }
}


export default withCopyRight