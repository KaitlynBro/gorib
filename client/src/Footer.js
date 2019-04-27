import React from 'react';
// import Form from './Form';
import logo from './gorib-logo.png';
import facebook from './fb.svg';
import google from './google.svg';
import linkedin from './linkedin.svg';
import twitter from './twitter.svg';
// import envelope from './envelope.svg';
import phone from './phone.svg';

class Footer extends React.Component {
    render() {
        return (
            <div>
              <div>
                <span>
                  <img src={logo} alt="" />
                  <h1>Gorib</h1>
                </span>
                <p>The Gorib charity provides enhanced services over and above what the NHS funds. help child </p>
                <div>
                  <button>
                    <img src={facebook} alt="" />
                  </button>
                  <button>
                    <img src={google} alt="" />
                  </button>
                  <button>
                    <img src={linkedin} alt="" />
                  </button>
                  <button>
                    <img src={twitter} alt="" />
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <h3>Get Involved</h3>
                  <ul>
                    <li>Donate</li>
                    <li>Sponsor</li>
                    <li>Fundraise</li>
                  </ul>
                </div>
                <div>
                  <h3>Why You Can Help</h3>
                  <ul>
                    <li>Donate</li>
                    <li>Sponsor</li>
                    <li>Fundraise</li>
                  </ul>
                </div>
                <div>
                  <h3>Update News</h3>
                  <span>
                    <p>Campaign For Build Diamond Future Orphan</p>
                  </span>
                  <span>
                    <p>New Award To Support Children Affected by Crises</p>
                  </span>
                  <span>
                    <p>Campaign For Build Diamond Future Orphan</p>
                  </span>
                  <span>
                    <p>New research has revealed a staggering lack of awareness</p>
                  </span>
                </div>
              </div>
              <div>
                <p>Gorib  © 2018 All Rights Reserved Terms of Use and Privacy Policy</p>
                <p>+88 - 01912704287 <span><img src={phone} alt="" /></span></p>
              </div>
            </div>
        )
    }
} 

export default Footer