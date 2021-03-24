import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props){
        super(props);
        this.state = {
            hitung: 1
        }
        console.log('constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('componentDidMount')
        setTimeout(() => {
            this.setState({hitung : 2})
        }, 3000)

    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(preProps, preState){
        console.log('getSnapshotBeforeUpdate')
    }
    componentDidUpdate(preProps, preState, snapshot){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render')
        return (
            <div>
                <button>Analisa -) {this.state.hitung}</button>
            </div>
        )
    }

}


