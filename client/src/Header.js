import React from 'react';
import hero from './hero-bg.png';
import heroPurpleBlob from './hero-purpleBlob.png';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-image">
                    <img src={hero} alt='' />
                </div>
                <div className="header-content">
                    <h1>Nonprofits<br /> get ready<br /> for your best year ever</h1>
                    <p>Join over 22 million people supporting charity and personal causes</p>
                    {/* MAKE BUTTON COMPONENT AND ADD IN HERE */}
                    <img src={heroPurpleBlob} alt="" />
                    <button>Start Fundraising</button>
                    <button>Donate</button>
                </div>
            </div>
        )
    }
}

export default Header
