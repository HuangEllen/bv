import React, { Component } from 'react';
import './Show.css';

class Show extends Component {
    // constructor(props){
    //     super(props)
    //     // console.log(this.props.members[0])
    // }
    handler = (evt) => {
        this.props.modify(evt.target.dataset.id, evt.target.dataset.type);
        // console.log(evt.target.dataset.id,evt.target.dataset.type);
        console.log("edit" + this.props.members[0])

    }

    render() {
        var a = JSON.parse(localStorage.getItem("member"));

        return (
            <React.Fragment>
                <div className="container bg_xxx">
                    <div className="caMainbox d-flex">
                        <table className="table caTable d-flex ">
                            <thead className="col-3">
                                <tr className="d-flex flex-column">
                                    {/* <th>編號</th> */}
                                    <th>暱稱</th>
                                    <th>電子郵件</th>
                                    <th>手機</th>
                                    <th>地址</th>
                                    <th>生日</th>
                                    {/* <th>建立日期</th>
                                    <th></th> */}
                                </tr>
                            </thead>
                            <tbody className="col-6">

                                <tr className="d-flex flex-column" key={a[0].id}>
                                    {/* <td>{a[0].id}</td> */}
                                    <td>{a[0].name}</td>
                                    <td>{a[0].email}</td>
                                    <td>{a[0].mobile}</td>
                                    <td>{a[0].address}</td>
                                    <td>{a[0].birthday}</td>
                                    {/* <td>{a[0].created_at}</td> */}

                                </tr>

                            </tbody>

                        </table>
                        <div className="col-3 mt-4">
                        <a className="btn btn-info mr-3" href="http://localhost:3001/MemberCenter/edit">修改資料</a>

                                {/* <button className="btn btn-danger" data-id={a[0].id} data-type="del" onClick={this.handler}>Del</button> */}
                            </div>
                    </div>
                </div>

                {/* <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>編號</th>
                            <th>暱稱</th>
                            <th>電子郵件</th>
                            <th>手機</th>
                            <th>地址</th>
                            <th>生日</th>
                            <th>建立日期</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.members.map(member =>
                            <tr key={member.id}>
                                <td>{member.id}</td>
                                <td>{member.name}</td>
                                <td>{member.email}</td>
                                <td>{member.mobile}</td>
                                <td>{member.address}</td>
                                <td>{member.birthday}</td>
                                <td>{member.created_at}</td>
                                <td>
                                    <button className="btn btn-info mr-3" data-id={member.id} data-type="edit" onClick={this.handler}>edit</button>
                                    <button className="btn btn-danger" data-id={member.id} data-type="del" onClick={this.handler}>Del</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table> */}
            </React.Fragment>
        )
    }

}

export default Show;