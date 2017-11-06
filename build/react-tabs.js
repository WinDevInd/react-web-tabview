/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
	* Copyright 2013-2015, Facebook, Inc.
	* All rights reserved.
	*
	* This source code is licensed under the BSD-style license found in the
	* LICENSE file in the root directory of this source tree. An additional grant
	* of patent rights can be found in the PATENTS file in the same directory.
	*
	* @providesModule shallowEqual
	* @typechecks
	*
	*/



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 *
 * @param {Object} objA
 * @param {Object} objB
 * @returns {boolean}
 *
 */
var shallowEqual = function shallowEqual(objA, objB) {
   if (objA === objB) {
      return true;
   }

   if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
      return false;
   }

   var keysA = Object.keys(objA);
   var keysB = Object.keys(objB);

   if (keysA.length !== keysB.length) {
      return false;
   }

   // Test for A's keys different from B.
   var bHasOwnProperty = hasOwnProperty.bind(objB);
   for (var i = 0; i < keysA.length; i++) {
      if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
         return false;
      }
   }

   return true;
};
module.exports = shallowEqual;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Tabview = __webpack_require__(10);

var _Tabview2 = _interopRequireDefault(_Tabview);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowEqual = __webpack_require__(0);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _ripple = __webpack_require__(8);

var _ripple2 = _interopRequireDefault(_ripple);

var _smoothScrollX = __webpack_require__(9);

var _smoothScrollX2 = _interopRequireDefault(_smoothScrollX);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabView = function (_React$Component) {
	_inherits(TabView, _React$Component);

	function TabView(props) {
		_classCallCheck(this, TabView);

		var _this = _possibleConstructorReturn(this, (TabView.__proto__ || Object.getPrototypeOf(TabView)).call(this, props));

		_this.viewPagerHeight = window.innerHeight;
		_this.updateSliderPosition = _this.updateSliderPosition.bind(_this);
		_this.touchMovePropageted = _this.touchMovePropageted.bind(_this);
		_this.lastMoveX = 0;
		_this.selectedIndex = 0;
		_this.canMoveSlider = true;
		_this.canScrollHeader = true;
		_this.lastScrollPosition = 0;
		return _this;
	}

	_createClass(TabView, [{
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			this.measureHeaderHeight(this.props);
		}
	}, {
		key: "shouldComponentUpdate",
		value: function shouldComponentUpdate(nextProps) {
			var shouldComponentUpdate = !(0, _shallowEqual2.default)(this.props, nextProps);
			return shouldComponentUpdate;
		}
	}, {
		key: "measureHeaderHeight",
		value: function measureHeaderHeight(props) {
			var _this2 = this;

			if (this.props.enableInnerScroll) {
				var measureHeight = function measureHeight() {
					var _p = _this2.refs.headerCtn,
					    _height = _p && _p.offsetHeight;
					if (_height) {
						if (_this2.viewPagerHeight !== _height) {
							_this2.viewPagerHeight = _height;
							props.updateHeight && props.updateHeight(_height);
						}
					} else {
						_this2.rafId = window.requestAnimationFrame(function () {
							measureHeight();
						});
					}
				};
				measureHeight();
			}
		}
	}, {
		key: "tabChange",
		value: function tabChange(index, tabItem, e) {
			(0, _ripple2.default)(e, e.currentTarget, 'rgba(0,0,0,0.3)', '0.35s', true, this.tabChangeAnimate(index, tabItem));
		}
	}, {
		key: "tabChangeAnimate",
		value: function tabChangeAnimate(index, tabItem) {
			this.canScrollHeader = true;
			this.props.tabChange && this.props.tabChange(index, tabItem);
		}
	}, {
		key: "animateFromIndex",
		value: function animateFromIndex(index) {
			var moveX = 0;
			for (var i = 0; i !== index; i++) {
				moveX += this.refs && this.refs['tabItem' + i] && this.refs['tabItem' + i].offsetWidth || 0;
			}
			return moveX;
		}

		/* not being used as of now */

	}, {
		key: "touchMovePropageted",
		value: function touchMovePropageted(move, viewWidth, index) {
			var _this3 = this;

			var slider = this.refs.slider;
			this.rafId = window.requestAnimationFrame(function () {
				if (slider && _this3.canMoveSlider) {
					_this3.shouldUpdateScrollPosition = true;
					var currentTarget = _this3.refs['tabItem' + index];
					move = move * -1;
					var sliderScrollX = _this3.lastMoveX + move / viewWidth * 100;
					var scaleX = 0;
					scaleX = currentTarget.offsetWidth || 1;
					slider.style.cssText = "transform-origin: 0px 0px 0px; " + "transform:translate3d(" + sliderScrollX + "px , 0, 0) scaleX(" + scaleX + ")";
					_this3.scrollIntoView(scaleX, sliderScrollX, index);
				}
			});
		}
	}, {
		key: "scrollIntoView",
		value: function scrollIntoView(scaleX, sliderScrollX, index) {
			var nextItemIndex = sliderScrollX > this.lastMoveX ? index + 1 : index - 1;
			// let nextItemWidth = this.refs['tabItem' + nextItemIndex].offsetWidth;
			var scrollThreshold = sliderScrollX > this.lastMoveX ? this.lastMoveX + scaleX * 0.40 : this.lastMoveX - scaleX * 0.40;
			if (this.props.enableTabSliderAnimation && this.canScrollHeader) {
				if (sliderScrollX > scrollThreshold && sliderScrollX > this.lastMoveX) {
					this.SmoothScrollX(400, nextItemIndex);
					this.canScrollHeader = false;
				} else if (sliderScrollX < this.lastMoveX && sliderScrollX < scrollThreshold) {
					this.SmoothScrollX(400, nextItemIndex);
					this.canScrollHeader = false;
				}
			}
		}
	}, {
		key: "updateSliderPosition",
		value: function updateSliderPosition(index) {
			var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

			if (!this.refs.slider) {
				return;
			}
			this.canMoveSlider = false;
			var canUpdateScroll = index !== this.selectedIndex;
			this.updateSlider(index);
			if (canUpdateScroll && this.canScrollHeader || !this.props.enableTabSliderAnimation) {
				this.SmoothScrollX(duration, index);
			}
			this.canScrollHeader = true;
		}
	}, {
		key: "updateSlider",
		value: function updateSlider(index) {
			var _this4 = this;

			this.rafId && window.cancelAnimationFrame(this.rafId);
			this.selectedIndex = index;
			var moveX = this.lastMoveX;
			var scaleX = 0;
			switch (index) {
				case 0:
					moveX = 0;
					break;
				case this.props.tabs.length - 1:
					moveX = this.refs.headerCtn.scrollWidth - this.refs['tabItem' + index].offsetWidth;
					break;
				default:
					moveX = this.animateFromIndex(index);
					break;
			}
			this.lastMoveX = moveX;
			scaleX = this.refs['tabItem' + index] && this.refs['tabItem' + index].offsetWidth || 1;
			var transformStyle = "transform: translate3d(" + moveX + "px , 0, 0) scaleX(" + scaleX + ");" + "transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)";
			this.refs.slider.style.cssText += transformStyle;
			setTimeout(function () {
				_this4.canMoveSlider = true;
			}, 300);
		}
	}, {
		key: "SmoothScrollX",
		value: function SmoothScrollX(duration, index) {
			var scrollAmount = this.scrollTabCtnWithMove(index);
			var scroll = this._normalizeScrollValue(scrollAmount);
			var header = this.refs.headerCtn;
			if (this.lastScrollPosition === scroll / 2) {
				return;
			}
			this.lastScrollPosition = scroll / 2;
			_smoothScrollX2.default.scroll(header, scroll / 2, duration);
			setTimeout(function () {
				// this.lastScrollPosition = header.scrollLeft;
			}, duration);
		}
	}, {
		key: "scrollTabCtnWithMove",
		value: function scrollTabCtnWithMove(nextItemIndex) {
			var header = this.refs.headerCtn;
			var finalTabWidth = this.refs['tabItem' + nextItemIndex] && this.refs['tabItem' + nextItemIndex].offsetWidth || 0;
			var centerDistance = finalTabWidth * nextItemIndex + finalTabWidth / 2;
			var scrollAmount = centerDistance - header.offsetWidth / 2;
			return scrollAmount;
		}
	}, {
		key: "_normalizeScrollValue",
		value: function _normalizeScrollValue(value) {
			var maxDistance = this.refs.headerCtn.scrollWidth;
			return Math.max(Math.min(value, maxDistance), 0);
		}
	}, {
		key: "render",
		value: function render() {
			var _this5 = this;

			var tabs = this.props.tabs;
			var _tabHeaderLength = tabs && tabs.length && 1 / tabs.length * 100;

			// Javascript Style object
			var tabStyleObj = this.props.tabsEquiSized ? { width: _tabHeaderLength + "%" } : { padding: "15px 20px" };
			var selectedStyleObj = Object.assign({}, tabStyleObj, this.props.styles.tabSelectedObj);
			var notSelectedStyleObj = Object.assign({}, tabStyleObj, this.props.styles.tabNotSelectedObj);

			// CSS style
			var tabStyle = _Tabview2.default['tabheader'];
			var selectedStyle = (0, _classnames2.default)(tabStyle, this.props.styles.tabSelected);
			var notSelectedStyle = (0, _classnames2.default)(tabStyle, this.props.styles.tabNotSelected);

			return tabs && tabs.length > 0 ? _react2.default.createElement(
				"div",
				{ ref: "headerCtn", className: (0, _classnames2.default)(_Tabview2.default["tabHeaderContainer"], this.props.styles.tabHeaderStyle),
					style: this.props.styles.tabHeaderContainerStyleObj },
				_react2.default.createElement(
					"ul",
					{ ref: "tabHeader",
						className: (0, _classnames2.default)(_Tabview2.default["tabheaders"]),
						onTouchMove: this.touchMove,
						onTouchEnd: this.touchEnd,
						onTouchStart: this.touchStart,
						"data-aid": "TabHeadersContainer" },
					tabs.map(function (tabItem, index) {
						return _react2.default.createElement(
							"li",
							{
								ref: "tabItem" + index,
								className: _this5.props.activeItemIndex === index ? selectedStyle : notSelectedStyle,
								onClick: _this5.tabChange.bind(_this5, index, tabItem || null),
								style: _this5.props.activeItemIndex === index ? selectedStyleObj : notSelectedStyleObj,
								key: "tabheader" + index,
								"data-aid": "tabheader_" + index },
							tabItem.view || null
						);
					})
				),
				_react2.default.createElement("div", { ref: "slider", className: (0, _classnames2.default)(_Tabview2.default["tabslider"], this.props.styles.sliderStyle), style: this.props.styles.sliderStyleObj })
			) : null;
		}
	}]);

	return TabView;
}(_react2.default.Component);

exports.default = TabView;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _ViewPager = __webpack_require__(11);

var _ViewPager2 = _interopRequireDefault(_ViewPager);

var _shallowEqual = __webpack_require__(0);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _PassiveListenerCheck = __webpack_require__(7);

var _PassiveListenerCheck2 = _interopRequireDefault(_PassiveListenerCheck);

var _lodash = __webpack_require__(13);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//// let's keep it 0 for now, will be enhanced in next release.
var ITEM_MARGIN = 0;
var MIN_MOVEX = 50;

var ViewPager = function (_React$Component) {
	_inherits(ViewPager, _React$Component);

	function ViewPager(props) {
		_classCallCheck(this, ViewPager);

		var _this = _possibleConstructorReturn(this, (ViewPager.__proto__ || Object.getPrototypeOf(ViewPager)).call(this, props));

		_this._passiveSupported = _PassiveListenerCheck2.default.checkPassiveListenerSupport();
		_this.onTouchStart = _this.onTouchStart.bind(_this);
		_this.onTouchEnd = _this.onTouchEnd.bind(_this);
		_this.onTouchMove = _this.onTouchMove.bind(_this);
		_this.updateHeight = _this.updateHeight.bind(_this);
		_this.subscribeScrollListener = _this.subscribeScrollListener.bind(_this);
		_this.removeScrollListener = _this.removeScrollListener.bind(_this);
		_this.getScrollDataObject = _this.getScrollDataObject.bind(_this);
		_this.scrollListener = _this.scrollListener.bind(_this);
		_this.setScrollForAllItem = _this.setScrollForAllItem.bind(_this);
		_this.moveHappend = false;
		_this.throttledScroll = (0, _lodash2.default)(_this.scrollListener, 200);
		_this.state = {
			itemWidth: window.innerWidth,
			itemHeight: window.innerHeight,
			initialActiveTab: props.activeItemIndex,
			activeItemIndex: props.activeItemIndex
		};
		return _this;
	}

	_createClass(ViewPager, [{
		key: 'getItemsList',
		value: function getItemsList() {
			var itemStyle = {
				position: 'relative',
				width: this.state.itemWidth,
				maxHeight: this.props.staticHeader ? this.props.maxHeight : 'auto',
				overflowY: this.props.staticHeader ? 'auto' : 'hidden'
			};
			var paddingStyle = {
				height: this.props.emptyBoxHeight,
				position: 'relative'
			};
			return this.props.items.map(function (item, idx) {
				// item.size = this.state.itemWidth;
				// item.height = this.props.contentHeight + this.props.emptyBoxHeight;
				return _react2.default.createElement(
					'div',
					{ ref: 'listitem' + idx, className: _ViewPager2.default['product-item'], key: idx, style: itemStyle },
					_react2.default.createElement('div', { style: paddingStyle }),
					item
				);
			});
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({
				initialActiveTab: nextProps.activeItemIndex,
				activeItemIndex: nextProps.activeItemIndex
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.refs.list.addEventListener("touchmove", this.onTouchMove, this._passiveSupported);
			this.refs.list.addEventListener("touchstart", this.onTouchStart, this._passiveSupported);
			this.refs.list.addEventListener("touchend", this.onTouchEnd, this._passiveSupported);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.ScrollUtil.removeScrollListener(this.scrollListener);
			this.refs.list.removeEventListener("touchmove", this.onTouchMove);
			this.refs.list.removeEventListener("touchstart", this.onTouchStart);
			this.refs.list.removeEventListener("touchend", this.onTouchEnd);
		}
	}, {
		key: 'scrollListener',
		value: function scrollListener(e) {
			e.scrollY = e.target.scrollTop;
			this.props.scrollListenerEvent(e);
		}
	}, {
		key: 'subscribeScrollListener',
		value: function subscribeScrollListener() {
			var needScrollObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			if (this.props.staticHeader) {
				var item = this.refs['listitem' + this.state.activeItemIndex];
				// window.ScrollUtil.addScrollListener(this.scrollListener.bind(this));
				item.addEventListener('scroll', this.throttledScroll);
				if (needScrollObject) {
					return this.getScrollDataObject();
				}
			}
		}
	}, {
		key: 'getScrollDataObject',
		value: function getScrollDataObject() {
			var _shouldMeasureBCR = false,
			    _domBCR = this.refs['listitem' + this.state.activeItemIndex].getBoundingClientRect(),
			    _initWindowScroll = this.refs['listitem' + this.state.activeItemIndex].scrollTop;
			return {
				shouldMeasureBCR: _shouldMeasureBCR,
				initWindowScroll: _initWindowScroll,
				domBCR: _domBCR
			};
		}
	}, {
		key: 'removeScrollListener',
		value: function removeScrollListener() {
			var item = this.refs['listitem' + this.state.activeItemIndex];
			item.removeEventListener('scroll', this.throttledScroll);
		}
	}, {
		key: 'updateHeight',
		value: function updateHeight(height) {
			this.setState({
				itemHeight: height
			});
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			return !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.props, nextProps);
		}
	}, {
		key: 'getItemsListWidth',
		value: function getItemsListWidth() {
			if (!this.state.itemWidth) {
				return 0;
			}
			var _w = this.state.itemWidth,
			    _count = this.props.items.length;
			return _w * _count + (_count + 1) * ITEM_MARGIN;
		}
	}, {
		key: 'onTouchStart',
		value: function onTouchStart(e) {
			this.startX = this.moveX = null;
			this.startX = e.touches[0]['clientX'];
			this.startY = e.touches[0]['clientY'];
			this.props.touchStartY && this.props.touchStartY(e);
			this.refs.list.classList.remove(_ViewPager2.default['isAnimatable']);
		}
	}, {
		key: 'onTouchMove',
		value: function onTouchMove(e) {
			var _this2 = this;

			if (!this.startX || !this.startY) {
				return;
			}
			var currentX = e.touches[0]['clientX'];
			this.moveX = currentX - this.startX;
			this.moveY = e.touches[0]['clientY'] - this.startY;
			var item = this.refs['listitem' + this.state.activeItemIndex];
			if (!this.isMovementWithinBounds()) {
				this.props.touchMoveY && this.props.touchMoveY(e);
				this.refs.list.removeEventListener("touchmove", this.onTouchMove, this._passiveSupported);
				return true;
			} else if (!this.noVScrollSet) {
				window.requestAnimationFrame(function () {
					// stop scroll while moving horizontally
					item.style.overflowY = ' hidden';
					document.body.style.overflowY = 'hidden';
					_this2.noVScrollSet = true;
				});
				e.stopPropagation && e.stopPropagation();
				this.noVScroll = true;
			}

			if (Math.abs(this.moveY) < Math.abs(this.moveX)) {
				this.moveHappend = true;
				if (this.props.enableViepagerAnimation) {
					var transformValue = this.getListTransformValue();
					// e.currentTarget.style.willChange = 'transform';
					e.currentTarget.style.transform = 'translate3d(' + (transformValue + this.moveX) + 'px, 0, 0) scale(1.0, 1.0)';
					// e.currentTarget.style.webkitTransform = `translate3d(${this.getListTransformValue() + this.moveX}px, 0, 0)`;
					this.props.touchMove && this.props.touchMove(this.moveX, 2 * ITEM_MARGIN + item.offsetWidth, this.state.activeItemIndex);
				}
			}
		}
	}, {
		key: 'onTouchEnd',
		value: function onTouchEnd(e) {
			// console.log('touch end');
			this.startX = null;
			var moveHappend = this.moveHappend;
			this.moveHappend = false;
			this.refs.list.classList.add(_ViewPager2.default['isAnimatable']);

			this.refs.list.style.transform = 'translate3d(' + this.getListTransformValue() + 'px, 0, 0) scale(1.0, 1.0)';
			// this.refs.list.style.willChange = 'initial';
			var finalIndex = this.determineFinalActiveIdx(moveHappend);
			this.refs.list.addEventListener("touchmove", this.onTouchMove, this._passiveSupported);
			if (this.noVScrollSet) {
				var item = this.refs['listitem' + this.state.activeItemIndex];
				item.style.overflowY = 'auto';
				document.body.style.overflowY = "visible";
			}
			this.noVScrollSet = false;

			this.props.updateTabSliderPosition && this.props.updateTabSliderPosition(this.state.activeItemIndex);

			if (finalIndex !== this.state.activeItemIndex) {
				this.refs['listitem' + finalIndex].addEventListener("scroll", this.scrollListener);
				this.refs['listitem' + this.state.activeItemIndex].removeEventListener("scroll", this.scrollListener);
				this.props.selecedIndexChanged && this.props.selecedIndexChanged(this.moveX, this.startX, finalIndex);
			}
			this.props.touchEndY && this.props.touchEndY(e);
			this.setState({
				activeItemIndex: finalIndex
			});
		}
	}, {
		key: 'setScrollForAllItem',
		value: function setScrollForAllItem() {
			var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
			var emptyBoxHeight = arguments[1];

			for (var i = 0; i < this.props.items.length; i++) {
				var item = this.refs['listitem' + i];
				if (top) {
					if (item.scrollTop < emptyBoxHeight) {
						item.scrollTop = emptyBoxHeight - item.scrollTop;
					}
				} else {
					if (item.scrollTop > emptyBoxHeight) {
						item.scrollTop -= emptyBoxHeight;
					} else {
						item.scrollTop = 0;
					}
				}
			}
		}
	}, {
		key: 'isMovementWithinBounds',
		value: function isMovementWithinBounds() {
			var _length = this.props.items.length;
			var _w = this.state.itemWidth;
			var _currTX = this.getListTransformValue();
			var _minX = -((_length - 1) * _w + (_length - 2) * ITEM_MARGIN);
			var horizontalMovement = Math.abs(this.moveX) > Math.abs(this.moveY);
			if (horizontalMovement && _currTX + this.moveX <= 0 && _currTX + this.moveX >= _minX) {
				return true;
			}
			return false;
		}
	}, {
		key: 'determineFinalActiveIdx',
		value: function determineFinalActiveIdx(moveHappend) {
			var MAX_IDX = this.props.items.length - 1,
			    MIN_IDX = 0,
			    direction = this.moveX > 0,
			    finalIndex = 0;
			// console.log(Math.abs(this.moveY) + " -- " + Math.abs(this.moveX));
			if (Math.abs(this.moveX) < MIN_MOVEX || !moveHappend) {
				return this.state.activeItemIndex;
			}

			if (direction) {
				// moved to right
				if (this.state.activeItemIndex > MIN_IDX) {
					finalIndex = this.state.activeItemIndex - 1;
				} else {
					finalIndex = MIN_IDX;
				}
			} else {
				// moved to left
				if (this.state.activeItemIndex < MAX_IDX) {
					finalIndex = this.state.activeItemIndex + 1;
				} else {
					finalIndex = MAX_IDX;
				}
			}
			return finalIndex;
		}
	}, {
		key: 'getListTransformValue',
		value: function getListTransformValue() {
			if (!this.state.itemWidth || !this.state.activeItemIndex) {
				return 0;
			} else if (this.state.activeItemIndex === this.props.items.length - 1) {
				return -(this.state.itemWidth * this.state.activeItemIndex + (this.state.activeItemIndex - 1) * ITEM_MARGIN) + ITEM_MARGIN;
			} else {
				// 352 + (n-1)*ITEM_MARGIN;
				return -(this.state.itemWidth * this.state.activeItemIndex + (this.state.activeItemIndex - 1) * ITEM_MARGIN);
			}
		}
	}, {
		key: 'getListTransformString',
		value: function getListTransformString() {
			var _dX = this.getListTransformValue();
			this.props.updateTabSliderPosition && this.props.updateTabSliderPosition(this.state.activeItemIndex);
			return 'translate3d(' + _dX + 'px, 0, 0) scale(1.0, 1.0)';
		}
	}, {
		key: 'getContaineStyle',
		value: function getContaineStyle() {
			var style = {
				overflowX: 'hidden',
				overflowY: this.props.staticHeader ? 'auto' : 'hidden'
			};
			return style;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: _ViewPager2.default['swipeable-products'] },
				_react2.default.createElement(
					'div',
					{ ref: 'itemContainer', style: this.getContaineStyle(), className: _ViewPager2.default['products-ctn'] },
					_react2.default.createElement(
						'div',
						{
							className: (0, _classnames2.default)(_ViewPager2.default['products-list']),
							style: { width: this.getItemsListWidth(), transform: this.getListTransformString() },
							ref: 'list' },
						this.state.itemWidth && this.getItemsList()
					)
				)
			);
		}
	}]);

	return ViewPager;
}(_react2.default.Component);

exports.default = ViewPager;


ViewPager.defaultProps = {
	items: []
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(5);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Viewpager = __webpack_require__(4);

var _Viewpager2 = _interopRequireDefault(_Viewpager);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowEqual = __webpack_require__(0);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _TabView = __webpack_require__(3);

var _TabView2 = _interopRequireDefault(_TabView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* method to calculate inertia
var dragOutOfBoundsMultiplier = function(val, multiplier = 1) {
	return (0.000005 * Math.pow(val, 2) + 0.0001 * val + 0.55) * multiplier;
}; */
var scrollThreshold = 40;

var TabComponent = function (_React$Component) {
	_inherits(TabComponent, _React$Component);

	function TabComponent(props) {
		_classCallCheck(this, TabComponent);

		var _this = _possibleConstructorReturn(this, (TabComponent.__proto__ || Object.getPrototypeOf(TabComponent)).call(this, props));

		_this._timeout = null;
		var activeTab = props.initialActiveTab || 0;
		_this.state = {
			tabData: { tabs: [], contents: [] },
			initialActiveTab: activeTab,
			activeTabIndex: activeTab,
			contentHeight: window.innerHeight,
			selecedIndex: -1
		};

		_this.selecedIndexChanged = _this.selecedIndexChanged.bind(_this);
		_this.updateHeight = _this.updateHeight.bind(_this);
		_this.constructTabs = _this.constructTabs.bind(_this);
		_this.initialize = _this.initialize.bind(_this);
		_this.tabChange = _this.tabChange.bind(_this);
		_this.updateTabsIndicator = _this.updateTabsIndicator.bind(_this);

		_this.selecedIndexChangedEventListener = _this.selecedIndexChangedEventListener.bind(_this);
		_this.scrollListener = _this.scrollListener.bind(_this);
		_this.touchMovePropageted = _this.touchMovePropageted.bind(_this);
		return _this;
	}

	_createClass(TabComponent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.initialize(this.props);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.initialize(nextProps);
		}
	}, {
		key: 'initialize',
		value: function initialize(props) {
			var _this2 = this;

			var tabData = this.constructTabs(props);
			var activeTab = !props.reset ? this.state.activeTabIndex : props.initialActiveTab;
			this.setState({
				tabData: tabData,
				initialActiveTab: props.initialActiveTab || 0,
				activeTabIndex: activeTab
			}, function () {
				if (_this2.props.staticHeader) {
					_this2.setInitialScrollData();
					_this2.refs.contents.subscribeScrollListener(_this2.scrollListener, false);
				}
			});
		}
	}, {
		key: 'setInitialScrollData',
		value: function setInitialScrollData() {
			var scrollDataObject = this.refs.contents.getScrollDataObject();
			this._shouldMeasureBCR = scrollDataObject.shouldMeasureBCR;
			this._initWindowScroll = scrollDataObject.initWindowScroll;
			if (this.isHeaderSticky) {
				this._initWindowScroll -= this.refs.header.offsetHeight - this.state.tabHeight;
			}
			this._domBCR = scrollDataObject.domBCR;
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			return !(0, _shallowEqual2.default)(this.state, nextState);
		}
	}, {
		key: 'updateHeight',
		value: function updateHeight(tabHeight) {
			var paddingBoxHeight = this.refs.header.offsetHeight;
			var contentHeight = window.innerHeight;
			if (this.state.contentHeight !== contentHeight || paddingBoxHeight !== this.state.emptyBoxHeight) {
				this.setState({
					contentHeight: contentHeight,
					emptyBoxHeight: paddingBoxHeight,
					tabHeight: tabHeight
				});
			}
		}

		// not using as of now

	}, {
		key: 'touchMovePropageted',
		value: function touchMovePropageted(move, itemWidth, index) {
			this.refs.tabWidget.touchMovePropageted(move, itemWidth, index);
		}
	}, {
		key: 'selecedIndexChanged',
		value: function selecedIndexChanged(moveX, startX, selecedIndex) {
			var _this3 = this;

			var tabData = this.constructTabs(this.props, selecedIndex);
			this.refs.contents.removeScrollListener(this.scrollListener, false);
			if (this.state.activeTabIndex !== selecedIndex) {
				this.setState({
					tabData: tabData,
					activeTabIndex: selecedIndex
				}, function () {
					_this3._shouldMeasureBCR = true;
					_this3.refs.contents.subscribeScrollListener(_this3.scrollListener, false);
					_this3.selecedIndexChangedEventListener(selecedIndex);
				});
			}
		}
	}, {
		key: 'tabChange',
		value: function tabChange(index) {
			var _this4 = this;

			this.setState({
				activeTabIndex: index
			}, function () {
				_this4.selecedIndexChangedEventListener(index);
			});
		}
	}, {
		key: 'selecedIndexChangedEventListener',
		value: function selecedIndexChangedEventListener(index) {
			var tabData = this.state.tabData;
			if (tabData && tabData.tabs && tabData.tabs.length) {
				var tab = tabData.tabs[index],
				    content = tabData.contents[index];
				this.props.onSelectedIndexChanged && this.props.onSelectedIndexChanged(tab, content, index);
			}
		}
	}, {
		key: 'updateTabsIndicator',
		value: function updateTabsIndicator(index) {
			var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

			this.refs.tabWidget && this.refs.tabWidget.updateSliderPosition && this.refs.tabWidget.updateSliderPosition(index, duration);
		}
	}, {
		key: 'constructTabs',
		value: function constructTabs(props) {
			var selectedIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : props.initialActiveTab;

			var _tabHeaders = [],
			    _tabContents = [];
			props.tabsData.map(function (tab, index) {
				// tab = tab[0];
				if (tab && tab.tabHeader) {
					var header = tab.tabHeader,
					    content = tab.tabContent;

					if (!header || !content) {
						throw new Error("invalid tab format. header or content block is not defined.");
					}
					if (header && content.props.children) {
						var _header = void 0;
						_header = selectedIndex === index ? header.selected : header.notSelected ? header.notSelected : header.selected;
						_tabHeaders.push({ headerObj: header, view: _header });
						_tabContents.push(content.props.children);
					}
				}
			});
			return {
				tabs: _tabHeaders,
				contents: _tabContents
			};
		}
	}, {
		key: 'scrollListener',
		value: function scrollListener(e) {
			var _windowScroll = e.scrollY;
			var scrollMovement = this.refs.header.offsetHeight - this.state.tabHeight;
			if (this._shouldMeasureBCR) {
				this.setInitialScrollData();
			}
			var throsholdValue = _windowScroll - this._initWindowScroll - this._domBCR.top;
			if (throsholdValue >= scrollMovement) {
				this.moveHeaderUp();
			} else if (throsholdValue < scrollMovement + scrollThreshold) {
				this.moveHeaderDown();
			}
			this.props.scrollChangedEventListener && this.props.scrollChangedEventListener(e);
		}
	}, {
		key: 'animateHeader',
		value: function animateHeader(e) {
			if (this.props.staticHeader && this.props.header && this.refs.contentsCtn.offsetHeight >= window.innerHeight) {
				var minMoveThreshold = this.moveY + -1 * this._domBCR.top + this._initWindowScroll;
				if (this.moveY >= 10 && minMoveThreshold >= this.refs.header.offsetHeight) {
					this.startY = e && e.changedTouches[0].clientY;
					this.startX = e && e.changedTouches[0].clientX;
					this.moveHeaderUp();
				} else if (this.moveY <= -5) {
					this.startX = e && e.changedTouches[0].clientX;
					this.startY = e && e.changedTouches[0].clientY;
					this.moveHeaderDown();
				}
			}
		}
	}, {
		key: 'moveHeaderUp',
		value: function moveHeaderUp() {
			if (!this.isHeaderSticky) {
				var move = this.refs.header.offsetHeight - this.state.tabHeight;
				if (move > 0) {
					this.refs.header.style.transform = "translate3d(0," + -move + "px, 0)";
					// this.refs.header.style.transform = 'scaleY(0)';
					this.isHeaderSticky = true;
					var scrollPos = this.refs.header.offsetHeight - this.state.tabHeight;
					this.refs.contents.setScrollForAllItem(true, scrollPos);
				}
			}
			// this.refs.contents.removeScrollListener(this.scrollListener, false);
		}
	}, {
		key: 'moveHeaderDown',
		value: function moveHeaderDown() {
			if (this.isHeaderSticky) {
				this.refs.header.style.transform = "translate3d(0, 0, 0)";
				this.isHeaderSticky = false;
				if (this.props.staticHeader) {
					var scrollPos = this.refs.header.offsetHeight - this.state.tabHeight;
					this.refs.contents.setScrollForAllItem(false, scrollPos);
					this.refs.contents.subscribeScrollListener(this.scrollListener, false);
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var tabData = this.state.tabData,
			    tabs = tabData && tabData.tabs,
			    content = tabData && tabData.contents;
			if (tabData) {
				return _react2.default.createElement(
					'div',
					{ className: _Tabs2.default["tabscontrol"] },
					_react2.default.createElement(
						'div',
						{ ref: 'header', className: (0, _classnames2.default)(_Tabs2.default["headerCtn"], _defineProperty({}, _Tabs2.default["fixed"], this.props.staticHeader)) },
						this.props.header,
						_react2.default.createElement(_TabView2.default, {
							ref: 'tabWidget',
							tabs: tabs,
							activeItemIndex: this.state.activeTabIndex,
							styles: this.props.styles,
							enableTabSliderAnimation: this.props.enableTabSliderAnimation,
							enableInnerScroll: this.props.staticHeader,
							tabChange: this.tabChange,
							touchMovePropageted: this.touchMovePropageted,
							updateHeight: this.updateHeight
						})
					),
					content ? _react2.default.createElement(
						'div',
						{ ref: 'contentsCtn', className: _Tabs2.default["tabcontent"] },
						_react2.default.createElement(_Viewpager2.default, _extends({
							ref: 'contents'
						}, this.props, {
							items: content,
							enableInnerScroll: this.props.staticHeader,
							activeItemIndex: this.state.activeTabIndex,
							selecedIndex: this.state.selecedIndex,
							maxHeight: this.state.contentHeight,
							emptyBoxHeight: this.state.emptyBoxHeight,
							updateTabSliderPosition: this.updateTabsIndicator.bind(this),
							selecedIndexChanged: this.selecedIndexChanged,
							scrollListenerEvent: this.scrollListener,
							touchMove: this.touchMovePropageted
						}))
					) : null
				);
			} else {
				return null;
			}
		}
	}]);

	return TabComponent;
}(_react2.default.Component);

TabComponent.PropTypes = {
	reset: _react2.default.PropTypes.bool,
	initialActiveTab: _react2.default.PropTypes.number,
	staticHeader: _react2.default.PropTypes.bool,
	onChange: _react2.default.PropTypes.func
};

TabComponent.defaultProps = {
	tabData: { tabs: [], contents: [] },
	staticHeader: false,
	tabsEquiSized: true,
	initialActiveTab: 0,
	enableTabSliderAnimation: true,
	enableViepagerAnimation: true,
	resetIndexOnUpdate: false,
	styles: {
		tabSelectedObj: {},
		tabNotSelectedObj: {},
		sliderStyleObj: {},
		tabHeaderStyleObj: {},
		tabHeaderStyleContainerStylebj: {},
		tabSelected: null,
		tabNotSelected: null,
		sliderStyle: null,
		tabHeaderStyle: null,
		tabHeaderStyleContainerStyle: null
	}
};

exports.default = TabComponent;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PassiveListenerCheck = {
   checkPassiveListenerSupport: function checkPassiveListenerSupport() {
      if (this.supportsPassive !== undefined) {
         return this.supportsPassive ? { passive: true } : false;
      }
      // feature detect
      var isSupported = false;
      try {
         document.addEventListener('test', null, {
            get passive() {
               isSupported = true;
            }
         });
      } catch (e) {
         // do nothing
      }
      this.supportsPassive = isSupported;
      return this.checkPassiveListenerSupport();
   }
};

module.exports = PassiveListenerCheck;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

'use-strict';

var _Ripple = __webpack_require__(12);

var _Ripple2 = _interopRequireDefault(_Ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ripple = function ripple(pos, container, rippleColor, animationDuration, isCentered, onRippleAnimationEnd) {
	var _containerRect = container.getBoundingClientRect(),
	    _containerRectWidth = _containerRect.right - _containerRect.left,
	    _containerRectHeight = _containerRect.bottom - _containerRect.top,
	    _shouldAddRippleToContainer = false;

	var oldInk = container.querySelector("." + _Ripple2.default["ripple"]),
	    size = Math.max(_containerRectWidth, _containerRectHeight);

	if (!oldInk) {
		oldInk = document.createElement("div");
		oldInk.classList.add(_Ripple2.default["ripple"]);
		_shouldAddRippleToContainer = true;

		oldInk.style.width = size + "px";
		oldInk.style.height = size + "px";
		oldInk.style.borderRadius = "100%";
	}

	rippleColor && (oldInk.style.background = rippleColor);
	animationDuration && (oldInk.style.animationDuration = animationDuration);

	if (isCentered) {
		// position the ripple at the center of the container
		oldInk.style.left = _containerRectWidth / 2 - size / 2 + "px";
		oldInk.style.top = _containerRectHeight / 2 - size / 2 + "px";
	} else {
		var posX = _containerRect.left + window.pageXOffset - document.documentElement.clientLeft,
		    posY = _containerRect.top + document.body.scrollTop - document.body.clientTop;

		oldInk.style.left = pos.pageX - posX - size / 2 + "px";
		oldInk.style.top = pos.pageY - posY - size / 2 + "px";
	}

	// let _currentOverflow = container.style.overflow;
	// container.style.overflow = 'hidden';
	_shouldAddRippleToContainer && container.appendChild(oldInk);

	oldInk.classList.add(_Ripple2.default["animate"]);

	var onAnimationEnd = function onAnimationEnd() {
		// container.style.overflow = _currentOverflow;
		oldInk.removeEventListener("animationend", onAnimationEnd);
		// oldInk.classList.remove(styles['animate']);
		oldInk.parentNode && oldInk.parentNode.removeChild(oldInk);
		onRippleAnimationEnd && onRippleAnimationEnd.call(null);
	};

	oldInk.addEventListener("animationend", onAnimationEnd);
};
module.exports = ripple;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

'use-strict';

var smoothScroll = {
   interpolate: function interpolate(start, end, point) {
      if (point <= start) {
         return 0;
      }
      if (point >= end) {
         return 1;
      }
      var x = (point - start) / (end - start);
      return x * x * (3 - 2 * x);
   },

   polyfillWindowPerformance: function polyfillWindowPerformance() {
      // standard polyfill by Paul Irish:: https://gist.github.com/paulirish/5438650
      if ("performance" in window === false) {
         window.performance = {};
      }
      // thanks IE8
      Date.now = Date.now || function () {
         return new Date().getTime();
      };
      if ("now" in window.performance === false) {
         var nowOffset = Date.now();
         if (window.performance.timing && window.performance.timing.navigationStart) {
            nowOffset = window.performance.timing.navigationStart;
         }
         window.performance.now = function now() {
            return Date.now() - nowOffset;
         };
      }
   },

   scroll: function scroll(element, position, _duration, onScrollEndCallback) {
      var _this = this;

      // now we are sure to have window.performance.now()
      var duration = _duration || 1,
          scrollContainer = element,
          startLeft = element.scrollLeft,
          startTime = window.performance.now(),
          endTime = startTime + duration,
          destY = position;

      if (Math.abs(startLeft - destY) <= 1) {
         onScrollEndCallback && onScrollEndCallback();
         return;
      }
      var callback = function callback(timestamp) {
         if (timestamp < endTime) {
            requestAnimationFrame(callback);
         }

         var point = _this.interpolate(startTime, endTime, timestamp),
             scrollLeft = Math.round(startLeft + destY * point);
         if (destY <= startLeft) {
            if (destY === 0) {
               destY = element.scrollLeft;
            }
            scrollLeft = Math.abs(Math.round(destY * point - startLeft));
         }
         if (scrollLeft > scrollContainer.scrollWidth - scrollContainer.offsetWidth) {
            scrollLeft = scrollContainer.scrollWidth - scrollContainer.offsetWidth;
         }
         scrollContainer.scrollLeft = scrollLeft;
         if (point === 1 && onScrollEndCallback) {
            onScrollEndCallback();
         }
      };
      callback(startTime);
   }
};
module.exports = smoothScroll;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);