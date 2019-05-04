import React from 'react';
import Search from './Search'
import logo from './gorib-logo.png';


class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="nav-logo-wrapper">
                <img src={logo} className='logo' alt='logo' />
                <h1>Gorib</h1>
                </div>
                <div className="nav-items">
                    <button className="nav-item">Home</button>
                    <button className="nav-item">Services</button>
                    <button className="nav-item">Causes</button>
                    <button className="nav-item">Sponsorship</button>
                    <button className="nav-item">Impact</button>
                    <button className="nav-item">Statistics</button>
                    <button className="nav-item">Volunteer</button>
                    <span className="nav-item nav-item--search">
                        <Search />
                    </span>
                    <div id="search-results">
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav