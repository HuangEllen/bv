import React, { Component } from 'react';

class professor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            c_room: []
        }
    }
    componentDidMount() {
        //ajax call
        this.getUsers();
    }
    getUsers() {
        fetch("/professor/croom")  //http://localhost:3000/professor/api
            .then(res => res.json())
            .then(c_room => {
                console.log(c_room)
                this.setState({ c_room: c_room })
            })

    }
    render() {
        return (
            <React.Fragment>

                <h1>Professor</h1>

                <div className="apink">

{this.state.c_room.map(c_room =>
                        <p key={c_room.idx}>
                            {c_room.c_detail}</p>
                        )}

                </div>


            </React.Fragment >

        );
    }
}
export default professor;