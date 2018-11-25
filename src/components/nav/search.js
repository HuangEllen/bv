import React, { Component } from 'react';
import './search.scss';
// import 'https://fonts.googleapis.com/css?family=Lato:300,400,700';

class search extends Component {


    render() {
        return (
            <React.Fragment>
                
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700" />

                    <form className="search">
                        <div className="search__wrapper">
                            <input type="text" name="" placeholder="Search for..." className="search__field" />
                            <button type="submit" className="fa fa-search search__icon"></button>
                        </div>
                    </form>
            

            </React.Fragment>


        )
    }
}
export default search;