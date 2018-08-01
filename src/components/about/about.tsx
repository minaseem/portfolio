/**
 * Created by imamudinnaseem on 7/22/18
 */
import {Component, h} from "preact";
import Card from "../card/card";

export default class About extends Component {
    render() {
        return (
            <section id="about">
                <header>About</header>
                <div className="about-me">I am a Software Engineer, working on web for past 4 years to make it a better
                    place
                </div>
            </section>
        )
    }
}
