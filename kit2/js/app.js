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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sprite = __webpack_require__(1);

var _sprite2 = _interopRequireDefault(_sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {rand} from './rand.js';
// import {explode} from './explode.js';

var canvas = document.getElementById('canvas');
console.log('canvas', canvas);

if (canvas) {
	var coinImage = new Image();
	//coinImage.src = 'img/sprite-min-10-6.png';
	coinImage.src = 'img/sprite-min-10-6_8.jpg';
	//coinImage.src = 'https://res.cloudinary.com/dq05sgay4/image/upload/v1580669889/samples/sprite-min-10-6_nlm2uy.png';

	coinImage.onload = function () {
		startAnimation(canvas, coinImage);
	};

	canvas.addEventListener('click', function (e) {
		startAnimation(canvas, coinImage);
	});
}

function startAnimation(canvas, coinImage) {
	var wframe = 1000;
	var hframe = 1000;
	var lineCountFrame = 5; //6
	var ctx = canvas.getContext('2d');

	var sprite = new _sprite2.default({
		canvas: canvas,
		ctx: ctx,
		image: coinImage,
		width: coinImage.naturalWidth,
		height: coinImage.naturalHeight / lineCountFrame,
		naturalHeight: coinImage.naturalHeight,
		numberOfFrames: 10,
		ticksPerFrame: 1,
		lineCount: lineCountFrame,
		countSprite: 50, //60
		wframe: wframe,
		hframe: hframe
	});
}

// //word
// const spans = document.querySelectorAll('.word span');
//
// spans.forEach((span, idx) => {
// 	span.addEventListener('click', (e) => {
// 		e.target.classList.add('active');
// 	});
// 	span.addEventListener('animationend', (e) => {
// 		e.target.classList.remove('active');
// 	});
//
// 	// Initial animation
// 	setTimeout(() => {
// 		span.classList.add('active');
// 	}, 750 * (idx+1))
// });


// click event
// $('.btn-round').on('click', function(e) {
// 	console.log('click btn! ');
// 	explode(e.pageX, e.pageY, $(this));
// });


//Accordion
var acc = document.getElementsByClassName("js-accordion-panel");
var i = void 0;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.getElementsByClassName('js-accordion-descr'); //this.nextElementSibling;

		console.log('panel', panel);
		console.log('panel.style', panel.style);

		// if (panel.style.maxHeight) {
		// 	panel.style.maxHeight = null;
		// } else {
		// 	panel.style.maxHeight = panel.scrollHeight + "px";
		// }
	});
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sprite = function () {
    function Sprite(options) {
        _classCallCheck(this, Sprite);

        this.canvas = options.canvas;
        this.ctx = options.ctx;
        this.image = options.image;
        this.frameIndex = 1;
        this.rowIndex = 1;
        this.tickCount = 0;
        this.ticksPerFrame = options.ticksPerFrame || 0;
        this.numberOfFrames = options.numberOfFrames || 1;

        this.width = options.width;
        this.height = options.height;
        this.wframe = options.wframe;
        this.hframe = options.hframe;
        this.wWrap = options.wframe;
        this.hWrap = options.hframe;

        this.x = 0;
        this.y = 0;

        this.naturalHeight = options.naturalHeight;
        this.pause = false;

        this.lineCount = options.lineCount || 1;

        this.countSprite = options.countSprite;

        this.start();
    }

    _createClass(Sprite, [{
        key: 'update',
        value: function update() {
            this.tickCount++;

            if (this.tickCount > this.ticksPerFrame) {
                this.tickCount = 0;

                if (this.frameIndex < this.countSprite) {
                    this.frameIndex++;

                    if (this.rowIndex < this.numberOfFrames) {
                        this.rowIndex++;

                        if (this.x >= this.width) {
                            this.x = 0;
                        } else {
                            this.x = this.x + this.width / this.numberOfFrames;
                        }
                    } else {
                        this.rowIndex = 1;
                        this.x = 0;
                        this.y += this.height;
                    }
                } else {
                    this.pause = true;
                    // this.rowIndex = 0;
                    // this.x = 0;
                    // this.y = 0;
                }
            }
        }
    }, {
        key: 'setCanvasSize',
        value: function setCanvasSize() {
            var wrapOffsetWidth = document.getElementById('js-canvas-wrap').offsetWidth;
            var wrapOffsetHeight = document.getElementById('js-canvas-wrap').offsetHeight;

            this.wWrap = this.canvas.width = Math.min(wrapOffsetWidth, wrapOffsetHeight);
            this.hWrap = this.canvas.height = Math.min(wrapOffsetWidth, wrapOffsetHeight);
        }
    }, {
        key: 'render',
        value: function render() {
            this.setCanvasSize();

            this.ctx.clearRect(0, 0, this.width / this.numberOfFrames, this.height);

            this.ctx.drawImage(this.image, this.x, //this.frameIndex * this.width / this.numberOfFrames, //x
            this.y, //y
            this.width / this.numberOfFrames, this.height, 0, 0, Math.min(this.wframe, this.wWrap), Math.min(this.wframe, this.hWrap));
        }
    }, {
        key: 'drawLastImg',
        value: function drawLastImg() {
            this.setCanvasSize();

            console.log('iii', this.lineCount);

            this.ctx.drawImage(this.image, 9 * (this.width / this.numberOfFrames), (this.lineCount - 1) * this.height, //5
            this.width / this.numberOfFrames, this.height, 0, 0, Math.min(this.wframe, this.wWrap), //this.width / this.numberOfFrames,
            Math.min(this.wframe, this.hWrap) //this.height
            );
        }
    }, {
        key: 'start',
        value: function start() {
            var _this = this;

            var loop = function loop() {
                if (_this.pause) return;

                _this.update();
                _this.render();

                window.requestAnimationFrame(loop);
            };

            window.requestAnimationFrame(loop);

            window.addEventListener('resize', function () {
                _this.drawLastImg();
            });

            window.addEventListener('orientationchange', function () {
                _this.drawLastImg();
            });
        }
    }]);

    return Sprite;
}();

exports.default = Sprite;

/***/ })
/******/ ]);