import React, { Component } from 'react';
import Paragrafo from '../Partials/Paragrafo';



class FormEncomenda extends Component {
    render() {
        const styleMain = {
            padding: 0,
            margin: '5% 0 0 0',
        };

        const styleMain2 = {
            padding: 0,
            margin: '5% 0 0 0',
        };

        const styleImg = {
            width: '70%',
            margin: '12% 0',
        };

        const styleSubmit = {
            padding: '0',
            height: '50px',
            borderRadius: '4px',
            backgroundColor: '#4A90E2',
            border: 0,
            fontFamily: 'raleway-bold,sans-serif',
            color: '#ffffff',
            fontSize: '18px',
            margin: '5% auto 0 auto',
            left: '50%',
            transform: 'translate(-50%, 0)'
        };

        const styleInput = {
            width: '100%',
            height: '52px',
            border: '1px solid #C6CFD9',
            borderRadius: '4px'
        };

        const styleInputCD = {width: '40%',
            height: '52px',
            border: '1px solid #C6CFD9',
            borderRadius: '4px',
            marginTop: '5%'
        };

        return (
            <div>
                <div className="col-xs-6" style={styleMain}>
                    <div className="col-sm-offset-1" style={{position: 'absolute'}}>
                        <Paragrafo  text="ENCOMENDA JÁ O NOSSO ALBUM" fontFamily="raleway-bold, sans-serif" size="24px"/>

                    </div>
                    <div className="col-sm-offset-1">
                        <img src="./app/recursos/img/caixa-cd.png" style={styleImg} alt=""/>
                        <Paragrafo  text="Também nos podem ouvir no &nbsp;" fontFamily="raleway-regular, sans-serif" size="14px" color="#9B9B9B" display="inline-block"/>
                        <Paragrafo  text="Spotify" fontFamily="raleway-regular, sans-serif" size="14px" color="#538026" display="inline-block"/>
                    </div>
                </div>

                <div className="col-xs-5" style={styleMain2}>
                    <div className="col-xs-12" style={{padding: 0}}>
                        <Paragrafo  text="ADQUIRA JÁ O ALBUM BALADA A COIMBRA POR 10€" fontFamily="raleway-bold, sans-serif" size="18px" margin="12% 0 0 0" color="#4A4A4A"/>

                        <Paragrafo  text="Primeiro e Último Nome*" fontFamily="raleway-regular, sans-serif" size="18px" margin="5% 0 1% 0" color="#4A4A4A"/>
                        <input type="text" style={styleInput}/>

                        <Paragrafo  text="Email*" fontFamily="raleway-regular, sans-serif" size="18px" margin="5% 0 1% 0" color="#4A4A4A"/>
                        <input type="email" style={styleInput}/>

                        <Paragrafo  text="Telemóvel*"  fontFamily="raleway-regular, sans-serif" size="18px" margin="5% 0 1% 0" color="#4A4A4A"/>
                        <input type="number" id="formEncomendaTlm" style={styleInput}/>

                        <input type="number" id="formEncomendaCD" min="0" defaultValue="0" style={styleInputCD}/>
                    </div>

                       <button className="col-xs-8 text-center" style={styleSubmit} type="submit">Encomendar</button>



                </div>
            </div>

        );

    }
}

export default FormEncomenda;
