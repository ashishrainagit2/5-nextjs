 const Footer = () => {
    return (
        <div role="contentinfo" className="member-footer">
            <div className="social-links">
                <a className="social-link" href="https://www.facebook.com/NetflixIN/" target="_blank" aria-label="facebook">
                <span className="span-icon span-icon-facebook-logo" focusable="true"></span>
                </a>
                <a className="social-link" href="https://www.instagram.com/Netflix_IN/" target="_blank" aria-label="instagram"><span className="span-icon span-icon-instagram-logo" focusable="true"></span>
                </a>
                <a className="social-link" href="https://twitter.com/netflixindia" target="_blank" aria-label="twitter">
                    <span className="span-icon span-icon-twitter-logo" focusable="true"></span>
                </a>
                <a className="social-link" href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg" target="_blank" aria-label="youtube">
                    <span className="span-icon span-icon-youtube-logo" focusable="true"></span>
                </a></div><ul className="member-footer-links"><li className="member-footer-link-wrapper"><a className="member-footer-link" href="/browse/subtitles"><span className="member-footer-link-content">Audio and Subtitles</span></a></li><li className="member-footer-link-wrapper"><a className="member-footer-link" href="/browse/audio-description"><span className="member-footer-link-content">Audio Description</span></a></li><li className="member-footer-link-wrapper"><a className="member-footer-link" href="https://help.netflix.com/"><span className="member-footer-link-content">Help Centre</span></a></li><li className="member-footer-link-wrapper"><a className="member-footer-link" href="/redeem"><span className="member-footer-link-content">Gift Cards</span></a></li><li className="member-footer-link-wrapper"><a className="member-footer-link" href="https://media.netflix.com/"><span className="member-footer-link-content">Media Centre</span></a></li><li className="member-footer-link-wrapper"><a className="member-footer-link" href="http://ir.netflix.com/"><span className="member-footer-link-content">Investor Relations</span></a></li><li className="member-footer-link-wrapper"><a className="member-footer-link" href="https://jobs.netflix.com/"><span className="member-footer-link-content">Jobs</span></a></li><li className="member-footer-link-wrapper"><a className="member-footer-link" href="https://help.netflix.com/legal/termsofuse"><span className="member-footer-link-content">Terms of Use</span></a></li><li className="member-footer-link-wrapper"><a className="member-footer-link" href="https://help.netflix.com/legal/privacy"><span className="member-footer-link-content">Privacy</span></a></li><li className="member-footer-link-wrapper"><a className="member-footer-link" href="https://help.netflix.com/legal/notices"><span className="member-footer-link-content">Legal Notices</span></a></li><li className="member-footer-link-wrapper"><a className="member-footer-link" href="/Cookies"><span className="member-footer-link-content">Cookie Preferences</span></a></li><li className="member-footer-link-wrapper"><a className="member-footer-link" href="https://help.netflix.com/support/2101"><span className="member-footer-link-content">Corporate Information</span></a></li><li className="member-footer-link-wrapper"><a className="member-footer-link" href="https://help.netflix.com/contactus"><span className="member-footer-link-content">Contact Us</span></a></li></ul><div className="member-footer-service"><button className="service-code">Service Code</button></div><div className="member-footer-copyright"><span>© 1997-2019 ABC, Inc.</span><span className="member-footer-copyright-instance"></span>
            </div>
        <style jsx>
            {`
                .member-footer {
                    margin: 20px auto 0;
                    padding: 0 4%;
                    color: #808080;
                  }
                  .member-footer .social-links {
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -moz-box;
                    display: -ms-flexbox;
                    display: flex;
                    margin-bottom: 1em;
                  }
                  .member-footer .social-links .social-link {
                    margin-right: 15px;
                  }
                  .member-footer .social-links .social-link .svg-icon {
                    fill: #808080;
                    height: 25px;
                    width: 36px;
                  }
                  .member-footer .member-footer-help {
                    font-size: 16px;
                    margin-bottom: 30px;
                    color: #fff;
                    padding: 0;
                  }
                  .member-footer .member-footer-links {
                    font-size: 13px;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -moz-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-orient: horizontal;
                    -webkit-box-direction: normal;
                    -webkit-flex-direction: row;
                       -moz-box-orient: horizontal;
                       -moz-box-direction: normal;
                        -ms-flex-direction: row;
                            flex-direction: row;
                    -webkit-flex-wrap: wrap;
                        -ms-flex-wrap: wrap;
                            flex-wrap: wrap;
                    -webkit-box-align: start;
                    -webkit-align-items: flex-start;
                       -moz-box-align: start;
                        -ms-flex-align: start;
                            align-items: flex-start;
                    margin: 0 0 14px 0;
                    padding: 0;
                  }
                  .member-footer .member-footer-link-wrapper {
                    list-style-type: none;
                    -webkit-box-flex: 0;
                    -webkit-flex: 0 0 50%;
                       -moz-box-flex: 0;
                        -ms-flex: 0 0 50%;
                            flex: 0 0 50%;
                    margin-bottom: 16px;
                    -webkit-box-sizing: border-box;
                       -moz-box-sizing: border-box;
                            box-sizing: border-box;
                  }
                  @media (min-width: 800px) {
                    .member-footer .member-footer-link-wrapper {
                      -webkit-flex-basis: 25%;
                          -ms-flex-preferred-size: 25%;
                              flex-basis: 25%;
                    }
                  }
                  .member-footer .member-footer-link {
                    color: white;
                    text-decoration: none;
                  }
                  .member-footer .member-footer-link:hover {
                    text-decoration: underline;
                  }
                  .member-footer .member-footer-link-update {
                    font-weight: bold;
                  }
                  .member-footer .member-footer-copyright {
                    font-size: 11px;
                    margin-bottom: 15px;
                  }
                  .member-footer .member-footer-copyright-instance {
                    padding: 0 4px;
                    display: inline-block;
                  }
                  .member-footer .service-code {
                    margin-bottom: 20px;
                    font-size: 13px;
                    padding: 0.5em;
                  }
                  .member-footer .copy-text-block + .copy-text-block {
                    margin-top: 3px;
                  }
                  .service-code {
                    background: transparent;
                    color: #808080;
                    border: solid 1px #808080;
                    font-size: 1.3rem;
                    padding: 0.5rem;
                  }
                  .service-code:hover {
                    cursor: pointer;
                    color: #fff;
                  }
                  .sortGallery {
                    float: right;
                    font-size: 14px;
                    text-align: right;
                  }
                  .sortGallery .nfDropDown.theme-lakira {
                    margin-left: 10px;
                    min-width: 240px;
                  }
                  .sortGallery ul.maturitySelectors li {
                    display: inline-block;
                    list-style: none;
                    margin-left: 13px;
                  }
                  .sortGallery ul.maturitySelectors li label {
                    display: inline;
                  }
                  .sortGallery ul.maturitySelectors li input {
                    display: none;
                  }
                  .sortGallery ul.maturitySelectors li input + label {
                    border: 1px solid #333;
                    padding: 6px;
                    -webkit-border-radius: 0;
                       -moz-border-radius: 0;
                            border-radius: 0;
                    display: inline-block;
                    position: relative;
                    margin-right: 3px;
                    top: 2px;
                  }
                  .member-footer {
                      background: black;
                  }
            `}
        </style>
        </div>
    )
}

export default Footer;