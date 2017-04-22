import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';

class Navbar extends Component {

    constructor() {
        super();
        this.state = { isOpen: false, hover_yt: false, hover_fb: false, hover_spot: false,};
        this.toogleSidebar = this.toogleSidebar.bind(this);
        this.toggleHoverFb = this.toggleHoverFb.bind(this);
        this.toggleHoverYt = this.toggleHoverYt.bind(this);
        this.toggleHoverSpot = this.toggleHoverSpot.bind(this);
    }


    toogleSidebar() {
        if(!this.state.isOpen){
            this.setState({isOpen: true});
        } else {
            this.setState({isOpen: false});
        }
    };

    toggleHoverYt(){
        this.setState({hover_yt: !this.state.hover_yt})
    };

    toggleHoverFb(){
        this.setState({hover_fb: !this.state.hover_fb})
    };

    toggleHoverSpot(){
        this.setState({hover_spot: !this.state.hover_spot})
    };



    render() {



        var isMenuOpen = function(state) {
            console.log( state.isOpen);
        };

        const padding0 = {
            padding: 0
        };

        const styleNavbar = {
            width: '100%',
            border: 0
        };

        const styleLogo = {
            height: '55px'
        };

        const styleLi = {
            height: '55px',
            width: '45px',

        };


        // const styleIconeMenu = {
        //     display: 'none',
        //     width: '25px',
        //     position: 'relative',
        //     left: '50%',
        //     top: '50%',
        //     transform: 'translate(-30%, -50%)'
        // };

        const styleIcone = {
            width: '25px',
            position: 'relative',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer'
        };

        const styleMenuLi = {
          fontSize: '24px',
            margin: '8%',
            cursor: 'pointer'
        };





        return (
                <nav className="navbar navbar-default" style={styleNavbar} id="navBar">




                    <div className="container-fluid" style={padding0}>
                        <div id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">

                                <li><img src="./app/recursos/img/4-M.png" className="img-responsive" alt="logotipo" style={styleLogo}/></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right" style={{margin: 0}}>
                                <li style={styleLi}><img src={"./app/recursos/img/icone_fb_"+this.state.hover_fb+".svg"} className="img-responsive text-center" alt="facebook" style={styleIcone} onMouseEnter={this.toggleHoverFb} onMouseLeave={this.toggleHoverFb}/></li>
                                <li style={styleLi}><img src={"./app/recursos/img/icone_yt_"+this.state.hover_yt+".svg"} className="img-responsive text-center" alt="youtube" style={styleIcone} onMouseEnter={this.toggleHoverYt} onMouseLeave={this.toggleHoverYt}/></li>
                                <li style={styleLi}><img src={"./app/recursos/img/icone_spotify_"+this.state.hover_spot+".svg"} className="img-responsive text-center" alt="spotify" style={styleIcone} onMouseEnter={this.toggleHoverSpot} onMouseLeave={this.toggleHoverSpot}/></li>

                                <li style={styleLi}>
                                    <div className="burger" onClick={this.toogleSidebar}>
                                        <div className="x"></div>
                                        <div className="y"></div>
                                        <div className="z"></div>
                                    </div>
                                </li>


                                <Menu onStateChange={ isMenuOpen }  right noOverlay isOpen={ this.state.isOpen } customBurgerIcon={ false } customCrossIcon={ false } >
                                    <li style={{fontSize: '14px', margin: '0 8% 8% 8%'}} className="menu-item"><span id="pt" className="itemActive">PT</span>&nbsp;|&nbsp;<span id="en">EN</span></li>
                                    <li id="home" className="menu-item itemActive" style={styleMenuLi} href="/">HOME</li>
                                    <li id="bio" className="menu-item " style={styleMenuLi} href="/">BIOGRAFIA</li>
                                    <li id="galeria" className="menu-item " style={styleMenuLi} href="/">GALERIA</li>
                                    <li id="agenda" className="menu-item " style={styleMenuLi} href="/">AGENDA</li>
                                    <li id="contactos" className="menu-item " style={styleMenuLi} href="/">CONTACTOS</li>
                                </Menu>

                            </ul>
                        </div>
                    </div>
                </nav>
        );
    }
}

export default Navbar;