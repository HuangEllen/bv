import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class my_joinclass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // id: '',//this.state.match.params.id,
            c_room: []
        }
    }
    componentDidMount() {
        //ajax call
        this.getClass();
    }
    getClass() {
        // const id = 1;
        fetch("/allcategory/myjoinstart/" + this.props.id )  //http://localhost:3000/professor/api
            .then(res => res.json())
            .then(c_room => {
                // console.log(this.state.userid)
                this.setState({ c_room: c_room })
            })

    }
    render() {

        return (
            <React.Fragment>
                
                    {this.state.c_room.map(c_room =>

                        <div className="col-md-6  mb-5 mt-5" key={c_room.cs_id}>
                            <div className=" product-new-label">
                                <Link to={`/professor/${c_room.user_id}`}>
                                    <img className="ellen-teach-p1" src={`/images/${c_room.teacher_img} `} />
                                </Link>
                            </div>
                            <div className="product-grid ">
                                <div className="product-image">
                                    <Link to={`/openclass/${c_room.cs_id}`} className=" ellen_hidbox product-image">
                                        <img className="pic-1 ellen_classbox" src={`/images/${c_room.c_img1} `} />
                                    </Link>
                                    <ul className="social ">
                                        <li className='mr-4'><a href="" onClick={this.checkHandler} data-tip="加入收藏"><i className="fas fa-bookmark"></i></a></li>
                                        <li><a href="" onClick={this.addHandler} data-tip="加入購物車"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                    <div className="product-discount-label "><img src={`/images/${c_room.img_url} `} /></div>
                                </div>
                                <div className="product-content d-flex justify-content-between flex-column">
                                    <h4 className="text-f f_w400">{c_room.c_title}</h4>

                                    <div className="d-flex justify-content-between ">
                                        <p className="ellen-p ">可報名人數:{c_room.total_pop ? c_room.total_pop : c_room.c_people}</p>
                                        <p className="ellen-p ">類型:{c_room.link_name}</p>
                                    </div>
                                    <div className="d-flex justify-content-between ">
                                        <p className="ellen-p ">課時{c_room.c_total_time}分鐘 </p>
                                        <h4 className="text-f">NT {c_room.amount} </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}

                

            </React.Fragment>
        );
    }
}

export default my_joinclass;