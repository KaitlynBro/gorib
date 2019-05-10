import React from 'react';
import hero from './assets/hero-bg.png';
import orange from './assets/orangeBlob.png';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-image">
                    <img src={hero} alt='' />
                </div>
                <div className="header-content">
                    <img src={orange} alt="" className="orange-blob" />
                    <h1>Nonprofits<br /> get ready<br /> for your best year ever</h1>
                    <p>Join over 22 million people supporting charity and personal causes</p>
                    {/* MAKE BUTTON COMPONENT AND ADD IN HERE */}
                    <div className="header-content-buttons">
                        <button className="button-single">Start Fundraising</button>
                        <button className="button-single">Donate</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
