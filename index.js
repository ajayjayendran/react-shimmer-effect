"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJss = require("react-jss");

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  shimmer: {
    background: "#f2f2f2",
    display: "inline-block",
    backgroundImage: "linear-gradient(to right,#eeeeee 40%,#dddddd 50%,#eeeeee 60%)",
    backgroundSize: "800px 104px",
    backgroundRepeat: "no-repeat",
    animation: "shimmerAnim 2s infinite linear"
  },
  "@keyframes shimmerAnim": {
    "0%": {
      backgroundPosition: "-468px 0"
    },
    "100%": {
      backgroundPosition: "468px 0"
    }
  }
};

var Shimmer = function (_Component) {
  _inherits(Shimmer, _Component);

  function Shimmer() {
    _classCallCheck(this, Shimmer);

    return _possibleConstructorReturn(this, (Shimmer.__proto__ || Object.getPrototypeOf(Shimmer)).apply(this, arguments));
  }

  _createClass(Shimmer, [{
    key: "appendShimmerToChild",

    /**
     * Appending animating shimmer class to the Shimmer component's child.
     */
    value: function appendShimmerToChild(child) {
      var classes = this.props.classes;

      return _react2.default.cloneElement(child, {
        className: (0, _classnames2.default)(child.props.className, classes.shimmer)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var modifiedChildren = [];
      if (children.length > 0) {
        children.forEach(function (element) {
          modifiedChildren.push(_this2.appendShimmerToChild(element));
        });
      } else {
        modifiedChildren = this.appendShimmerToChild(children);
      }
      return _react2.default.createElement(
        _react.Fragment,
        null,
        modifiedChildren
      );
    }
  }]);

  return Shimmer;
}(_react.Component);

Shimmer.propTypes = {
  classes: _propTypes2.default.object,
  children: _propTypes2.default.object
};

Shimmer.defaultProps = {
  classes: {},
  children: {}
};

exports.default = (0, _reactJss2.default)(styles)(Shimmer);