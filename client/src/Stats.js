import React from 'react';
import people from './people.png';
import hands from './hands.png';
import heartbeat from './heartbeat.png';
import money from './money.png';

class Stats extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <img src={people} alt="" />
                        <h3>Volunteers</h3>
                        <p>415</p>
                    </div> 
                    <div>
                        <img src={hands} alt="" />
                        <h3>Donors</h3>
                        <p>2090</p>
                    </div> 
                    <div>
                        <img src={heartbeat} alt="" />
                        <h3>People Save</h3>
                        <p>9046</p>
                    </div> 
                    <div>
                        <img src={money} alt="" />
                        <h3>Donated</h3>
                        <p>900K</p>
                    </div>
                </div>
                <div>
                    <p>If you don’t see what you’re looking for here, get in touch with us directly at <a href="mailto:info@Gorib.org">info@Gorib.org</a> or by calling <span class="orange">029292162</span> We’d love to help you find the best way to contribute.</p>
                </div>
`            </div>
        )
    }
}

export default Stats