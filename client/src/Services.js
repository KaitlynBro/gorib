import React from 'react';
import hearts from './hearts.png';
import adopt from './adopt.png';
import services from './services-bg.png';

class Services extends React.Component {
    render() {
        return (
            <div className="services-wrapper">
                <img src={services} alt="" className="services-wrapper-bg" />
                <div className="services-content">
                    <div className="services-item">
                        <img src={hearts} alt='' />
                        <h3>Fundraise for a charity</h3>
                        <p>Provide direct support to an individual, family or community by paying medical expenses or offering financial aid</p>
                    </div>
                    <div className="services-item">
                        <img src={adopt} alt='' />
                        <h3>Fostering & adoption</h3>
                        <p>Provide direct support to an individual, family or community by paying medical expenses or offering financial aid</p>
                    </div>
                    <div className="services-item">
                        <img src={hearts} alt='' />
                        <h3>Take care Children</h3>
                        <p>Provide direct support to an individual, family or community by paying medical expenses or offering financial aid</p>
                    </div>
                    <div className="services-info">
                        <p>We’ve funded <span>28,389</span> Charity projects for <span>8.2 million</span> people Here’s how you can get involved.</p>
                        <button>Get informed</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services