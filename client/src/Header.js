import React from 'react';
import hero from './hero-bg.png';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div>
                    <img src={hero} alt='' />
                </div>
                <div>
                    <h1>Nonprofits<br /> get ready<br /> for your best year ever</h1>
                    <p>Join over 22 million people supporting charity and personal causes</p>
                    {/* MAKE BUTTON COMPONENT AND ADD IN HERE */}
                </div>
            </div>
        )
    }
}

export default Header
