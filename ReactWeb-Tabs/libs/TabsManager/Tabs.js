import React from "react";
import styles from "./TabComponent.css";
import ViewPager from "./Viewpager";
import cx from "classnames";
import shallowEqual from "../Utils/shallowEqual";
import TabWidget from "./TabView";

/* method to calculate inertia
var dragOutOfBoundsMultiplier = function(val, multiplier = 1) {
	return (0.000005 * Math.pow(val, 2) + 0.0001 * val + 0.55) * multiplier;
}; */
const scrollThreshold = 40;
class TabComponent extends React.Component {
	constructor(props) {
		super(props);
		this._timeout = null;
		let activeTab = props.initialActiveTab || 0;
		this.state = {
			tabData: {tabs: [], contents:[]},
			initialActiveTab: activeTab,
			activeTabIndex: activeTab,
			contentHeight: window.innerHeight,
			selecedIndex: -1
		};

		this.selecedIndexChanged = this.selecedIndexChanged.bind(this);
		this.updateHeight = this.updateHeight.bind(this);
		this.constructTabs = this.constructTabs.bind(this);
		this.initialize = this.initialize.bind(this);
		this.tabChange = this.tabChange.bind(this);
		this.updateTabsIndicator = this.updateTabsIndicator.bind(this);

		this.selecedIndexChangedEventListener = this.selecedIndexChangedEventListener.bind(this);
		this.scrollListener = this.scrollListener.bind(this);
		this.touchMovePropageted = this.touchMovePropageted.bind(this);
	}

	componentDidMount() {
		this.initialize(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.initialize(nextProps);
	}

	initialize(props){
		let tabData = this.constructTabs(props);
		let activeTab = !props.reset ?
		this.state.activeTabIndex : props.initialActiveTab;
		this.setState({
			tabData: tabData,
			initialActiveTab: props.initialActiveTab || 0,
			activeTabIndex: activeTab
		}, ()=>{
			if(this.props.staticHeader){
				this.setInitialScrollData();
				this.refs.contents.subscribeScrollListener(this.scrollListener, false);
			}
		});
	}

	setInitialScrollData(){
		let scrollDataObject = this.refs.contents.getScrollDataObject();
		this._shouldMeasureBCR = scrollDataObject.shouldMeasureBCR;
		this._initWindowScroll = scrollDataObject.initWindowScroll;
		if(this.isHeaderSticky){
			this._initWindowScroll -= this.refs.header.offsetHeight - this.state.tabHeight;
		}
		this._domBCR = scrollDataObject.domBCR;
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !shallowEqual(this.state, nextState);
	}

	updateHeight(tabHeight) {
		let paddingBoxHeight = this.refs.header.offsetHeight;
		let contentHeight = window.innerHeight;
		if(this.state.contentHeight !== contentHeight || paddingBoxHeight !== this.state.emptyBoxHeight) {
			this.setState({
				contentHeight: contentHeight,
				emptyBoxHeight: paddingBoxHeight,
				tabHeight: tabHeight
			});
		}
	}

	// not using as of now
	touchMovePropageted(move, itemWidth, index){
		this.refs.tabWidget.touchMovePropageted(move, itemWidth, index);
	}

	selecedIndexChanged(moveX, startX, selecedIndex) {
		let tabData = this.constructTabs(this.props, selecedIndex);
		this.refs.contents.removeScrollListener(this.scrollListener, false);
		if(this.state.activeTabIndex !== selecedIndex){
			this.setState({
				tabData: tabData,
				activeTabIndex: selecedIndex
			}, ()=>{
				this._shouldMeasureBCR = true;
				this.refs.contents.subscribeScrollListener(this.scrollListener, false);
				this.selecedIndexChangedEventListener(selecedIndex);
			});
		}
	}

	tabChange(index) {
		this.setState({
			activeTabIndex: index
		}, ()=>{
			this.selecedIndexChangedEventListener(index);
		});
	}

	selecedIndexChangedEventListener(index){
		let tabData = this.state.tabData;
		if(tabData && tabData.tabs && tabData.tabs.length){
			let tab = tabData.tabs[index],
				content = tabData.contents[index];
			this.props.onSelectedIndexChanged &&
			this.props.onSelectedIndexChanged(tab, content, index);
		}
	}

	updateTabsIndicator(index, duration = 300){
		this.refs.tabWidget && this.refs.tabWidget.updateSliderPosition &&
			this.refs.tabWidget.updateSliderPosition(index, duration);
	}

	constructTabs(props, selectedIndex = props.initialActiveTab) {
		let _tabHeaders = [],
			_tabContents = [];
		props.tabsData.map((tab, index) => {
			// tab = tab[0];
			if(tab && tab.tabHeader) {
				let header = tab.tabHeader,
					content = tab.tabContent;

				if(!header || !content) {
					throw new Error("invalid tab format. header or content block is not defined.");
				}
				if(header && content.props.children) {
					let _header;
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

	scrollListener(e) {
		let _windowScroll = e.scrollY;
		let scrollMovement = this.refs.header.offsetHeight - this.state.tabHeight;
		if(this._shouldMeasureBCR) {
			this.setInitialScrollData();
		}
		let throsholdValue = _windowScroll - this._initWindowScroll - this._domBCR.top;
		if(throsholdValue >= scrollMovement) {
			this.moveHeaderUp();
		} else if(throsholdValue < scrollMovement + scrollThreshold) {
			this.moveHeaderDown();
		}
		this.props.scrollChangedEventListener && this.props.scrollChangedEventListener(e);
	}

	animateHeader(e) {
		if(this.props.staticHeader && this.props.header &&
			this.refs.contentsCtn.offsetHeight >= window.innerHeight) {
			let minMoveThreshold = this.moveY + (-1) * this._domBCR.top + this._initWindowScroll;
			if(this.moveY >= 10 && minMoveThreshold >= this.refs.header.offsetHeight) {
				this.startY = e && e.changedTouches[0].clientY;
				this.startX = e && e.changedTouches[0].clientX;
				this.moveHeaderUp();
			}
			else if(this.moveY <= -5) {
				this.startX = e && e.changedTouches[0].clientX;
				this.startY = e && e.changedTouches[0].clientY;
				this.moveHeaderDown();
			}
		}
	}

	moveHeaderUp(){
		if(!this.isHeaderSticky) {
			let move = (this.refs.header.offsetHeight - this.state.tabHeight);
			if(move > 0) {
				this.refs.header.style.transform = 'translate3d(0,' + (-move) + 'px, 0)';
				// this.refs.header.style.transform = 'scaleY(0)';
				this.isHeaderSticky = true;
				let scrollPos = this.refs.header.offsetHeight - this.state.tabHeight;
				this.refs.contents.setScrollForAllItem(true, scrollPos);
			}
		}
		// this.refs.contents.removeScrollListener(this.scrollListener, false);
	}

	moveHeaderDown() {
		if(this.isHeaderSticky) {
			this.refs.header.style.transform = 'translate3d(0, 0, 0)';
			this.isHeaderSticky = false;
			if(this.props.staticHeader) {
				let scrollPos = this.refs.header.offsetHeight - this.state.tabHeight;
				this.refs.contents.setScrollForAllItem(false, scrollPos);
				this.refs.contents.subscribeScrollListener(this.scrollListener, false);
			}
		}
	}

	render() {
		let tabData = this.state.tabData,
			tabs = tabData && tabData.tabs,
			content = tabData && tabData.contents;
		return tabData ? (
			<div className={styles["tabscontrol"]}>
				<div ref='header' className={cx(styles["headerCtn"],
				{[styles['fixed']] : this.props.staticHeader})}>
					{ this.props.header }
					<TabWidget ref='tabWidget'
						tabs={tabs}
						activeItemIndex={this.state.activeTabIndex}
						styles={this.props.styles}
						enableTabSliderAnimation={this.props.enableTabSliderAnimation}
						enableInnerScroll={this.props.staticHeader}
						tabChange = {this.tabChange}
						touchMovePropageted={this.touchMovePropageted}
						updateHeight={this.updateHeight}/>
				</div>
				{content ? <div ref='contentsCtn' className={styles["tabcontent"]}>
					<ViewPager
						ref='contents'
						{...this.props}
						items={content}
						enableInnerScroll={this.props.staticHeader}
						activeItemIndex={this.state.activeTabIndex}
						selecedIndex={this.state.selecedIndex}
						maxHeight={this.state.contentHeight}
						emptyBoxHeight={this.state.emptyBoxHeight}
						updateTabSliderPosition={this.updateTabsIndicator.bind(this)}
						selecedIndexChanged={this.selecedIndexChanged}
						scrollListenerEvent={this.scrollListener}
						touchMove={this.touchMovePropageted}
					/>
				</div> : null}
			</div>
		) : null;
	}
}

TabComponent.PropTypes = {
	reset: React.PropTypes.bool,
	initialActiveTab: React.PropTypes.number,
	staticHeader: React.PropTypes.bool,
	onChange: React.PropTypes.func,
};

TabComponent.defaultProps = {
	tabData:{tabs: [], contents: []},
	staticHeader: false,
	tabsEquiSized: true,
	initialActiveTab: 0,
	enableTabSliderAnimation: true,
	enableViepagerAnimation: true,
	resetIndexOnUpdate: false,
	styles: {
		tabSelectedObj: {}, tabNotSelectedObj: {}, sliderStyleObj: {}, tabHeaderStyleObj: {}, tabHeaderStyleContainerStylebj:{},
		tabSelected: null, tabNotSelected: null, sliderStyle: null, tabHeaderStyle: null, tabHeaderStyleContainerStyle: null
	}
};

export default TabComponent;
