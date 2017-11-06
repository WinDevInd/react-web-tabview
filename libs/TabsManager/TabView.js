import React from "react";
import styles from './Tabview.css';
import cx from "classnames";
import shallowEqual from '../Utils/shallowEqual';
import Ripple from "../Utils/ripple";
import SmoothScrollX from "../Utils/smoothScrollX";

class TabView extends React.Component {
	constructor(props) {
		super(props);
		this.viewPagerHeight = window.innerHeight;
		this.updateSliderPosition = this.updateSliderPosition.bind(this);
		this.touchMovePropageted = this.touchMovePropageted.bind(this);
		this.lastMoveX = 0;
		this.selectedIndex = 0;
		this.canMoveSlider = true;
		this.canScrollHeader = true;
		this.lastScrollPosition = 0;
	}

	componentDidUpdate(){
		this.measureHeaderHeight(this.props);
	}

	shouldComponentUpdate(nextProps) {
		let shouldComponentUpdate = !shallowEqual(this.props, nextProps);
		return shouldComponentUpdate;
	}

	measureHeaderHeight(props){
		if(this.props.enableInnerScroll){
			const measureHeight = () => {
				let _p = this.refs.headerCtn, _height = _p && _p.offsetHeight;
				if(_height) {
					if(this.viewPagerHeight !== _height){
						this.viewPagerHeight = _height;
						props.updateHeight && props.updateHeight(_height);
					}
				} else {
					this.rafId = window.requestAnimationFrame(() => {
						measureHeight();
					});
				}
			};
			measureHeight();
		}
	}

	tabChange(index, tabItem, e){
		Ripple(e, e.currentTarget, 'rgba(0,0,0,0.3)', '0.35s', true, this.tabChangeAnimate(index, tabItem));
	}

	tabChangeAnimate(index, tabItem){
		this.canScrollHeader = true;
		this.props.tabChange && this.props.tabChange(index, tabItem);
	}

	animateFromIndex(index){
		let moveX = 0;
		for(let i = 0; i !== index; i++) {
			moveX += this.refs && this.refs['tabItem' + i] && this.refs['tabItem' + i].offsetWidth || 0;
		}
		return moveX;
	}

	/* not being used as of now */
	touchMovePropageted(move, viewWidth, index) {
		let slider = this.refs.slider;
		this.rafId = window.requestAnimationFrame(() => {
			if(slider && this.canMoveSlider) {
				this.shouldUpdateScrollPosition = true;
				let currentTarget = this.refs['tabItem' + index];
				move = move * -1;
				let sliderScrollX = this.lastMoveX + (move / viewWidth * 100);
				let scaleX = 0;
				scaleX = currentTarget.offsetWidth || 1;
				slider.style.cssText = "transform-origin: 0px 0px 0px; " +
					"transform:translate3d(" + sliderScrollX + "px , 0, 0) scaleX(" + scaleX + ")";
				this.scrollIntoView(scaleX, sliderScrollX, index);
			}
		});
	}

	scrollIntoView(scaleX, sliderScrollX, index){
		let nextItemIndex = sliderScrollX > this.lastMoveX ? index + 1 : index - 1;
		// let nextItemWidth = this.refs['tabItem' + nextItemIndex].offsetWidth;
		let scrollThreshold = sliderScrollX > this.lastMoveX ?
			this.lastMoveX + scaleX * 0.40 : this.lastMoveX - scaleX * 0.40 ;
		if(this.props.enableTabSliderAnimation && this.canScrollHeader) {
			if(sliderScrollX > scrollThreshold && sliderScrollX > this.lastMoveX) {
				this.SmoothScrollX(400, nextItemIndex);
				this.canScrollHeader = false;
			} else if(sliderScrollX < this.lastMoveX && sliderScrollX < scrollThreshold){
				this.SmoothScrollX(400, nextItemIndex);
				this.canScrollHeader = false;
			}
		}
	}

	updateSliderPosition(index, duration = 300){
		if(!this.refs.slider){
			return;
		}
		this.canMoveSlider = false;
		let canUpdateScroll = index !== this.selectedIndex;
		this.updateSlider(index);
		if((canUpdateScroll && this.canScrollHeader) || !this.props.enableTabSliderAnimation) {
			this.SmoothScrollX(duration, index);
		}
		this.canScrollHeader = true;
	}

	updateSlider(index) {
		this.rafId && window.cancelAnimationFrame(this.rafId);
		this.selectedIndex = index;
		let moveX = this.lastMoveX;
		let scaleX = 0;
		switch(index){
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
		let transformStyle = "transform: translate3d(" + moveX + "px , 0, 0) scaleX(" + scaleX + ");" +
		"transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)";
		this.refs.slider.style.cssText += transformStyle;
		setTimeout(()=>{
			this.canMoveSlider = true;
		}, 300);
	}

	SmoothScrollX(duration, index){
		let scrollAmount = this.scrollTabCtnWithMove(index);
		let scroll = this._normalizeScrollValue(scrollAmount);
		let header = this.refs.headerCtn;
		if(this.lastScrollPosition === scroll / 2){
			return;
		}
		this.lastScrollPosition = scroll / 2;
		SmoothScrollX.scroll(header, scroll / 2, duration);
		setTimeout(() => {
			// this.lastScrollPosition = header.scrollLeft;
		}, duration);
	}

	scrollTabCtnWithMove(nextItemIndex) {
		let header = this.refs.headerCtn;
		let finalTabWidth = this.refs['tabItem' + nextItemIndex] && this.refs['tabItem' + nextItemIndex].offsetWidth || 0;
		let centerDistance = finalTabWidth * nextItemIndex + finalTabWidth / 2;
		let scrollAmount = centerDistance - (header.offsetWidth / 2);
		return scrollAmount;

	}
	_normalizeScrollValue(value) {
		const maxDistance = this.refs.headerCtn.scrollWidth;
		return Math.max(Math.min(value, maxDistance), 0);
	}

	render() {
		let tabs = this.props.tabs;
		let _tabHeaderLength = tabs && tabs.length && 1 / tabs.length * 100;

		// Javascript Style object
		let tabStyleObj = this.props.tabsEquiSized ? { width: _tabHeaderLength + "%" } : { padding: "15px 20px" };
		let selectedStyleObj = Object.assign({}, tabStyleObj, this.props.styles.tabSelectedObj);
		let notSelectedStyleObj = Object.assign({}, tabStyleObj, this.props.styles.tabNotSelectedObj);

		// CSS style
		let tabStyle = styles['tabheader'];
		let selectedStyle = cx(tabStyle, this.props.styles.tabSelected);
		let notSelectedStyle = cx(tabStyle, this.props.styles.tabNotSelected);

		return tabs && tabs.length > 0 ?
			<div ref='headerCtn' className={cx(styles["tabHeaderContainer"], this.props.styles.tabHeaderStyle)}
				style={this.props.styles.tabHeaderContainerStyleObj}>
				<ul ref='tabHeader'
					className={cx(styles["tabheaders"])}
					onTouchMove={this.touchMove}
					onTouchEnd={this.touchEnd}
					onTouchStart={this.touchStart}
					data-aid="TabHeadersContainer">
					{tabs.map((tabItem, index) => {
						return (
							<li
								ref={"tabItem" + index}
								className={this.props.activeItemIndex === index ? selectedStyle : notSelectedStyle}
								onClick={this.tabChange.bind(this, index, tabItem || null)}
								style={this.props.activeItemIndex === index ? selectedStyleObj : notSelectedStyleObj}
								key={"tabheader" + index}
								data-aid={"tabheader_" + index}>
								{tabItem.view || null}
							</li>
						);
					})}
				</ul>
				<div ref='slider' className={cx(styles["tabslider"], this.props.styles.sliderStyle)} style={this.props.styles.sliderStyleObj}/>
			</div> : null;
	}


}
export default TabView;
