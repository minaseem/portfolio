/**
 * Created by imamudinnaseem on 7/22/18
 */
import {Component, h} from "preact";
import Card from "../card/card";
import IObject from "../../interfaces/IObject";
import {experience} from "../../extras/data";

export default class Experience extends Component {
    render() {
        return (
            <section id="experience" className="experience content-item">
                <header>Experience</header>
                {experience.map(x => <Exp data={x}/>)}
            </section>
        )
    }
}


class Exp extends Component<IObject> {
    render(props) {
        const data = props.data;
        return (
            <Card>
                <div class="exp-wrapper">
                    <div class="exp-header">
                        <a href={data.link} target="_blank" className={"company-icon " + data.icon}>

                        </a>
                        {/* <div className="company-name">
                            {data.company}
                        </div>*/}
                        <div className="duration">{data.duration}</div>
                    </div>
                    <div className="designation">
                        {data.designation}
                    </div>
                </div>
            </Card>
        )
    }
}
