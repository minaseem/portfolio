/**
 * Created by imamudinnaseem on 6/5/18
 */

import {Component, h, render} from 'preact';
import "./styles/main.less";
import Sidebar from "./components/sidebar/sidebar";
import Content from "./components/content/content";


class App extends Component {
    handleRoute(e) {
    }

    render() {
        return (
            <div id="app" className="app-container">
                <Sidebar></Sidebar>
                <Content></Content>
            </div>
        );
    }
}

let root;

function init() {
    root = render(<App/>, document.querySelector("#app"), root);
}

// in development, set up HMR:
if (module.hot) {
    //require('preact/devtools');   // turn this on if you want to enable React DevTools!
    module.hot.accept('./components/', () => requestAnimationFrame(init));
}

init();