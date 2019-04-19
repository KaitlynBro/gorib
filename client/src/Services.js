import React from 'react';
import charity from './charity-icon.svg';
import adopt from './adopt-icon.svg';
import heart from './heart-icon.svg';

class Services extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <img src={charity} alt='' />
                        <h3>Fundraise for a charity</h3>
                        <p>Provide direct support to an individual, family or community by paying medical expenses or offering financial aid</p>
                    </div>
                    <div>
                        <img src={adopt} alt='' />
                        <h3>Fostering & adoption</h3>
                        <p>Provide direct support to an individual, family or community by paying medical expenses or offering financial aid</p>
                    </div>
                    <div>
                        <img src={heart} alt='' />
                        <h3>Take care Children</h3>
                        <p>Provide direct support to an individual, family or community by paying medical expenses or offering financial aid</p>
                    </div>
                </div>
                <div>
                    <p>We’ve funded 28,389 Charity projects for 8.2 million people Here’s how you can get involved.</p>
                    <button>Get informed</button>
                </div>
            </div>
        )
    }
}

export default Services