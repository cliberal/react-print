import { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Printer extends Component {
  componentDidMount() {
    this.setContainer()
  }

  componentWillUnmount() {
    this.mountNode = null
  }

  setContainer() {
    const element = document.createElement('div')
    element.style.display = 'none'
    this.mountNode = element
    
    document.body.appendChild(element)
    window.matchMedia('print').onchange = mql => {
      element.style.display =mql.matches ? 'block' : 'none';
    }
    this.forceUpdate()
  }

  render() {
    const { children } = this.props
    return this.mountNode ? ReactDOM.createPortal(children, this.mountNode) : null
  }
}
