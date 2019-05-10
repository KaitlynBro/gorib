import React from 'react';
import orangeBlob from './assets/orangeBlob.png';
import eventBg from './assets/events.png';

class Events extends React.Component {
    render() {
        return (
            <div className="events-wrapper">
                <div className="events-top">
                    <img src={orangeBlob} alt="" />
                    <h2>Upcoming Events</h2>
                    <div className="events-flex">
                        <p>The Gorib charity provides enhanced services over and above what the NHS funds. Our upcoming event</p>
                        <button className="button-single">Event List</button>
                    </div>
                </div>
                <div className="events-bottom">
                    <div className="events-left">
                        <img src={eventBg} alt="" />
                        <div className="blob-copy">
                            <p className="event-date">
                                <span>16</span>
                                <p>february 2019</p>
                            </p>
                            <h2>Fundraising as a team in the workplace </h2>
                            <p className="event-info">Pay tribute to a special person in your life with a donation made in their honor and help make sure that no child in America</p>
                            <button className="button-single">Learn More</button>
                        </div>
                    </div>
                    <div className="events-right">
                        <div className="events-dates">
                            <div className="event-day">
                                <span className="event-day-date">
                                    <p className="event-day-number">10</p>
                                    <p>January 2019</p>
                                </span>
                                <span className="event-day-times">
                                    <ul>
                                        <li>
                                            START: JAN 10, 2022
                                        </li>
                                        <li>
                                            END: JAN 18, 2025
                                        </li>
                                    </ul>
                                    <p>Give gifts that Deliver Hope!</p>
                                </span>
                            </div>

                            <div className="event-day">
                                <span className="event-day-date">
                                    <p className="event-day-number">10</p>
                                    <p>February 2019</p>
                                </span>
                                <span className="event-day-times">
                                    <ul>
                                        <li>
                                            START: Feb 10, 2022
                                        </li>
                                        <li>
                                            END: Feb 18, 2025
                                        </li>
                                    </ul>
                                    <p>60s Fundraising Night</p>
                                </span>
                            </div>

                            <div className="event-day">
                                <span className="event-day-date">
                                    <p className="event-day-number">10</p>
                                    <p>March 2019</p>
                                </span>
                                <span className="event-day-times">
                                    <ul>
                                        <li>
                                            START: Mar 18, 2022
                                        </li>
                                        <li>
                                            END: Mar 18, 2025
                                        </li>
                                    </ul>
                                    <p>Wales Biggest Summer Fair</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events