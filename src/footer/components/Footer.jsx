import React from 'react';
import { connect } from 'react-redux';
import * as footerSelectors from '../footer.selectors';
import FooterLinksList from './FooterLinksList';

import '../styles/footer.scss';

function Footer({ linksData }) {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__navigation">
          {linksData.map(linksData => (
            <FooterLinksList key={linksData.id} linksData={linksData} />
          ))}
          <div className="footer__contact-and-follow">
            <h6>Contact us:</h6>
            <span>+38 (044) 500 49 73</span>
            <h6>Follow us:</h6>
            <a href="https://www.facebook.com/KyivAirport">
              <img src="./images/footer/facebook.svg" alt="FaceBook" />
            </a>
            <a href="https://twitter.com/KyivAirport">
              <img src="./images/footer/twitter.svg" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/kyivairport/">
              <img src="./images/footer/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/channel/UC-YNjGc3PCb60YCf82-qi_Q/feed">
              <img src="./images/footer/youtube.svg" alt="YouTube" />
            </a>
            <a href="https://www.linkedin.com/company/airportkyiv/">
              <img src="./images/footer/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </nav>
        <div className="footer__extra-info-block">
          <div className="footer__middle-logo-wrapper">
            <div className="footer__small-logo-wrapper">
              <span>
                © 2011-2021
                <br />
                «Kyiv» International Airport
              </span>
            </div>
            <div className="footer__small-logo-wrapper">
              <a href="https://ufuture.com/uk/">
                Part of
                <b>
                  {' '}
                  Ufuture
                  <br />
                  Investment Group
                </b>
                <img src="./images/footer/ufuture.png" alt="uFuture logo" />
              </a>
            </div>
          </div>
          <div className="footer__small-logo-wrapper footer__small-logo-wrapper_last">
            <a href="https://ufuture.com/uk/">
              Developed by <br />
              <img src="./images/footer/smpl-logo.webp" alt="smpl logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const mapState = state => ({
  linksData: footerSelectors.footerLinksDataSelector(state),
});

export default connect(mapState, null)(Footer);
