/**
 * Created by imamudinnaseem on 7/22/18
 */
import {Component, h} from "preact";
import "./card.less"

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                {this.props.children}
            </div>
        )
    }
}