/**
 * Created by imamudinnaseem on 8/15/18
 */
import {Component, h} from "preact";
import * as R from 'ramda';
import {NavabarItem} from "../../extras/data";
import "./slidingNav.less";
import IObject from "../../interfaces/IObject";

type Props = {
    onNavClick: Function,
    slidingNavLastIndex: number
}

export default class SlidingNav extends Component<Props> {
    onNavClick = (index) => {
        setTimeout(() => this.props.onNavClick(index), 200);
        this.disperse(index);
    }

    disperse(disperseIndex) {
        this.setState({disperseIndex});
    }

    render(props, state) {
        const slidingIndex = props.slidingNavLastIndex >= 0 ? props.slidingNavLastIndex : 2;
        let partitionIndex = state.disperseIndex >= 0 ? state.disperseIndex : slidingIndex;
        const getNavItem = (data) => <NavItem data={data} index={data.index} onClick={this.onNavClick}/>;
        const getPartitionedNav = R.compose(R.splitAt(partitionIndex + 1), R.map(getNavItem))
        const [part1, part2] = getPartitionedNav(NavabarItem);
        const part1Grow = (partitionIndex + 1) / NavabarItem.length;
        const part2Grow = (NavabarItem.length - (partitionIndex + 1)) / NavabarItem.length;
        const animationClassPrefix = partitionIndex === state.disperseIndex ? 'go' : 'come';
        return (<div className="full-screen sliding-nav">
            <nav className={`moving ${animationClassPrefix}-up white-bg`} style={{'flexGrow': part1Grow}}>
                {part1}
            </nav>
            <nav className={`moving ${animationClassPrefix}-down white-bg`} style={{'flexGrow': part2Grow}}>
                {part2}
            </nav>
        </div>)
    }
}

class NavItem extends Component<{ onClick: Function, data: IObject, index: number }> {

    onItemClick = (e) => {
        let index = R.path(['props', 'index'], this);
        this.props.onClick(index);
    }

    render({data}) {
        return (
            <a className="sliding-nav-item" href={data.href} target={data.target || "_self"} onClick={this.onItemClick}>
                {data.name}
            </a>
        )
    }
}