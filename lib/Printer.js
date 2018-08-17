'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Printer = function (_Component) {
  (0, _inherits3.default)(Printer, _Component);

  function Printer() {
    (0, _classCallCheck3.default)(this, Printer);
    return (0, _possibleConstructorReturn3.default)(this, (Printer.__proto__ || (0, _getPrototypeOf2.default)(Printer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Printer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setContainer();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mountNode = null;
    }
  }, {
    key: 'setContainer',
    value: function setContainer() {
      var element = document.createElement('div');
      element.style.display = 'none';
      this.mountNode = element;

      document.body.appendChild(element);
      window.matchMedia('print').onchange = function (mql) {
        element.style.display = mql.matches ? 'block' : 'none';
      };
      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return this.mountNode ? _reactDom2.default.createPortal(children, this.mountNode) : null;
    }
  }]);
  return Printer;
}(_react.Component);

exports.default = Printer;