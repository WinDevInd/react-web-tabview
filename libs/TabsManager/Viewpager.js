import React from "react";
import styles from './ViewPager.css';
import shallowEqual from '../Utils/shallowEqual';
import cx from "classnames";
import PassiveListenerCheck from '../Utils/PassiveListenerCheck.js';
import throttle from 'lodash.throttle';

//// let's keep it 0 for now, will be enhanced in next release.
const ITEM_MARGIN = 0;
const MIN_MOVEX = 50;

class ViewPager extends React.Component{
	constructor(props){
		super(props);
		this._passiveSupported = PassiveListenerCheck.checkPassiveListenerSupport();
		this.onTouchStart = this.onTouchStart.bind(this);
		this.onTouchEnd = this.onTouchEnd.bind(this);
		this.onTouchMove = this.onTouchMove.bind(this);
		this.updateHeight = this.updateHeight.bind(this);
		this.subscribeScrollListener = this.subscribeScrollListener.bind(this);
		this.removeScrollListener = this.removeScrollListener.bind(this);
		this.getScrollDataObject = this.getScrollDataObject.bind(this);
		this.scrollListener = this.scrollListener.bind(this);
		this.setScrollForAllItem = this.setScrollForAllItem.bind(this);
		this.moveHappend = false;
		this.throttledScroll = throttle(this.scrollListener, 200);
		this.state = {
			itemWidth: window.innerWidth,
			itemHeight: window.innerHeight,
			initialActiveTab: props.activeItemIndex,
			activeItemIndex: props.activeItemIndex
		};
	}

	getItemsList() {
		let itemStyle = {
			position: 'relative',
			width: this.state.itemWidth,
			maxHeight: this.props.staticHeader ? this.props.maxHeight : 'auto',
			overflowY: this.props.staticHeader ? 'auto' : 'hidden'
		};
		let paddingStyle = {
			height: this.props.emptyBoxHeight,
			position: 'relative'
		};
		return this.props.items.map((item, idx) => {
			item.size = this.state.itemWidth;
			item.height = this.props.contentHeight + this.props.emptyBoxHeight;
			return <div ref={'listitem' + idx} className={styles['product-item']} key={idx} style={itemStyle}>
				<div style={paddingStyle} />
				{item}
			</div>;
		});
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			initialActiveTab: nextProps.activeItemIndex,
			activeItemIndex: nextProps.activeItemIndex
		});
	}

	componentDidMount(){
		this.refs.list.addEventListener("touchmove", this.onTouchMove, this._passiveSupported);
		this.refs.list.addEventListener("touchstart", this.onTouchStart, this._passiveSupported);
		this.refs.list.addEventListener("touchend", this.onTouchEnd, this._passiveSupported);
	}

	componentWillUnmount(){
		window.ScrollUtil.removeScrollListener(this.scrollListener);
		this.refs.list.removeEventListener("touchmove", this.onTouchMove);
		this.refs.list.removeEventListener("touchstart", this.onTouchStart);
		this.refs.list.removeEventListener("touchend", this.onTouchEnd);
	}

	scrollListener(e){
		e.scrollY = e.target.scrollTop;
		this.props.scrollListenerEvent(e);
	}

	subscribeScrollListener(needScrollObject = true){
		if(this.props.staticHeader) {
			let item = this.refs['listitem' + this.state.activeItemIndex];
			// window.ScrollUtil.addScrollListener(this.scrollListener.bind(this));
			item.addEventListener('scroll', this.throttledScroll);
			if(needScrollObject){
				return this.getScrollDataObject();
			}
		}
	}

	getScrollDataObject(){
		let _shouldMeasureBCR = false,
			_domBCR = this.refs['listitem' + this.state.activeItemIndex].getBoundingClientRect(),
			_initWindowScroll = this.refs['listitem' + this.state.activeItemIndex].scrollTop;
		return {
			shouldMeasureBCR: _shouldMeasureBCR,
			initWindowScroll: _initWindowScroll,
			domBCR: _domBCR
		};
	}
	removeScrollListener(){
		let item = this.refs['listitem' + this.state.activeItemIndex];
		item.removeEventListener('scroll', this.throttledScroll);
	}

	updateHeight(height){
		this.setState({
			itemHeight: height
		});
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !shallowEqual(this.state, nextState) ||
		!shallowEqual(this.props, nextProps);
	}

	getItemsListWidth() {
		if(!this.state.itemWidth) {
			return 0;
		}
		let _w = this.state.itemWidth, _count = this.props.items.length;
		return (_w * _count) + ((_count + 1) * ITEM_MARGIN);
	}

	onTouchStart(e) {
		this.startX = this.moveX = null;
		this.startX = e.touches[0]['clientX'];
		this.startY = e.touches[0]['clientY'];
		this.props.touchStartY && this.props.touchStartY(e);
		this.refs.list.classList.remove(styles['isAnimatable']);
	}

	onTouchMove(e) {
		if(!this.startX || !this.startY) {
			return;
		}
		let currentX = e.touches[0]['clientX'];
		this.moveX = currentX - this.startX;
		this.moveY = e.touches[0]['clientY'] - this.startY;
		let item = this.refs['listitem' + this.state.activeItemIndex];
		if(!this.isMovementWithinBounds()) {
			this.props.touchMoveY && this.props.touchMoveY(e);
			this.refs.list.removeEventListener("touchmove", this.onTouchMove, this._passiveSupported);
			return true;
		} else if(!this.noVScrollSet) {
			window.requestAnimationFrame(()=>{
			// stop scroll while moving horizontally
				item.style.overflowY = ' hidden';
				document.body.style.overflowY = 'hidden';
				this.noVScrollSet = true;
			});
			e.stopPropagation && e.stopPropagation();
			this.noVScroll = true;
		}

		if(Math.abs(this.moveY) < Math.abs(this.moveX)) {
			this.moveHappend = true;
			if(this.props.enableViepagerAnimation){
				let transformValue = this.getListTransformValue();
				// e.currentTarget.style.willChange = 'transform';
				e.currentTarget.style.transform = `translate3d(${transformValue + this.moveX}px, 0, 0) scale(1.0, 1.0)`;
				// e.currentTarget.style.webkitTransform = `translate3d(${this.getListTransformValue() + this.moveX}px, 0, 0)`;
				this.props.touchMove && this.props.touchMove(this.moveX, (2 * ITEM_MARGIN) + item.offsetWidth, this.state.activeItemIndex);
			}
		}
	}

	onTouchEnd(e) {
		// console.log('touch end');
		this.startX = null;
		let moveHappend = this.moveHappend;
		this.moveHappend = false;
		this.refs.list.classList.add(styles['isAnimatable']);

		this.refs.list.style.transform = `translate3d(${this.getListTransformValue()}px, 0, 0) scale(1.0, 1.0)`;
		// this.refs.list.style.willChange = 'initial';
		let finalIndex = this.determineFinalActiveIdx(moveHappend);
		this.refs.list.addEventListener("touchmove", this.onTouchMove, this._passiveSupported);
		if(this.noVScrollSet){
			let item = this.refs['listitem' + this.state.activeItemIndex];
			item.style.overflowY = 'auto';
			document.body.style.overflowY = "visible";
		}
		this.noVScrollSet = false;

		this.props.updateTabSliderPosition && this.props.updateTabSliderPosition(this.state.activeItemIndex);

		if(finalIndex !== this.state.activeItemIndex){
			this.refs['listitem' + finalIndex].addEventListener("scroll", this.scrollListener);
			this.refs['listitem' + this.state.activeItemIndex].removeEventListener("scroll", this.scrollListener);
			this.props.selecedIndexChanged && this.props.selecedIndexChanged(this.moveX, this.startX, finalIndex);
		}
		this.props.touchEndY && this.props.touchEndY(e);
		this.setState({
			activeItemIndex: finalIndex
		});
	}

	setScrollForAllItem(top = true, emptyBoxHeight){
		for(let i = 0; i < this.props.items.length; i++){
			let item = this.refs['listitem' + i];
			if(top){
				if(item.scrollTop < emptyBoxHeight){
					item.scrollTop = emptyBoxHeight - item.scrollTop;
				}
			} else {
				if(item.scrollTop > emptyBoxHeight){
					item.scrollTop -= emptyBoxHeight;
				} else {
					item.scrollTop = 0;
				}
			}
		}
	}

	isMovementWithinBounds(){
		let _length = this.props.items.length;
		let _w = this.state.itemWidth;
		let _currTX = this.getListTransformValue();
		let _minX = -(((_length - 1) * _w) + ((_length - 2) * ITEM_MARGIN));
		let horizontalMovement = Math.abs(this.moveX) > Math.abs(this.moveY);
		if(horizontalMovement && _currTX + this.moveX <= 0 && _currTX + this.moveX >= _minX) {
			return true;
		}
		return false;
	}

	determineFinalActiveIdx(moveHappend) {
		let MAX_IDX = this.props.items.length - 1, MIN_IDX = 0, direction = this.moveX > 0,
			finalIndex = 0;
		// console.log(Math.abs(this.moveY) + " -- " + Math.abs(this.moveX));
		if(Math.abs(this.moveX) < MIN_MOVEX || !moveHappend) {
			return this.state.activeItemIndex;
		}

		if(direction) {
         // moved to right
			if(this.state.activeItemIndex > MIN_IDX) {
				finalIndex = this.state.activeItemIndex - 1;
			}
			else {
				finalIndex = MIN_IDX;
			}
		}
		else {
         // moved to left
			if(this.state.activeItemIndex < MAX_IDX) {
				finalIndex = this.state.activeItemIndex + 1;
			}
			else {
				finalIndex = MAX_IDX;
			}
		}
		return finalIndex;
	}

	getListTransformValue() {
		if(!this.state.itemWidth || !this.state.activeItemIndex) {
			return 0;
		}
		else if(this.state.activeItemIndex === this.props.items.length - 1) {
			return -((this.state.itemWidth * this.state.activeItemIndex) + ((this.state.activeItemIndex - 1) * ITEM_MARGIN)) + ITEM_MARGIN;
		}
		else {
         // 352 + (n-1)*ITEM_MARGIN;
			return -((this.state.itemWidth * this.state.activeItemIndex) + ((this.state.activeItemIndex - 1) * ITEM_MARGIN));
		}
	}

	getListTransformString() {
		let _dX = this.getListTransformValue();
		this.props.updateTabSliderPosition &&
		this.props.updateTabSliderPosition(this.state.activeItemIndex);
		return `translate3d(${_dX}px, 0, 0) scale(1.0, 1.0)`;
	}
	getContaineStyle(){
		let style = {
			overflowX: 'hidden',
			overflowY: this.props.staticHeader ? 'auto' : 'hidden'
		};
		return style;
	}

	render() {
		return <div className={styles['swipeable-products']}>
			<div ref='itemContainer' style={this.getContaineStyle()} className={styles['products-ctn']}>
				<div
					className={cx(styles['products-list'])}
					style={{ width: this.getItemsListWidth(), transform: this.getListTransformString()}}
					ref='list'>
					{
					this.state.itemWidth && this.getItemsList()
					}
				</div>
			</div>
		</div>;
	}
}

export default ViewPager;

ViewPager.defaultProps = {
	items: []
};
