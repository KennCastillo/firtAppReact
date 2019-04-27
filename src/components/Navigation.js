
import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <a ref="#" className="text-secondary">
                    { this.props.titulo }
                </a>          
            </nav>  
        )
    }
}

export default Navigation;