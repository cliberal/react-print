import { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default class Printer extends Component {
  componentDidMount() {
    this.setContainer()
  }

  componentWillUnmount() {
    this.mountNode = null
  }

  setContainer() {
    let element = document.querySelector('#react-print-modern')
    if (!element) {
      element = document.createElement('div')
      element.id = 'react-print-modern'
      document.body.appendChild(element)
    }
    this.mountNode = element
    this.forceUpdate()
  }

  render() {
    const { children } = this.props
    return this.mountNode ? ReactDOM.createPortal(children, this.mountNode) : null
  }
}
