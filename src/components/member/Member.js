import React, { Component } from 'react';
import Show from './Show';
import Add from './Add';
// import members from './members.json';

class Member extends Component {
    constructor(props) {
        super(props)
        this.initState = {
            name: "",
            email: "",
            birthday:"",
            id: ""
        }

        this.state = {
            members: [],
            member: this.initState,
            type: 'add'
        }


    }

    modify = (id, type) => {
        // alert(id + "," + type)
        switch (type) {
            case "edit":
                fetch("http://localhost:3000/api/members/" + id, {
                    method: 'GET'
                }).then(res => res.json())
                    .then(data => {
                        this.setState({
                            member: data[0],
                            type: "edit"
                        })
                        console.log(data[0])
                    });

                break;
            case "del":
                fetch("http://localhost:3000/api/members/" + id, {
                    method: 'DELETE'
                }).then(res => res.json())
                    .then(data => {
                        alert(data.message);
                        this.getMembers();
                    });
                break;
            default:
                break;
        }
    }

    update = (member) => {
        fetch('http://localhost:3000/api/members/' + member.id, {
            method: 'PUT',
            body: JSON.stringify(member),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .then(data => {
                alert(data.message);
                this.getMembers();

            })
    }
    // add = (member) => {
    //     delete member.id;
    //     fetch('http://localhost:3000/api/members', {
    //         method: 'POST',
    //         body: JSON.stringify(member),
    //         headers: new Headers({
    //             'Content-Type': 'application/json'
    //         })
    //     }).then(res => res.json())
    //         .then(data => {
    //             alert(data.message);
    //             this.getMembers();
    //         })
    // }

    // 網頁產生後會觸發此事件  
    componentDidMount() {
        this.getMembers();
    }
    getMembers() {
        var a = JSON.parse(localStorage.getItem("member"));
        fetch("http://localhost:3000/api/members")
            .then(res => res.json())
            .then(members => this.setState({
                members: members,
                member: this.initState,
                type: 'add'
            }))
        // .then(members => { return members })

    }
    render() {
        return (
            <React.Fragment>
                {/* <h2>Member Management</h2> */}
                <div className="row">
                    <div className="col-12">
                        <Show members={this.state.members} modify={this.modify} />
                    </div>
                    {/* <div className="col-12">
                        <Add modifyType={this.state.type} modifyData={this.state.member} update={this.update} add={this.add} />
                    </div> */}
                </div>
            </React.Fragment>
        )

    }
}

export default Member;