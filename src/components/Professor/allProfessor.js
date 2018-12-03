import React, { Component } from 'react';


class allprofessor extends Component {
    constructor(props) {
        super(props);
        // console.log(this.state.professor.user_id);
        this.state = {
            professor: [],
            // pop:true
        }
    }
    componentDidMount() {
        //ajax call
        this.getClass();
    }
    getClass() {
        // var a=this.state.page,
        //     b=this.state.c_category;
        fetch("/professorId/professor")  //http://localhost:3000/professor/api
            .then(res => res.json())
            .then(professor => {
                console.log(professor)
                this.setState({
                    professor: professor
                })
            })

    }

    render() {
        return (
            <React.Fragment>
                <div className="container">

                    <h2 className="mt-5">講師資群</h2>
                    <div className="row">

                        {this.state.professor.map(professor =>
                            <div className="col-md-3 mt-4 text-center" key={professor.user_id}>
                                <div className="team-member-id text-center border-f">
                                    <a href={`/professor/${professor.user_id}`}>
                                        <img className="ellen_hidbox1 mt-3" src={`/images/${professor.user_img} `} alt="" />
                                    </a>

                                    <h3>{professor.teacher_name}</h3>
                                    <p>{professor.link_name}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>


            </React.Fragment >

        );
    }
}
export default allprofessor;