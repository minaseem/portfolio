/**
 * Created by imamudinnaseem on 7/22/18
 */
import {Component, h} from "preact";
import Card from "../card/card";

export default class About extends Component {
    render() {
        const exp = new Date().getFullYear() - 2014
        return (
            <section id="about" class="content-item">
                <header>About</header>
                <div className="about-me">
                    <p>Imamudin Naseem, a highly skilled software developer with a diverse range of experience in building high-performing and scalable web applications. Imamudin has over {exp} years of experience in the industry and has worked with a wide range of technologies and platforms, including React, Vue.js and Node.js.</p>
                    <br/>
                    <p>Imamudin's passion for software development began at a young age, and he has spent years perfecting his craft. He has a deep understanding of web development frameworks, and he is highly skilled in designing and implementing complex web applications that can handle large volumes of traffic and data.</p>
                    <br/>
                    <p>Throughout his career, Imamudin has worked with companies of all sizes, from startups to Fortune 500 companies. He has a proven track record of delivering high-quality software solutions on time and within budget, and he is known for his strong communication skills and ability to work collaboratively with clients and team members.</p>
                    <br/>
                    <p>Imamudin is a lifelong learner who is always looking for new challenges and opportunities to expand his knowledge and skills. He stays up-to-date with the latest technological advancements in the field of software development and is constantly experimenting with new tools and technologies to improve his workflow and increase efficiency.</p>
                    <br/>
                    <p>
                        In his free time, Imamudin enjoys reading technological advancements, playing cricket and spending time with his family.
                    </p>
                </div>
            </section>
        )
    }
}
