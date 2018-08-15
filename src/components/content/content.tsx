/**
 * Created by imamudinnaseem on 7/21/18
 */
import {Component, h} from "preact";
import "./content.less"
import Banner from "../banner/banner";
import About from "../about/about";
import Experience from "../experience/experience";
import Skills from "../skills/skills";
import Education from "../education/education";
import Contact from "../contact/contact";
import SlidingNav from "../SlidingNav/SlidingNav";


export default class Content extends Component {
    hideNav = (index) => {
        this.setState({
            showNav: false,
            slidingNavLastIndex: index
        });
    }
    showNav = () => {
        this.setState({
            showNav: true
        });
    }

    render(props, state) {
        return (
            <div className="content">
                {state.showNav ? <SlidingNav onNavClick={this.hideNav} slidingNavLastIndex={state.slidingNavLastIndex}/> : null}
                <HamBurger onClick={this.showNav}></HamBurger>
                <Banner></Banner>
                <About></About>
                <Experience></Experience>
                <Skills></Skills>
                <Education></Education>
                <Contact></Contact>
            </div>
        )
    }
}

class HamBurger extends Component<{ onClick: Function }> {
    render(props) {
        return (
            <i className="fas fa-bars ham" onClick={props.onClick}></i>
        )
    }
}