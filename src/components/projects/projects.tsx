/**
 * Created by imamudinnaseem on 7/22/18
 */
import {Component, h} from "preact";
import IObject from "../../interfaces/IObject";
import Card from "../card/card";
import {projects, skills} from "../../extras/data";

export default class Projects extends Component {
    render() {
        return (
            <section id="projects" class="content-item">
                <header>Projects</header>
                <div className="projects">
                    {projects.map((project, index) => <Project project={project} key={index}></Project>)}
                </div>
            </section>
        )
    }
}

class Project extends Component<IObject> {
    render(props) {
        const project = props.project;
        return (
            <Card>
                <a class={`project ${project.class}`} href={project.link} target="_blank" rel="nofollow">
                    <div className={`icon ${project.icon}`}></div>
                    <div className="name">{project.name}</div>
                </a>
            </Card>
        )
    }
}

