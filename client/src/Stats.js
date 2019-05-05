import React from 'react';
import background from './stats-bg.png';
import people from './people.png';
import hands from './hands.png';
import heartbeat from './heartbeat.png';
import money from './money.png';

class Stats extends React.Component {
    render() {
        return (
            <div className="stats-wrapper">
                <img src={background} alt="" className="stats-bg"/>
                <div className="stats-content">
                    <div className="stat">
                        <img src={people} alt="" />
                        <h3>Volunteers</h3>
                        <p>415</p>
                    </div> 
                    <div className="stat">
                        <img src={hands} alt="" />
                        <h3>Donors</h3>
                        <p>2090</p>
                    </div> 
                    <div className="stat">
                        <img src={heartbeat} alt="" />
                        <h3>People Save</h3>
                        <p>9046</p>
                    </div> 
                    <div className="stat">
                        <img src={money} alt="" />
                        <h3>Donated</h3>
                        <p>900K</p>
                    </div>
                </div>
`            </div>
        )
    }
}

export default Stats