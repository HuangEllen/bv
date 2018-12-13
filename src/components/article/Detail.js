import React, { Component } from 'react';
import $ from 'jquery';

class Detail extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {article :[]}
        this.handleChange = this.handleChange.bind(this)
        console.log(this.state);
        }  
    handleChange() { 
        fetch("http://localhost:3000/bv/article/articlelist/detail/" + this.props.match.params.id)
        .then(res => res.json())
        .then(articles =>
            this.setState({article:articles}))}

    //網頁產生後會觸發此事件  
    componentDidMount() {
        this.handleChange();
    }
    render() {
        return (
            <React.Fragment>
                {/* <div className="container"> */}
                {this.state.article.map(article =>
                <div key={article.id}>
                <div className="row mt-4">
                    <div className="col">
                    <h2 className="text-left d-inline-flex">{article.title}</h2>
                    <h2 className="text-left d-inline-flex">{article.title}</h2>
                    </div>
                    {/* <div className="col text-right d-inline-flex lilibtn r-btn"> 
                        分享
                    </div> */}
                </div>
               
                <div className="ie-separator w-100" role="presentation"></div>

                <div className="article-meta col-lg-3">
                    <div className="article-meta-author-portrait">
                        <img src={(`/images/liliimg/u_pic/${article.u_pic}`)} alt="" />
                    </div>
                </div>
                <div className="col-lg-9">  
                    <div className="article-meta-author d-inline-flex mt-5 mb-2 mr-3">#{article.u_name}</div>
                    <div className="article-meta-author d-inline-flex mt-5 mb-2 mr-3">#{article.pro_type}</div>
                    <div className="article-meta-author d-inline-flex mt-5 mb-2 mr-3">{article.gender}</div>
                    <div className="article-meta-author d-inline-flex mt-5 mb-2 mr-3">{article.age}歲</div>
                    <div className="d-inline-flex mb-2"> flow</div><br/>
                    <i className="far fa-star mb-2"></i> 
                    <i className="far fa-star mb-2"></i>
                    <i className="far fa-star mb-2"></i>
                    <i className="far fa-star mb-2"></i>
                    <i className="far fa-star mb-2"></i>
                    <p className="d-inline-flex textblack mb-2">({article.star})</p>
                    <div className="d-inline-flex mb-2 ml-3 text-right">{article.created_at}</div>
                </div>
                {/* ---------------slider----------------- */}
                <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel" >
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner slide-h">
                        <div className="carousel-item active  text-center">
                        <img className="  " src={(`/images/liliimg/pro_pic1/${article.art_pic1}`)} alt="First slide"/>
                        </div>
                        <div className="carousel-item text-center">
                        <img className=" " src={(`/images/liliimg/art_pic2/${article.art_pic2}`)} alt="Second slide"/>
                        </div>
                        <div className="carousel-item text-center">
                        <img className=" " src={(`/images/liliimg/art_pic3/${article.art_pic2}`)} alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                {/* ----------------文字輸入區-------------- */}
                <p>{article.text}</p>               
                </div>
                    )}
                
            </React.Fragment>
        )
    }
}

export default Detail;
