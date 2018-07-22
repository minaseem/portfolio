/**
 * Created by imamudinnaseem on 7/22/18
 */
import {Component, h} from "preact";
import IObject from "../../interfaces/IObject";

const NavabarItem = [
    {
        name: "About",
        icon: 'fas fa-user-alt',
        href: '#about'
    },
    {
        name: "Experience",
        icon: 'fas fa-chart-line',
        href: '#experience'
    },
    /*{
        name: "Projects",
        icon: 'fas fa-project-diagram',
        href: '#projects'
    },*/
    {
        name: "Skills",
        icon: 'fas fa-signal',
        href: '#skills'
    },
    {
        name: "Education",
        icon: 'fas fa-graduation-cap',
        href: '#education'
    },
    {
        name: "Contact",
        icon: 'fas fa-envelope',
        href: '#contact'
    },
    {
        name: "Resume",
        icon: 'fas fa-file',
        href: 'https://drive.google.com/file/d/1PGrOVignNm4FnpZYHaokYt06jQn3gsPa/view?usp=sharing',
        target: "_blank"
    }
]

export default class Navbar extends Component {
    render() {
        return (
            <ul class="navbar">
                {NavabarItem.map(x => <NavbarItem data={x}/>)}
            </ul>
        )
    }
}

class NavbarItem extends Component<IObject> {
    render(props) {
        let data = props.data;
        return (
            <li class="item">
                <a href={props.data.href} target={data.target || "_self"} onClick={(e) => {
                    if (!data.target || data.target === '_selef') {
                        e.preventDefault();
                        document.querySelector(props.data.href.toLowerCase()).scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }}>
                    <i className={data.icon + " nav-icon"}></i>
                    <div className="peg"></div>
                    <span className="nav-title">{data.name}</span>
                </a>
            </li>
        )
    }
}