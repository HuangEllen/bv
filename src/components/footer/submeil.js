import React, { Component } from 'react';
class subMail extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container text-center  mt-5 mb-5 bg-first ellen-email">
                    <div className=" d-flex justify-content-center align-items-center">
                        <h5 className="mr-2 ellen-color-w" >即時掌握最新訊息及活動</h5>

                        <input className="col-4" type="text"  name="text" placeholder="請輸入電子信箱" />
                        <button type="button" className="btn text-center  m-1 bg-s ellen-h">訂閱電子報</button>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default subMail;