/**
 * Created by imamudinnaseem on 7/21/18
 */
import {Component, h} from "preact";
import "./sidebar.less";
import Navbar from "./Nav";
import SlidingNav from "../SlidingNav/SlidingNav";

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <Intro />
                <Navbar />
            </div>
        )
    }
}

class Intro extends Component {
    render() {
        return (
            <a className="intro" href="#home">
                <div className="name">
                    Imamudin Naseem
                </div>
                <div className="title">Full Stack Web Developer</div>
            </a>
        )
    }
}