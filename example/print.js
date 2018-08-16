import React, { Component } from 'react'
import { Printer, PrintProvider } from 'react-print-modern'

class App extends Component {
  render() {
    return (
      <PrintProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Printer>
            <h1>hahahah</h1>
          </Printer>
        </div>
      </PrintProvider>
    )
  }
}

export default App
