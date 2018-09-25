/**
 * Created by imamudinnaseem on 7/22/18
 */
import {Component, h} from "preact";
import Card from "../card/card";
import {contacts} from "../../extras/data";
import IObject from "../../interfaces/IObject";

export default class Contacts extends Component {
    render() {
        return (
            <section id="contact" className="contacts content-item">
                <header>Contact</header>
                <Card>
                    <div className="contact-wrapper">
                        {contacts.map(x => <Contact data={x}/>)}
                    </div>
                </Card>
            </section>
        )
    }
}

class Contact extends Component<IObject> {
    render(props) {
        const contact = props.data;
        return (
            <div class="contact">
                <a href={contact.link} className={"contact-icon " + contact.icon} target={contact.target || "_blank"}></a>
                <a class="title" href={contact.link} target={contact.target || "_blank"}>{contact.text}</a>
            </div>
        )
    }
}