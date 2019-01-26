/**
 * Created by imamudinnaseem on 7/22/18
 */
import {Component, h} from "preact";
import Card from "../card/card";

export default class About extends Component {
    render() {
        return (
            <section id="about" class="content-item">
                <header>About</header>
                <div className="about-me">I am a Software Engineer, working on web to make it a better
                    place
                </div>
            </section>
        )
    }
}
