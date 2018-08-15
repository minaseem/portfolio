/**
 * Created by imamudinnaseem on 7/22/18
 */
import {Component, h} from "preact";
import "./banner.less"

export default class Banner extends Component {
    render() {
        return (
            <div class="banner" id="home">
                <a className="intro" href="#home">
                    <div className="name">
                        Imamudin Naseem
                    </div>
                    <div className="title">Full Stack Web Developer</div>
                </a>
                <div className="banner-text">
                  Let's build Web!
                </div>
            </div>
        )
    }
}