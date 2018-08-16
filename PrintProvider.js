class PrintProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {},
    }
  }
  componentDidMount() {
    window.matchMedia('print').onchange = e => {
      this.setState({
        style: {
          display: window.matchMedia('print').matches ? 'none' : '',
        },
      })
    }
  }

  render() {
    return <div style={this.state.style}>{this.props.children}</div>
  }
}