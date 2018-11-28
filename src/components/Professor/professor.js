import React, { Component } from 'react';
import './allprofessor.scss';
import ProfessorIdAbout from './professorId_about';
import ProfessorId from './professorId';
import MyClassState from './my_class_state';



class professor extends Component {
    render() {
        return (
            <React.Fragment>
                    <div className="row">
                        <ProfessorId/>
                        <div className="col-md-9 mt-5">
                        {/* <ProfessorIdAbout /> */}
                        <MyClassState/>
                        
                        </div>
                        

                    </div>

            </React.Fragment>
        )
    }
}
export default professor;