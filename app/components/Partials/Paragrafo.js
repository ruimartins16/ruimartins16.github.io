import React, { Component } from 'react';


class Paragrafo extends Component {
    render() {
        const styleP = {
            fontFamily: this.props.fontFamily,
            margin: this.props.margin,
            fontSize: this.props.size,
            color: this.props.color,
            display: this.props.display
        };
        return (
            <p style={styleP}>
                {this.props.text}
            </p>
        )
    }
}

Paragrafo.defaultProps = {
    fontFamily: 'raleway-regular, sans-serif',
    margin: '0',
    fontSize: '14px',
    color: '#000000',
    display: 'block'
};

export default Paragrafo;