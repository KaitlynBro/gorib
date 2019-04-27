import React from 'react';
import infoHeart from './info-heart.png';
import infoWorld from './info-world.png';

class Donate extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <p>Gorib Donation <br /> Raise more money. </p>
                        <h3>People like you do amazing things on Gorib every day!</h3>
                        <p>Power your ongoing and emergency fundraising efforts quickly and easily. Gorib relies on email marketing to connect with their donors and raise money for children's rights.</p>
                    </div>
                    <div>
                        <img src={infoHeart} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <p>Re-engage past <br /> donors.</p>
                        <h3>Campaign Monitor enables us to communicate</h3>
                        <p>Rekindle relationships with lapsed donors. Remind them of your mission and the importance. The Asthma Foundation reaches out to past donors and inviting them to contribute again.</p>
                    </div>
                    <div>
                        <img src={infoWorld} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Donate 