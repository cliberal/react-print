# react-print-modern
> react version >= 16.0.0

## Install

```
npm install react-print-modern
```

## Usage

```js

// index.js
ReactDOM.render(
  <PrintProvider>
    <App />
  </PrintProvider>,
  document.getElementById('root')
)

// file needs print
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Printer>
          <h1>print something</h1>
        </Printer>
      </div>
    );
  }
}
```