import React, { Component } from 'react';
import Slider from "react-slick";

class hero extends Component {

	render() {
		return (
			<React.Fragment>
				<header id="myCarousel" className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
						<li data-target="#myCarousel" data-slide-to="1"></li>
						<li data-target="#myCarousel" data-slide-to="2"></li>
					</ol>
					<div className="carousel-inner ">
						<div className="carousel-item active " >
						{/* <div className="carousel-item active ellen_hero_box" style={{background:"url(/images/b02.jpg)"}}> */}
							<img className="first-slide ellen-hero" src="/images/b02.jpg" alt="First slide " />
							<div className="container">
								<div className="carousel-caption text-left">
									<h1 className="text-b">Example headline.</h1>
									<p className="text-b">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
									<p className="ellen_btn"><a className="btn btn-lg bg-first text-w " href="#" role="button">詳 細 資 訊</a></p>
								</div>
							</div>
						</div>
						{/* <div className="carousel-item active ellen_hero_box" style={{background:"url(/images/b01.jpg)"}}>> */}
						<div className="carousel-item ">
							<img className="second-slide ellen-hero" src="/images/b01.jpg" alt="Second slide" />
							<div className="container">
								<div className="carousel-caption text-left">
									<h1 className="text-b">Example headline.</h1>
									<p className="text-b">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
									<p className="ellen_btn"><a className="btn btn-lg bg-first text-w" href="#" role="button">詳 細 資 訊</a></p>
								</div>
							</div>
						</div>
						{/* <div className="carousel-item active ellen_hero_box" style={{background:"url(/images/b02.jpg)"}}>> */}
						<div className="carousel-item ">
							<img className="third-slide ellen-hero" src="/images/b03.jpg" alt="Third slide" />
							<div className="container">
								<div className="carousel-caption text-right">
									<h1 className="text-b">One more for good measure.</h1>
									<p className="text-b">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
									<p className="ellen_btn"><a className="btn btn-lg bg-first text-w" href="#" role="button">詳 細 資 訊</a></p>
								</div>
							</div>
						</div>
					</div>
					<a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
				</header>
			</React.Fragment>



		)
	}
}

export default hero;