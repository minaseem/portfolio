/**
 * Created by imamudinnaseem on 7/22/18
 */
import {Component, h} from "preact";
import Card from "../card/card";

export default class Education extends Component {
    render() {
        return (
            <section id="education" class="education content-item">
                <header>Education</header>
                <Card>
                    <div className="wrapper">
                        <div className="header">
                            <a className="university" href="http://www.vit.ac.in" target="_blank">VIT University</a>
                            <div className="loc">
                                Vellore, TN, India
                            </div>
                            <a className="vit-icon" href="http://www.vit.ac.in" target="_blank"></a>
                        </div>
                        <div className="courses">
                            B. Tech in Computer Science & Engineering
                        </div>
                    </div>
                </Card>
            </section>
        )
    }
}