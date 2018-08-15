/**
 * Created by imamudinnaseem on 7/22/18
 */
import {Component, h} from "preact";
import IObject from "../../interfaces/IObject";
import {NavabarItem} from "../../extras/data";



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
                    if (!data.target || data.target === '_self') {
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