'use strict';

class Sprite {
	constructor(options) {
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

	update() {
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
						this.x =  this.x + (this.width / this.numberOfFrames)
					}
				} else {
					//!!!!!!!!!!!!!!!!!!
					//this.pause = true;
					 this.rowIndex = 1;
					 this.x = 0;
					 this.y+= this.height;

					// console.log('E this.x',this.x);
					// console.log('E this.y',this.y);
					// console.log('E this.frameIndex',this.frameIndex);
					// console.log('E this.rowIndex',this.rowIndex);
				}
			} else {
				this.pause = true;

				// this.rowIndex = 0;
				// this.x = 0;
				// this.y = 0;

			}
		}
	}

	setCanvasSize() {
		let wrapOffsetWidth = document.getElementById('js-canvas-wrap').offsetWidth;
		let wrapOffsetHeight = document.getElementById('js-canvas-wrap').offsetHeight;

		this.wWrap = this.canvas.width = Math.min(wrapOffsetWidth, wrapOffsetHeight);
		this.hWrap = this.canvas.height = Math.min(wrapOffsetWidth, wrapOffsetHeight);
	}

	render() {
		this.setCanvasSize();

		this.ctx.clearRect(0, 0, this.width / this.numberOfFrames, this.height);
		//this.ctx.drawImage(this.image, 0, 0);

		this.ctx.drawImage(
			this.image,
			this.x , //this.frameIndex * this.width / this.numberOfFrames, //x
			this.y , //y
			this.width / this.numberOfFrames,
			this.height,
			0,
			0,
			Math.min(this.wframe, this.wWrap),
			Math.min(this.wframe, this.hWrap),
			//(window.innerWidth > this.wframe) ? this.wframe : window.innerWidth, //this.width / this.numberOfFrames * 0.2,
			//(window.innerWidth > this.wframe) ? this.wframe : window.innerWidth //this.height * 0.2
		)
	}

	drawLastImg() {
		console.log('drawLastImg');
		ctx.clearRect(0, 0, this.width / this.numberOfFrames, this.height);

		ctx.drawImage(
			this.image,
			3 * (this.width / this.numberOfFrames),
			7 * this.height,
			this.width / this.numberOfFrames,
			this.height,
			0,
			0,
			this.width / this.numberOfFrames,
			this.height
		)
	}

	start() {
		let loop = () => {
			if(this.pause) return;

			this.update();
			this.render();

			window.requestAnimationFrame(loop);
		}

		window.requestAnimationFrame(loop);

		window.addEventListener('resize', () => {

			// this.canvas.width = this.width / this.numberOfFrames;
			// this.canvas.height = this.height;

			// this.canvas.width = Math.min(this.width / this.numberOfFrames / 8, window.innerWidth);
			// this.canvas.height = Math.min(coinImage.height / 8, window.innerHeight);



			///!!!!!!!!!!
			// this.canvas.width = window.innerWidth;
			// this.canvas.height = window.innerHeight;

			// this.canvas.width = (window.innerWidth > 620) ? 620 : window.innerWidth;
			// this.canvas.height = (window.innerWidth > 620) ? 620 : window.innerWidth;

			this.setCanvasSize();

			this.ctx.drawImage(
				this.image,
				9 * (this.width / this.numberOfFrames),
				5 * this.height,
				this.width / this.numberOfFrames,
				this.height,
				0,
				0,
				Math.min(this.wframe, this.wWrap), //this.width / this.numberOfFrames,
				Math.min(this.wframe, this.hWrap)  //this.height
			);


			// this.canvas.width = window.innerWidth;
			// this.canvas.height = window.innerHeight;

			console.log('addEventListener');

			// this.drawLastImg();

		});
	}
}

let canvas = document.getElementById('canvas');

//!!!!
// let w = canvas.width = window.innerWidth;
// let h = canvas.height = window.innerHeight;
//620
let wframe = 1000;
let hframe = 1000;
let lineCountFrame = 6;
let w = canvas.width = (window.innerWidth > wframe) ? wframe : window.innerWidth;
let h = canvas.height = (window.innerWidth > hframe) ? hframe : window.innerWidth;


let numberOfFrames = 8;
let ctx = canvas.getContext('2d');

let coinImage = new Image();
// coinImage.src = 'https://www.cat-in-web.ru/wp-content/uploads/coin-sprite-animation.png';
//coinImage.src = 'img/600.png';
coinImage.src = 'img/sprite-min-10-6.png';

coinImage.onload = function() {
	console.log('naturalWidth', coinImage.naturalWidth);
	// canvas.width = coinImage.naturalWidth;
	// canvas.height = coinImage.naturalHeight;

	//ctx.drawImage(coinImage, 10, 10);

	startAnimation();
}


canvas.addEventListener('click', (e) => {
	startAnimation();
});

// function getRatio(img){
// 	var hRatio = w / img.width;
// 	var vRatio = h / img.height;
// 	var ratio = Math.min(hRatio, vRatio);
// 	return ratio;
// }



function startAnimation() {
	let sprite = new Sprite({
		canvas: canvas,
		ctx: ctx,
		image: coinImage,
		width: coinImage.naturalWidth,
		height: coinImage.naturalHeight / lineCountFrame,
		naturalHeight: coinImage.naturalHeight,
		numberOfFrames: 10,
		ticksPerFrame: 1,
		lineCount: lineCountFrame,
		countSprite: 60,
		wframe: wframe,
		hframe: hframe,
	})
}


//word
const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});

	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});





// click event
$('.btn-round').on('click', function(e) {
	console.log(e.currentTarget);
	explode(e.pageX, e.pageY, $(this));
});


// symbols
function explode(x, y, btn) {

	var symbolArray = [
		'#circle',
		'#circle-light',
		'#square',
		'#square-light',
	];

	var particles = 10,
		explosion = btn.find('.btn-round__wrap');
	console.log(explosion.width());
	console.log(explosion.height());

	for (var i = 0; i < particles; i++) {

		var randomSymbol = Math.floor(Math.random()*symbolArray.length);
		// positioning x,y of the particles
		var x = (explosion.width() / 2) + rand(80, 150) * Math.cos(2 * Math.PI * i / rand(particles - 10, particles + 10)),
			y = (explosion.height() / 2) + rand(80, 150) * Math.sin(2 * Math.PI * i / rand(particles - 10, particles + 10)),
			deg = rand(0, 360) + 'deg',
			scale = rand(0.5, 1.1),
			// particle element creation
			elm = $(
				'<svg class="Symbol" style="top:' + y + 'px; left:' + x + 'px; transform: scale(' + scale + ') rotate(' + deg + ');">' +
				'<use xlink:href="' + symbolArray[randomSymbol] + '" />' +
				'</svg>'
			);

		if (i == 0) { // only need to target one of the symbols.
			// css3 animation end detection
			elm.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
				elm.siblings('svg').remove().end().remove(); // remove particles when animation is over.
			});
		}
		explosion.prepend(elm);
	}
}

function rand(min, max) {
	return Math.floor(Math.random() * (max + 1)) + min;
}
