import React, { Component } from 'react';

class My extends Component{
    constructor(props) {
        super(props)
        console.log(props)
        // this.props=this.params.usid
        this.state = {article :[],a:[]}
        this.handleChange = this.handleChange.bind(this)
        console.log(this.state);
        }  
    handleChange() {
        var b = JSON.parse(localStorage.getItem("member"));
        fetch("http://localhost:3000/bv/article/my/" +b[0].id)
        // fetch("http://localhost:3000/bv/article/my/" + this.props.match.params.usid)
        .then(res => res.json())
        .then(articles =>
            this.setState({article:articles,a:articles[0]}
                ))}

    //網頁產生後會觸發此事件  
    componentDidMount() {
        this.handleChange();
    }
    render() {
        console.log(this.state)
        var article =this.state.a
        return (
    <React.Fragment>
    <div className="row mt-5">
        <div className="col-lg-3 text-center">
            {/* {this.state.a.map(article => */}
            <div> 
            <div className="article-meta-author-portrait">
                <img src={(`/images/liliimg/u_pic/${article.u_pic}`)} alt="" />
            </div>
            <div className="article-meta-author d-inline-flex mt-5 mb-2 mr-3">{article.u_name}</div>
            <div className="article-meta-author d-inline-flex mt-5 mb-2 mr-3">{article.gender}</div>
            <div className="article-meta-author d-inline-flex mt-5 mb-2 mr-3">{article.age}歲</div>
            </div>
            {/* )} */}
        </div>
        <div className="col-lg-9">
            <table className="table">
                <thead>
                    <tr>
                        <th>標題</th>
                        <th>商品名稱</th>
                        <th>商品類型</th>
                        <th>星星</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.article.map(article => 
                            <tr key={article.id}> 
                            <td>{article.title}</td> 
                            <td>{article.pro_name}</td>
                            <td>{article.pro_type}</td>
                            <td>{article.star}</td>
                            <td><button className="profile-edit-btn  y-btn">修改</button></td>
                            <td><button className="profile-edit-btn r-btn">刪除</button></td>
                            </tr>
                        )}
                    </tbody>
                </table> 
                   
        </div>
    </div>
           
    </React.Fragment>
        )
    }
}

export default My;