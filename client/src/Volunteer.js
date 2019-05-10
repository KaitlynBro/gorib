import React from 'react';
import background from './assets/volunteer.png';

class Volunteer extends React.Component {
    render() {
        return (
            <div className="volunteer-wrapper">
                <img src={background} alt="" />
                <div class="volunteer-content">                    
                    <h2>Become a proud  volunteer</h2>
                    <div className="volunteer-content-flex">
                        <p>Join your hand with us for a better life and beautiful future. Save The Life To Make The Better World</p>
                        <button className="button-single white">Join Now</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Volunteer