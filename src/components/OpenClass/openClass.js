import React, { Component } from "react";
import ClassText from './classText';
import ClassImg from './classImg';
import AllTab from './allTab';
import Slider from "react-slick";
import LinkClass from '../OpenClass/link';

class openClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            c_room: {},
            id: this.props.match.params.id,
            // data:{}
        }
    }
    componentWillMount() {
        console.log('tttt')
        console.log('id', this.state.id)
        //console.log('this',this.props)

    }
    componentDidMount() {
        //ajax call
        this.getClass()

    }
    getClass() {
        const th = this

        // fetch('/allcroom/croom/' + th.state.id)  //http://localhost:3000/professor/api
        //     .then(res => res.json())
        //     .then(c_room => {
        //         // console.log(c_room)
        //         this.setState({ c_room: c_room })
        //     })
        fetch('/allcroom/croom/' + th.state.id)  //http://localhost:3000/professor/api
            .then(res => res.json())
            .then(c_room => {
                // console.log(c_room)
                this.setState({ data: c_room })
            })

        fetch('/allcroom/croom/' + th.state.id, {
            method: 'GET'
        }).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            } else {
                var error = new Error(response.statusText)
                error.response = response
                throw error
            }
        })
            .then(function (data) {
                // data 才是實際的 JSON 資料
                console.log('data', data[0])
                th.setState({ c_room: data[0] })
            }).catch(function (error) {
                return error.response.json();

            }).then(function (errorData) {
                // errorData 裡面才是實際的 JSON 資料
            });

    }

    render() {

        console.log(this.state.c_room)
        return (

            <React.Fragment>

                <div className="container mt-5 " >
                    <div className="card p-3 bg-s2 border-f">
                        <div className="wrapper row d-flex justify-content-around">
                            <ClassImg items={this.state.c_room} />
                            <ClassText items={this.state.c_room} />
                        </div>
                        <hr />
                        <div className="wrapper row d-flex justify-content-around flex-column">
                            <AllTab items={this.state.c_room} />
                        </div>

                    </div>
                    <div className="d-flex justify-content-around row">

                            <LinkClass />


                    </div>
                </div>


            </React.Fragment>

        )
    }
}

export default openClass;