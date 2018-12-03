import React, { Component } from 'react';
import './allprofessor.scss';
import ProfessorIdAbout from './professorId_about';
import ProfessorId from './professorId';
import MyClassState from './my_class_state';
// import ClassFrom from './class_from';




class professor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            professor: {},
            teacher: false
        }
    }
    componentDidMount() {
        //ajax call
        this.getClass()
        console.log('id', this.state.id)
        console.log(this.props.match.params.id)
    }
    getClass() {
        const th = this
        fetch('/professorId/professor/' + th.state.id)  //http://localhost:3000/professor/api
            .then(res => res.json())
            .then(professor => {
                // console.log(c_room)
                this.setState({ professor: professor[0] })
            })
    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    {/* <ClassFrom/> */}
                    <ProfessorId professor={this.state.professor} teacher={this.state.teacher} />
                    <div className="col-md-9 mt-5">
                        <ProfessorIdAbout professor={this.state.professor} />
                        {/* <MyClassState/> */}

                    </div>


                </div>

            </React.Fragment>
        )
    }
}
export default professor;