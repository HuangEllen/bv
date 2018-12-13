import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Add from './Add';
import My from './My';
import Detail from './Detail';
import Articlelist from './Articlelist';

class Article extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="color-back row">
                        {/* <Link to={`${this.props.match.url}/articlelist`}></Link> */}
                        <div className="col-12 col-sm-4 col-lg-2"><Link to={`${this.props.match.url}/my`}><div className=" lilibtn g-btn text-center">我的文章</div></Link></div>
                        <div className="col-12 col-sm-4 col-lg-2"><Link to={`${this.props.match.url}/add`}><div className=" lilibtn r-btn text-center">新增文章</div></Link></div>

                        <div className="col-12 col-sm-4 col-lg-8 text-right pt-4" id="exampleAccordion" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion1" aria-expanded="true" aria-controls="exampleAccordion1"><ion-icon name="checkbox-outline"></ion-icon>進階篩選</div>
                        <div id="exampleAccordion1" className="collapse show w-100" role="tabpanel">
                            <div className="changetoinline col-12 col-sm-4 col-lg-5  p-1">
                                <div className="">
                                <label  className="" >肌膚類型</label><br/>
                                <select className="form-control formbc-color flex-column " id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                                </div>
                            </div>
                            <div className="changetoinline col-12 col-sm-4 col-lg-5 p-1">
                                <div className="">
                                <label  className="" >產品類型</label><br/>
                                <select className="form-control formbc-color flex-column " id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                                </div> 
                            </div>
                            {/* <div className="changetoinline col-12 col-sm-4 col-lg-2 text-center">
                                <button className="lilibtn g-btn ">搜尋</button>
                            </div> */}
                        </div>
                            

                    </div>
                    <switch>
                    {/* http://localhost:3000/article/articlelist */}
                    <Route exact path={`${this.props.match.path}/articlelist`} component={Articlelist} /> 
                    {/* http://localhost:3000/bv/article/articlelist/*/}
                    <Route exact path={`${this.props.match.path}/articlelist/:page`} component={Articlelist} />
                    {/* http://localhost:3000/article/my */}
                    {/* <Route path={`${this.props.match.path}/my`} component={My} />   */}
                    <Route path={`${this.props.match.path}/my/:usid`} component={My} />       
                    {/* http://localhost:3000/article/Add */}
                    <Route path={`${this.props.match.path}/add`} component={Add} />
                    {/* http://localhost:3000/article/detail */}
                    <Route exact path={`${this.props.match.path}/articlelist/detail/:id`} component={Detail} />         
                    </switch>     
                </div>     
        </React.Fragment>
        )
    }
}
export default Article;