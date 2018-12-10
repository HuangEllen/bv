import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import College from './components/College/college';
import Home from './components/Home/home';
import Professor from './components/Professor/professor';
import AllProfessor from './components/Professor/allProfessor';
import OpenClass from './components/OpenClass/openClass';
import SubMail from './components/footer/submeil'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.scss';
import './main.scss';
import ClassFrom from './components/InOpenClass/class_from';
import ClassPutFrom from './components/InOpenClass/class_putfrom';


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
            {/* <Route path ='/test' component={Box}/> */}
            <Route path ='/class_from/:id' component={ClassFrom}/>
            <Route path ='/class_from//put/:id' component={ClassPutFrom}/>
          </div>

        </BrowserRouter>
        <SubMail />
        <Footer />
      </React.Fragment>


    );
  }
}

export default App;
