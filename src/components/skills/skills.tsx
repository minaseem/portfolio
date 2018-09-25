/**
 * Created by imamudinnaseem on 7/22/18
 */
import {Component, h} from "preact";
import IObject from "../../interfaces/IObject";
import Card from "../card/card";
import {skills} from "../../extras/data";

export default class Skills extends Component {
    render() {
        return (
            <section id="skills" class="content-item">
                <header>Skills</header>
                <SkillGroup skill={skills.html}></SkillGroup>
                <SkillGroup skill={skills.css}></SkillGroup>
                <SkillGroup skill={skills.javascript}></SkillGroup>
                <SkillGroup skill={skills.backend}></SkillGroup>
            </section>
        )
    }
}

class SkillGroup extends Component<IObject> {
    render(props) {
        const skill = props.skill;
        return (
            <Card>
                <div className="skill-header">{skill.name}</div>
                <div className="skill-content">
                    {skill.items.map(x => <SkillItem skill={x}></SkillItem>)}
                </div>
            </Card>
        )
    }
}

class SkillItem extends Component<IObject> {
    render(props) {
        return (
            <div class="skill-item">
                <div class={props.skill.icon + " skill-icon"}></div>
                <div class="skill-name">{props.skill.name}</div>
            </div>
        )
    }
}