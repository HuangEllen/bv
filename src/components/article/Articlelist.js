import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Articlelist.scss";
import $ from 'jquery';


class Articlelist extends Component {
    constructor(props) {
        super(props)
        this.state = {article:[],
        
            totalPage: 0,
            currentPage: 1,
            perPage: 10,  //一次10筆資料
            upperPageBound: 3,  //設定每組最高的分頁數字
            lowerPageBound: 0,  //設定每組最低的分頁數字
            isPrevBtnActive: 'disabled',
            isNextBtnActive: '',
            pageBound: 3 //設定每組會有幾個分頁數字

        }
}

  //按下...計算下一組要產生的分頁數字
  btnIncrementClick = () => {
    this.setState({
      upperPageBound: this.state.upperPageBound + this.state.pageBound,
      lowerPageBound: this.state.lowerPageBound + this.state.pageBound
    });
    let listid = this.state.upperPageBound + 1;
    this.getArticle(listid)
  }
  //按下...計算上一組要產生的分頁數字
  btnDecrementClick = () => {
    this.setState({
      upperPageBound: this.state.upperPageBound - this.state.pageBound,
      lowerPageBound: this.state.lowerPageBound - this.state.pageBound
    });
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.getArticle(listid)
  }

  btnPrevClick = () => {
    if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
      this.setState({ 
        upperPageBound: this.state.upperPageBound - this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound
       });
    }
    let listid = this.state.currentPage - 1;
    this.getArticle(listid)
  }

  btnNextClick = () => {
    if ((this.state.currentPage + 1) > this.state.upperPageBound) {
      this.setState({ 
        upperPageBound: this.state.upperPageBound + this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound
      });
    }
    let listid = this.state.currentPage + 1;
    this.getArticle(listid)
  }
  componentDidMount() {
    // this.handleChange();
    this.getArticle(1);
  }
  componentDidUpdate() {
    $("ul li.active").removeClass('active');
    $('ul li#'+this.state.currentPage).addClass('active');
  }
  paging = e => {
    e.preventDefault();
    this.getArticle($(e.target).text())
  }
  getArticle(page) {
    fetch("http://localhost:3000/bv/article/articlelist/" + page)
      .then(res => res.json())
      .then(articles => {
        this.setState({
          article: articles.datas,
          totalPage: Math.ceil(articles.TotalCount / this.state.perPage), //計算出總共幾頁
          currentPage: page
        })

        //計算 prev next 按鈕是否出現
        this.setState({isNextBtnActive: 'disabled'});
        this.setState({isPrevBtnActive: 'disabled'});
        if (this.state.totalPage === parseInt(page) && this.state.totalPage > 1) {
          this.setState({ isPrevBtnActive: '' });
        }
        else if (parseInt(page) === 1 && this.state.totalPage > 1) {
          this.setState({ isNextBtnActive: '' });
        }
        else if (this.state.totalPage > 1) {
          this.setState({ isNextBtnActive: '' });
          this.setState({ isPrevBtnActive: '' });
        }

      })

  }
    render() {
    const { totalPage, currentPage, perPage, upperPageBound, lowerPageBound, isPrevBtnActive, isNextBtnActive } = this.state;

    //產生頁碼
    const pageNumbers = [];
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i);
    }

    //產生數字的分頁按鈕
    const renderPageNumbers = pageNumbers.map(number => {
      if (number === 1 && currentPage === 1) {
        return (
          <li key={number} className='page-item' id={number}><a href='#' className="page-link" id={number} onClick={this.paging}>{number}</a></li>
        )
      }
      else if ((number < upperPageBound + 1) && number > lowerPageBound) {
        return (
          <li key={number} id={number} className='page-item'><a href='#' className="page-link" id={number} onClick={this.paging}>{number}</a></li>
        )
      }
    });

    //按下...產生下一組分頁數字
    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound) {
      pageIncrementBtn = <li className="page-item"><a href='#' className="page-link" onClick={this.btnIncrementClick}> &hellip; </a></li>
    }
    //按下...產生上一組分頁數字
    let pageDecrementBtn = null;
    if (lowerPageBound >= 1) {
      pageDecrementBtn = <li className="page-item"><a href='#' className="page-link" onClick={this.btnDecrementClick}> &hellip; </a></li>
    }

    //判斷是否產生prev按鈕
    let renderPrevBtn = null;
    if (isPrevBtnActive !== 'disabled') {    
    renderPrevBtn = <li className="page-item"><a className="page-link" href='#' id="btnPrev" onClick={this.btnPrevClick}> ❮ </a></li>
    }

    //判斷是否產生next按鈕
    let renderNextBtn = null;
    if (isNextBtnActive !== 'disabled') {
      renderNextBtn = <li className="page-item"><a className="page-link" href='#' id="btnNext" onClick={this.btnNextClick}> ❯</a></li>
    }


        return (
            <React.Fragment>
            <div className="container">
                <div className="row">
                    {this.state.article.map(article =>
                            <div key={article.id} className="col-12 col-sm-6 col-lg-3 mt-5">
                                {/* style={{border:" 1px solid black"}} */}
                             
                                <div className="card-h bordercolor ">
                                
                                <figure className="fig-h text-center">
                            
                                <img className="pic-h " src = {(`/images/liliimg/pro_pic/${article.pro_picnum}`)} alt=""/>
                                {/* src = {require(`../../liliimages/${article.pro_picnum}.jpg`)} */}
                                </figure>
                                  
                                    <h5 className=" d-inline-flex  textblack pl-2">[{article.pre_title}]</h5> 
                                    <h5 className="  d-inline-flex   textblack text-truncate">{article.title}</h5>
                                 
                                    <p className=" textblack text-truncate pl-2">{article.text}</p>
                                    <p className=" textblack pl-2">類型：<a href="#" className="textblack">#{article.pro_type}</a>
                                        <a href="#" className=" textblack">#{article.pro_type}</a>
                                    </p> 
                                    {/* 星星變數亮燈燈*/}
                                    <i className="far fa-star "></i> 
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star "></i>
                                    <p className="d-inline-flex textblack">({article.star})</p>
                                    {/* 星星變數亮燈燈*/}
                                    
                                        <div className="row justify-content-between">
                                        <div className="col">
                                        <i className="far fa-heart  textblack pl-2"/>
                                        <p className="d-inline-flex  textblack pl-1">{article.collect}</p>
                                       
                                       
                                        <i className="far fa-comment  textblack pl-1"/>
                                        <p className="d-inline-flex textblack ">{article.count}</p>
                                        </div>
                                       
                                        <div className="col text-right ">
                                        {/* <p className="d-inline-flex text-right textprimary font-weight-bold pr-2">觀看更多</p> */}
                                        <Link to={`${this.props.match.url}/detail/${article.id}`}><p className="d-inline-flex text-right textprimary font-weight-bold pr-2">觀看更多</p></Link>
                                        </div>
                                        </div>
                                
                                    
                                    {/* <p className="justify-content-end">{article.created_at}</p> */}
                                 
                                </div>
                                </div>
                              
                                
                           
                            
                    )}
                    </div>
                    <nav aria-label="Page navigation example text-center" className="mt-5">
                        <ul className="pagination  justify-content-center">
                            {renderPrevBtn}
                            {pageDecrementBtn}
                            {renderPageNumbers}
                            {pageIncrementBtn}
                            {renderNextBtn}
                        </ul>
                    </nav>
                </div>
            </React.Fragment>
        )

    }
}
export default Articlelist;