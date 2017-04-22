import React, { Component } from 'react';
import Navbar from '../Partials/Navbar';
import Slideshow from './Slideshow';
import FormEncomenda from "./FormEncomenda";
import Footer from "../Partials/Footer";


class Home extends Component {
    render() {

        const mainStyle = {
            // backgroundColor: 'blue',
            height: 'calc(100vh - 24px)',
            minHeight: '600px',
            padding: 0
        };



        const paddingBase = {
            padding: '24px 40px'
        };
        return (

            <div className="container-fluid" style={paddingBase}>

                <div className="col-xs-12" id="main" style={mainStyle}>

                    <Navbar/>
                    <Slideshow/>

                </div>
                <FormEncomenda/>
                <Footer/>
            </div>



        );

    }
}

export default Home;
