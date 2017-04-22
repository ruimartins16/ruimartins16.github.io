import React, { Component } from 'react';


class Footer extends Component {
    render() {

        const styleFooter = {
            height: '82px',
            padding: 0,
            marginTop: '24px'
        };

        const styleP = {
            position: 'relative',
            display: 'inline-block',
            top: '50%',
            transform: 'translate(0, -50%)'
        };

        const styleSpan = {
            fontFamily: 'raleway-bold, sans-serif'
        };

        const styleImg = {
            position: 'relative',
            height: '60px',
            top: '50%',
            transform: 'translate(0, -50%)'
        };

        return (

            <div className="col-xs-12" style={styleFooter}>
                <div className="col-xs-4" style={styleFooter}>
                    <p style={styleP}><span style={styleSpan}>Amanhecer</span><br/>© todos os direitos Reservados,2017</p>
                </div>
                <div className="col-xs-4 text-center" style={styleFooter}>
                    <img style={styleImg} src="./app/recursos/img/1-small.png" alt=""/>
                </div>
            </div>
        );
    }
}

export default Footer;