import React from 'react';
// import Form from './Form';
import logo from './assets/gorib-logo.png';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-wrapper">
              <div className="footer-content">
                <div className="footer-left footer">
                  <span className="footer-logo">
                    <img src={logo} alt="" className="logo" />
                    <h1>Gorib</h1>
                  </span>
                  <p>The Gorib charity provides enhanced services over and above what the NHS funds. help child </p>
                  <div className="footer-social">
                  <i class="fab fa-facebook-f social"></i>

                      <i class="fab fa-google social"></i>

                      <i class="fab fa-linkedin-in social"></i>

                      <i class="fab fa-twitter social"></i>
                  </div>

                  <div className="footer-email-wrapper">
                    <input type="text" placeholder="Email Address" className="footer-email" />
                    <span class="bottom email"></span>
                    <span class="right email"></span>
                    <span class="top email"></span>
                    <span class="left email"></span>
                    <input type="submit" placeholder="Submit" className="footer-submit" />
                  </div>
                  
                </div>

                <div className="footer-center footer">
                  <div className="footer-services footer-services-top">
                    <h3>Get Involved</h3>
                    <ul>
                      <button>Donate</button>
                      <button>Sponsor</button>
                      <button>Fundraise</button>
                    </ul>
                  </div>
                  <div className="footer-services footer-services-bottom">
                    <h3>Why You Can Help</h3>
                    <ul>
                      <button>Donate</button>
                      <button>Sponsor</button>
                      <button>Fundraise</button>
                    </ul>
                  </div>
                </div>

                <div className="footer-right footer">
                    <h3>Update News</h3>
                      <ul>
                        <button>Campaign For Build Diamond Future Orphan</button>
                        <button>New Award To Support Children Affected by Crises</button>
                        <button>Campaign For Build Diamond Future Orphan</button>
                      </ul>
                </div>
              </div>
              {/* <div className="footer-bottom">
                <p>Gorib  © 2018 All Rights Reserved Terms of Use and Privacy Policy</p>
                <p>+88 - 01912704287 <span><img src={phone} alt="" /></span></p>
              </div> */}
            </div>
        )
    }
} 

export default Footer