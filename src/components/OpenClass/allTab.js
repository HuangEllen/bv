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
                <div className="container  col-10">
                    <h2 className=" mt-5">課程介紹</h2>

                    <h3 className=" mt-5">課程內容</h3>
                    <p>時間：</p>
                    <p>地點：</p>
                    <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
                </div>
                <div className="container mt-5 col-10">
                    <h3 className=" mt-3">關於講師</h3>
                    <div className="d-flex justify-content-center mt-5">
                        <div className="col-6 d-flex flex-column align-items-center">
                            <div className="ellen_hidbox1 ">
                                <img src="/images/5b4848b263849.png" alt="" />
                            </div>
                            <h3 className="mt-4 mb-3">張玉青</h3>
                        </div>
                        <div className="col-6 text-center">
                            <p>Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!</p>
                        </div>

                    </div>

                </div>
                <div className="container mt-5 col-10">
                    <h3 className=" mt-3">使用產品</h3>
                    <div className="d-flex justify-content-center mt-5">
                        <div className="col-6 d-flex flex-column align-items-center">
                            <div className="ellen_hidbox3 ">
                                <img src="/images/5b4848b263849.png" alt="" />
                            </div>
                            <h4 className="mt-4 mb-3">張玉青</h4>
                        </div>
                        <div className="col-6 text-center">
                            <p>Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!</p>
                        </div>

                    </div>
                </div>
                {/* <div className="container mt-5 col-10">
                    <h3 className=" mt-3">常見問題</h3>
                    <p>Only 7.8 kB gzipped, no dependencies<br />
                        Small API, small learning curve</p>
                </div> */}

            </React.Fragment >


        )
    }
}

export default allTab;