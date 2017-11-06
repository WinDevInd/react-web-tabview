'use-strict';

import styles from "./Styles/Ripple.css";

var ripple = function(pos, container, rippleColor, animationDuration, isCentered, onRippleAnimationEnd) {
	let _containerRect = container.getBoundingClientRect(),
		_containerRectWidth = _containerRect.right - _containerRect.left,
		_containerRectHeight = _containerRect.bottom - _containerRect.top,
		_shouldAddRippleToContainer = false;

	var oldInk = container.querySelector("." + styles["ripple"]),
		size = Math.max(_containerRectWidth, _containerRectHeight);

	if(!oldInk) {
		oldInk = document.createElement("div");
		oldInk.classList.add(styles["ripple"]);
		_shouldAddRippleToContainer = true;

		oldInk.style.width = size + "px";
		oldInk.style.height = size + "px";
		oldInk.style.borderRadius = "100%";
	}

	rippleColor && (oldInk.style.background = rippleColor);
	animationDuration && (oldInk.style.animationDuration = animationDuration);

	if(isCentered) {
		// position the ripple at the center of the container
		oldInk.style.left = _containerRectWidth / 2 - size / 2 + "px";
		oldInk.style.top = _containerRectHeight / 2 - size / 2 + "px";
	} else {
		let posX = _containerRect.left + window.pageXOffset - document.documentElement.clientLeft,
			posY = _containerRect.top + document.body.scrollTop - document.body.clientTop;

		oldInk.style.left = pos.pageX - posX - size / 2 + "px";
		oldInk.style.top = pos.pageY - posY - size / 2 + "px";
	}

	// let _currentOverflow = container.style.overflow;
	// container.style.overflow = 'hidden';
	_shouldAddRippleToContainer && container.appendChild(oldInk);

	oldInk.classList.add(styles["animate"]);

	var onAnimationEnd = () => {
		// container.style.overflow = _currentOverflow;
		oldInk.removeEventListener("animationend", onAnimationEnd);
		// oldInk.classList.remove(styles['animate']);
		oldInk.parentNode && oldInk.parentNode.removeChild(oldInk);
		onRippleAnimationEnd && onRippleAnimationEnd.call(null);
	};

	oldInk.addEventListener("animationend", onAnimationEnd);
};
module.exports = ripple;
