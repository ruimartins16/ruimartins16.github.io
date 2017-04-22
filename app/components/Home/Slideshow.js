import React, { Component } from 'react';

class Slideshow extends Component {

    constructor() {
        super();
        this.state = { alturaJanela: 0, alturaNav : 0 };
        this.updateDimensions = this.updateDimensions.bind(this);
    }


    updateDimensions() {
        this.setState({alturaJanela: window.innerHeight, alturaNav :  document.getElementById('navBar').clientHeight});
    };

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    };
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    };

    render() {



        const slideUm = {
            backgroundImage: 'url(./app/recursos/img/home-1.jpg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            height: this.state.alturaJanela - this.state.alturaNav - 24 - 20 - 24, //24 é o padding top e 20 é a marginBottom da class navbar
            minHeight : '500px'
        };

        const slideDois = {
            backgroundImage: 'url(./app/recursos/img/home-2.jpg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            height: $(window).height() - this.state.alturaNav - 24 - 20 - 24, //24 é o padding top e 20 é a marginBottom da class navbar
            minHeight : '500px'
        };

        const slideTres = {
            backgroundImage: 'url(./app/recursos/img/home-3.jpg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            height: $(window).height() - this.state.alturaNav - 24 - 20 - 24, //24 é o padding top e 20 é a marginBottom da class navbar
            minHeight : '500px'
        };

        const noPadding = {
            padding: 0,
        };



        return (
            <div className="main-container" style={noPadding}>

                <div id="carousel-example-generic" className="carousel slide">
                    <div className="carousel-inner" role="listbox">

                        <div className="item active" style={slideUm}>
                            <div className="carousel-caption">
                                <h3 data-animation="animated bounceInLeft" className="animated slideInDown">
                                    This is the caption for slide 1
                                </h3>
                                <h3 data-animation="animated bounceInRight" className="animated slideInLeft">
                                    This is the caption for slide 1
                                </h3>
                            </div>
                        </div>

                        <div className="item" style={slideDois}>
                            <div className="carousel-caption">
                                <h3 data-animation="animated bounceInLeft" className="animated slideInDown">
                                    This is the caption for slide 1
                                </h3>
                                <h3 data-animation="animated bounceInRight" className="animated slideInLeft">
                                    This is the caption for slide 1
                                </h3>
                            </div>
                        </div>

                        <div className="item" style={slideTres}>
                            <div className="carousel-caption">
                                <h3 data-animation="animated bounceInLeft" className="animated slideInDown">
                                    This is the caption for slide 1
                                </h3>
                                <h3 data-animation="animated bounceInRight" className="animated slideInLeft">
                                    This is the caption for slide 1
                                </h3>
                            </div>
                        </div>

                    </div>

                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>





    );

    }
}

export default Slideshow;
