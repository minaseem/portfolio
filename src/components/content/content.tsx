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

export default class Content extends Component {
    render() {
        return (
            <div className="content">
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