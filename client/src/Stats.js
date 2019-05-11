import React from 'react';
import background from './assets/stats-bg.png';
import people from './assets/people.png';
import hands from './assets/hands.png';
import heartbeat from './assets/heartbeat.png';
import money from './assets/money.png';

class Stats extends React.Component {
    render() {
        return (
            <div className="stats-wrapper">
                <img src={background} alt="" className="stats-bg"/>
                <div className="stats-content">
                    <div className="stat">
                        <img src={people} alt="" />
                        <div className="stat-wrapper">
                            <h3>Volunteers</h3>
                            <p>415</p>
                        </div>
                    </div> 
                    <div className="stat">
                        <img src={hands} alt="" />
                        <div className="stat-wrapper">
                            <h3>Donors</h3>
                            <p>2090</p>
                        </div>
                    </div> 
                    <div className="stat">
                        <img src={heartbeat} alt="" />
                        <div className="stat-wrapper">
                            <h3>People Save</h3>
                            <p>9046</p>
                        </div>
                    </div> 
                    <div className="stat">
                        <img src={money} alt="" />
                        <div className="stat-wrapper">
                            <h3>Donated</h3>
                            <p>900K</p>
                        </div>
                    </div>
                </div>
`            </div>
        )
    }
}

export default Stats