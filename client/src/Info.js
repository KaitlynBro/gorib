import React from 'react';
import worldVisionBg from './assets/worldVision.png';
import orangeBlob from './assets/info-orange.png';
import cash from './assets/cash-hand.png';

class Info extends React.Component {
    render() {
        return(
            <div className="info-wrapper">
                <div className="info-bg">
                    <img src={worldVisionBg} alt="" />
                </div>
                <div className="info-copy">
                    <h4>
                        <img src={orangeBlob} alt="" className="info-copy-blob"/>
                        Welcome to Gorib please<br />
                        raise your hand
                    </h4>
                    <h3>Everything you need to know about World Vision child sponsorship</h3>
                    <div className="info-copy-paragraph">
                        <p>We are Gorib / non-profit/ fundraising/ NGO organizations. Our justgiving activities are taken place around the world,let contribute to them with us by your hand to be a better life.</p>
                        <p>Gorib founded 25 years ago as the American Institute of Philanthropy (AIP), is America's most independent, assertive charity watchdog. CharityWatch does not merely repeat what a charity reports using simplistic or automated formulas.</p>
                        <p>Keeping our costs down (85% to programs) means your gifts make the biggest waves possible</p>
                        <span>
                            <img src={cash} alt="" />
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}


export default Info