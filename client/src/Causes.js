import React from 'react';
// import causeBg from './causes-bg.png'
import causeOne from './causeOne.jpg';
import causeTwo from './causeTwo.jpg';
import causeThree from './causeThree.jpg';
import headerOrange from './orangeHeader.png';
import statisticBlue from './StatBlue.png';
import statisticGreen from './StatisticGreen.png';
import statisticPurple from './StatisticPurple.png';

class Causes extends React.Component {
    render() {
        return (
            <div className="causes-wrapper">
                <div className="causes-header">
                    <img src={headerOrange} alt="" className="header-icon" />
                    <h2>Latest Causes</h2>
                    <p>We use your donations to help vulnerable children and young people turn their lives around</p>
                    {/* <img src={causeBg} alt="" className="causes-wrapper-bg" /> */}
                </div>
                <div className="causes-content">
                    <div className="cause">
                        <img src={causeOne} alt="" className="cause-image"/>
                        <div className="cause-text">
                            <div className="cause-text-top">
                                <h3>Schools Not Slavery for Rural Haitian Children</h3>
                                <div className="cause-percentage-container">
                                    <p>80%</p>
                                    <img src={statisticBlue} alt="" />
                                </div>
                                
                            </div>
                            <div className="cause-text-bottom">
                                <ul>
                                    
                                    <li>Goal</li>
                                    <li>$12,760</li>
                                </ul>
                                <ul>
                                    <li>Remaining</li>
                                    <li>80%</li>
                                </ul>
                                <ul>
                                    <li>Days to go</li>
                                    <li>77</li>
                                </ul>
                            </div>
                            <div className="cause-text-buttons">
                                <button className="button-single">Donation</button>
                                <button className="button-single">View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="cause">
                        <img src={causeTwo} alt="" className="cause-image"/>
                        <div className="cause-text">
                            <div className="cause-text-top">
                                <h3>Build Another Water Well Closer to the People</h3>
                                <div className="cause-percentage-container">
                                    <p>65%</p>
                                    <img src={statisticGreen} alt="" />
                                </div>
                                
                            </div>
                            <div className="cause-text-bottom">
                                <ul>
                                    
                                    <li>Goal</li>
                                    <li>$15,760</li>
                                </ul>
                                <ul>
                                    <li>Remaining</li>
                                    <li>65%</li>
                                </ul>
                                <ul>
                                    <li>Days to go</li>
                                    <li>700</li>
                                </ul>
                            </div>
                            <div className="cause-text-buttons">
                                <button className="button-single">Donation</button>
                                <button className="button-single">View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="cause">
                        <img src={causeThree} alt="" className="cause-image"/>
                        <div className="cause-text">
                            <div className="cause-text-top">
                                <h3>Rich Stearns reflects on the Rev. Billy Graham’s death</h3>
                                <div className="cause-percentage-container">
                                    <p>60%</p>
                                    <img src={statisticPurple} alt="" />
                                </div>
                                
                            </div>
                            <div className="cause-text-bottom">
                                <ul>
                                    
                                    <li>Goal</li>
                                    <li>$15,790</li>
                                </ul>
                                <ul>
                                    <li>Remaining</li>
                                    <li>45%</li>
                                </ul>
                                <ul>
                                    <li>Days to go</li>
                                    <li>125</li>
                                </ul>
                            </div>
                            <div className="cause-text-buttons">
                                <button className="button-single">Donation</button>
                                <button className="button-single">View More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Causes