class PrintProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {},
    }
  }
  componentDidMount() {
    window.matchMedia('print').onchange = mql => {
      this.setState({
        style: {
          display: mql.matches ? 'none' : '',
        },
      })
    }
  }

  render() {
    return <div style={this.state.style}>{this.props.children}</div>
  }
}