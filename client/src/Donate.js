import React from 'react';
import blob from './assets/donate-blob.png'
import infoWorld from './assets/info-world.png';
import infoHeart from './assets/info-heart.png';
import background from './assets/donate-background.png';

class Donate extends React.Component {
    render() {
        return (
            <div className="donate-wrapper">
                <div className="donate-content">
                    <div className="donate-copy">
                        <img src={blob} alt="" />
                        <h4>Gorib Donation <br /> Raise more money. </h4>
                        <h3>People like you do amazing things on Gorib every day!</h3>
                        <p>Power your ongoing and emergency fundraising efforts quickly and easily. Gorib relies on email marketing to connect with their donors and raise money for children's rights.</p>
                    </div>
                    <div className="donate-image">
                        <img src={infoWorld} alt="" />
                        <img src={background} alt="" />
                    </div>
                </div>

                <div className="donate-content">
                    <div className="donate-copy">
                        <img src={blob} alt="" />
                        <h4>Re-engage past <br /> donors.</h4>
                        <h3>Campaign Monitor enables us to communicate</h3>
                        <p>Rekindle relationships with lapsed donors. Remind them of your mission and the importance. The Asthma Foundation reaches out to past donors and inviting them to contribute again.</p>
                    </div>
                    <div className="donate-image">
                        <img src={infoHeart} alt="" />
                        <img src={background} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Donate 