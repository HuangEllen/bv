import React, { Component } from 'react';
import Hero from './hero';
import About from './about';
import AboutUs from './aboutUs'
import LinkClass from '../OpenClass/link';
import TeacherLink from './teacher_link'

class home extends Component {

    render() {
        return (
            <React.Fragment>
                <Hero/>
                <div className="container">
                
                <About/>
                <AboutUs/>
                <h3 className="mt-5 mb-4 text-f">推薦課程</h3>
                <LinkClass />
                <h3 className="mt-5 mb-3 text-f">講師介紹</h3>
                <TeacherLink/>
                </div>
                
            </React.Fragment>



        )
    }
}

export default home;