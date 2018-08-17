'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrintProvider = function (_React$Component) {
  (0, _inherits3.default)(PrintProvider, _React$Component);

  function PrintProvider(props) {
    (0, _classCallCheck3.default)(this, PrintProvider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PrintProvider.__proto__ || (0, _getPrototypeOf2.default)(PrintProvider)).call(this, props));

    _this.state = {
      style: {}
    };
    return _this;
  }

  (0, _createClass3.default)(PrintProvider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.matchMedia('print').onchange = function (mql) {
        _this2.setState({
          style: {
            display: mql.matches ? 'none' : ''
          }
        });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: this.state.style },
        this.props.children
      );
    }
  }]);
  return PrintProvider;
}(React.Component);