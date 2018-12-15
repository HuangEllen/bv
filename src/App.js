import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'antd/dist/antd.css';
import './App.scss';
import './main.scss';

import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import College from './components/College/college';
import Home from './components/Home/home';
import Professor from './components/Professor/professor';
import AllProfessor from './components/Professor/allProfessor';
import OpenClass from './components/OpenClass/openClass';
import ClassFrom from './components/InOpenClass/class_from';
import Disclaimer from './components/InOpenClass/Disclaimer';
import ClassPutFrom from './components/InOpenClass/class_putfrom';
import SubMail from './components/footer/submeil';
//
import Store from './components/Store/Store';
import Cart from "./components/Cart/Cart";
import Item_detail from "./components/Store/Item_detail";
import Paydeliver from "./components/Cart/Paydeliver"
import Payinformation from "./components/Cart/Payinformation"
import Finish from "./components/Cart/Finish"
import Member from './components/member/Member';
import Register2 from './components/member/Register2';
import MemberCenter from './components/member/MemberCenter';
import Login from './components/member/Login';
import Article from './components/article/Article';



class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        
        <BrowserRouter>
        
          <div className="App">
          <Nav />
            <Route exact path='/' component={Home}/>
            <Route  path='/home' component={Home}/>
            <Route  path="/college" component={College} />
            <Route exact path='/openclass' component={OpenClass}/>
            <Route path='/openclass/:id' component={OpenClass}/>
            <Route exact path ='/professor' component={AllProfessor}/>
            <Route path ='/professor/:id' component={Professor}/>
            <Route path ='/class_from/:id' component={ClassFrom}/>
            <Route path ='/Disclaimer/:id' component={Disclaimer}/>
            <Route path ='/class_from//put/:id' component={ClassPutFrom}/>
            {/*  */}
            <Route path='/store' component={Store} />
            <Route path="/member" component={Member} />
            <Route path="/login" component={Login} />
            <Route path="/register2" component={Register2} />
            <Route path="/MemberCenter" component={MemberCenter} />
            <Route path="/cart" component={Cart} />
            <Route path="/itemdetail/:id" component={Item_detail} />
            <Route path="/Paydeliver" component={Paydeliver}/>
            <Route path="/Payinformation" component={Payinformation}/>
            <Route path="/Finish" component={Finish}/>
            <Route path="/article" component={Article} />
            
          </div>

        </BrowserRouter>
        <SubMail />
        <Footer />
      </React.Fragment>


    );
  }
}

export default App;
