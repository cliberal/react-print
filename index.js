import { Component } from 'react'
import ReactDOM from 'react-dom'
import './print.css'

export default class Printer extends Component {
  componentDidMount() {
    this.setContainer()
  }

  componentWillUnmount() {
    this.mountNode = null
  }

  setContainer() {
    const element = document.createElement('div')
    element.className = 'react-print'
    document.body.appendChild(element)
    this.mountNode = element
    this.forceUpdate()
  }

  render() {
    const { children } = this.props
    return this.mountNode ? ReactDOM.createPortal(children, this.mountNode) : null
  }
}
