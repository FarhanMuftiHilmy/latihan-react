import LifeCycle from './LifeCycle'
import React, { Component } from 'react'

export default class Home extends Component {
    state = {
        showComponent: true
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({showComponent: false})
        }, 7000)
    }
    render() {
        return (
            <div>
                {this.state.showComponent ? <LifeCycle />:null}
            </div>
        )
    }
}
