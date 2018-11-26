import React, { Component } from 'react';
// import Tab from './tab';


class allTab extends Component {
    // constructor(props) {
    //     super(props);

    // const Pane = props => (
    //     <div className={"tab-pane" + (props.activepane ? " active" : "")} id={props.id}>
    //         {props.children}
    //     </div>
    // )
    //}
    render() {
        return (
            <React.Fragment>
                <div className=" mt-5">
                    <h2>Declarative</h2>
                    <p>Declarative views make your code more predictable and easier to debug.</p>

                    <h2>Component-Based</h2>
                    <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>

                    <h2>Learn Once, Write Anywhere</h2>
                    <p>We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
                </div>
                <div className=" mt-5">
                    <h2>Approachable</h2>
                    <p>Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!</p>

                    <h2>Versatile</h2>
                    <p>Simple, minimal core with an incrementally adoptable stack that can handle apps of any scale.</p>

                    <h2>Performant</h2>
                    <p>16kb min+gzip Runtime<br />
                        Blazing Fast Virtual DOM<br />
                        Minimal Optimization Efforts</p>
                </div>
                <div className=" mt-5">
                    <h2>Light-weight</h2>
                    <p>Only 7.8 kB gzipped, no dependencies<br />
                        Small API, small learning curve</p>

                    <h2>Robust</h2>
                    <p>Safe-by-default templates<br />
                        Hierarchical MVC via components</p>

                    <h2>Fast</h2>
                    <p>Virtual DOM diffing and compilable templates<br />
                        Intelligent auto-redrawing system</p>
                </div>

            </React.Fragment >


        )
    }
}

export default allTab;