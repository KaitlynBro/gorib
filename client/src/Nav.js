import React from 'react';
import logo from './gorib-logo.png';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <div classname="nav-logo-wrapper">
                <img src={logo} className='logo' alt='logo' />
                <h1>Gorib</h1>
                </div>
                <div className="nav-items">
                    <button className="nav-item">item</button>
                    <button className="nav-item">item</button>
                    <button className="nav-item">item</button>
                    <button className="nav-item">item</button>
                    <button className="nav-item">item</button>
                    <span className="nav-item nav-item--search">
                        <button className="nav-item"><i class="fas fa-search"></i></button>
                    </span>
                </div>
            </div>
        )
    }
}

export default Nav